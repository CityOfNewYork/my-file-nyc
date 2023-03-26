import gm from 'gm'
import { PDFDocument, PDFEmbeddedPage, PDFImage, PDFPage } from 'pdf-lib'
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
      // console.log(file)

      const fileContentBuffer = fs.readFileSync(savedFiles[file.id])
      // console.log(imgBuffer)

      let scaledImage
      let embedContent

      const imageType = file.contentType.split('/')
      console.log(`Processing file type: ${imageType}`)

      if (file.contentType.includes('jpeg')) {
        embedContent = await pdfDoc.embedJpg(fileContentBuffer)
        scaledImage = embedContent.scale(0.75)
      } else if (file.contentType.includes('png')) {
        embedContent = await pdfDoc.embedPng(fileContentBuffer)
        scaledImage = embedContent.scale(0.75)
      } else if (file.contentType.includes('pdf')) {
        embedContent = await pdfDoc.embedPdf(fileContentBuffer)
      } else {
        throw new Error('File must be jpeg or png')
      }

      // console.log(embbedImage)
      // console.log(scaledImage)
      if (embedContent instanceof PDFImage && scaledImage) {
        const page = pdfDoc.addPage()
        page.drawImage(embedContent, {
          x: page.getWidth() / 2 - scaledImage.width / 2,
          y: page.getHeight() / 2 - scaledImage.height / 2,
          width: scaledImage.width,
          height: scaledImage.height,
        })
      } else {
        for (const embeddedPage of embedContent as PDFEmbeddedPage[]) {
          const page = pdfDoc.addPage()
          const embeddedPageDimensions = embeddedPage.scale(0.5)
          page.drawPage(embeddedPage, {
            ...embeddedPageDimensions,
            x: page.getWidth() / 2 - embeddedPageDimensions.width / 2,
            y: page.getHeight() - embeddedPageDimensions.height / 2,
          })
        }
      }
    }

    console.log('Completed embedding images to pdf. Generating bytestream...')
    const bytesFile = await pdfDoc.save()
    const outputPdfFilepath = path.join('/tmp/', `${document.id}.pdf`)
    fs.writeFileSync(outputPdfFilepath, bytesFile)
    console.log('PDF bytestream generation complete. Returning raw data.')
    console.log('Generating thumbnail from first page...')
    const outputPdfThumbnailFilepath = await createThumbnail(outputPdfFilepath)
    return { outputPdfFilepath, outputPdfThumbnailFilepath }
  }
}

const createThumbnail = (
  inputPath: string,
) => {
  const outputPath = `${inputPath.replace('.pdf', '.png')}`
  return new Promise<string>((resolve, reject) => {
    gm(`${inputPath}[0]`)
    .setFormat('png')
    .resize(128) // Resize to fixed 128px width, maintaining aspect ratio
    // .quality(75) // Quality from 0 to 100
    .write(outputPath, function(error){
        // Callback function executed when finished
        if (!error) {
            console.log('Finished saving png thumbnail of pdf.')
            resolve(outputPath)
        } else {
            console.log(`There was an error saving png thumbnail of pdf:
            ${JSON.stringify(error, null, 2)}
            `)
            reject(error)
        }
    });
  })
}
