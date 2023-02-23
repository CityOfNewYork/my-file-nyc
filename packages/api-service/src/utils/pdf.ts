import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import { createFilePath, downloadObject } from '@/utils/s3'
import { v4 as uuidv4 } from 'uuid'
import { File } from '@/models/file'
import { Document } from '@/models/document'
import path from 'path'

const downloadDocumentFiles = async (files: Array<File>) => {
  const savedFiles: Record<string, string> = {}
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fileSavePath = path.join('/tmp/', file.id)
    console.log(`attempting to download file ${file.path} to ${fileSavePath}`)
    const downloadedFile = await downloadObject(file.path, fileSavePath)
    savedFiles[file.id] = fileSavePath
  }
  console.log(`Multipage Document saved files for processing:
  ${JSON.stringify(savedFiles, null, 2)}
  `)
  return savedFiles
}

export async function generatePDF(
  document: Document | null,
  documentFiles: File[],
  ownerId: any,
  id: any,
) {
  if (!document) {
    throw new Error(
      'Document is null. Cannot generate pdf without document data.',
    )
  } else {
    console.log(`Processing multipage document:
    ${JSON.stringify(document, null, 2)}
    `)
    const pdfDoc = await PDFDocument.create()
    const files = documentFiles || []
    const savedFiles = await downloadDocumentFiles(documentFiles)
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileId = uuidv4()
      // console.log('Image:')
      // console.log(createFilePath(ownerId, id, fileId))

      const page = pdfDoc.addPage()
      // console.log(file)

      const imgBuffer = fs.readFileSync(savedFiles[file.id])
      // console.log(imgBuffer)

      let scaledImage
      let embbedImage

      const imageType = file.contentType.split('/')
      console.log(`Processing image type: ${imageType}`)

      if (file.contentType.includes('jpeg')) {
        embbedImage = await pdfDoc.embedJpg(imgBuffer)
        scaledImage = embbedImage.scale(0.5)
      } else if (file.contentType.includes('png')) {
        embbedImage = await pdfDoc.embedPng(imgBuffer)
        scaledImage = embbedImage.scale(0.5)
      } else {
        throw new Error('File must be jpeg or png')
      }

      // console.log(embbedImage)
      // console.log(scaledImage)

      page.drawImage(embbedImage, {
        x: page.getWidth() / 2 - scaledImage.width / 2,
        y: page.getHeight() / 2 - scaledImage.height / 2,
        width: scaledImage.width,
        height: scaledImage.height,
      })
    }

    console.log('Completed embedding images to pdf. Generating bytestream...')
    const bytesFile = await pdfDoc.save()
    const outputPdfFilepath = path.join('/tmp/', `${document.id}.pdf`)
    fs.writeFileSync(outputPdfFilepath, bytesFile)
    console.log('PDF bytestream generation complete. Returning raw data.')
    return outputPdfFilepath
  }
}
