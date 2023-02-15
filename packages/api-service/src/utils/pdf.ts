import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import { createFilePath, downloadObject } from '@/utils/s3'
import { v4 as uuidv4 } from 'uuid'
import { File } from '@/models/file'
import { Document } from '@/models/document'
import path from 'path'

const downloadDocumentFiles = async (document: Document) => {
  const files = document?.files || []
  const savedFiles: Record<string, string> = {}
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fileSavePath = path.join(process.cwd(), file.id)
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
    const files = document.files || []
    const savedFiles = await downloadDocumentFiles(document)
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

      if (file.contentType === 'jpeg') {
        embbedImage = await pdfDoc.embedJpg(imgBuffer)
        scaledImage = embbedImage.scale(0.5)
      } else {
        embbedImage = await pdfDoc.embedPng(imgBuffer)
        scaledImage = embbedImage.scale(0.5)
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
    console.log('PDF bytestream generation complete. Returning raw data.')
    return bytesFile
  }
}
