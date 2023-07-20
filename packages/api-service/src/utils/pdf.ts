import gm from 'gm'
import { PDFDocument, PDFEmbeddedPage, PDFImage, PDFPage, StandardFonts } from 'pdf-lib'
import fs from 'fs'
import { createFilePath, downloadObject } from '@/utils/s3'
import { v4 as uuidv4 } from 'uuid'
import { File } from '@/models/file'
import { Document } from '@/models/document'
import path from 'path'
import imageSize from 'image-size';
import { ISizeCalculationResult } from 'image-size/dist/types/interface'

const pageWidth = 612;
const pageHeight = 792;

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
      let embedContent
      console.log(`Processing file type: ${file.contentType}`)

      const imgWidth = 500
      const imgMargin = (pageWidth - imgWidth) / 2
      let imageDims: ISizeCalculationResult = { height: 0, width: 0 }
      let resizedImage: Buffer = Buffer.from([])
      if (!file.contentType.includes('pdf')) {
        const imgSrc = savedFiles[file.id]
        resizedImage = await getResizedImage(imgSrc, imgWidth)
        imageDims = imageSize(resizedImage)
      }

      if (file.contentType.includes('jpeg')) {
        console.log('embedding jpeg...')
        embedContent = await pdfDoc.embedJpg(resizedImage)
      } else if (file.contentType.includes('png')) {
        console.log('embedding png...')
        embedContent = await pdfDoc.embedPng(resizedImage)
      } else if (file.contentType.includes('pdf')) {
        console.log('embedding pdf...')
        const fileContentBuffer = fs.readFileSync(savedFiles[file.id])
        const loadedPdf = await PDFDocument.load(fileContentBuffer);
        const totalPages = loadedPdf.getPageCount();
        const copyPageIndices = [];
        for (let i=0; i<totalPages; i++) {
          copyPageIndices.push(i);
        }
        const copiedPages = await pdfDoc.copyPages(loadedPdf, copyPageIndices);
        copiedPages.forEach((p) => pdfDoc.addPage(p));
      } else {
        throw new Error('File must be jpeg, png or pdf')
      }

      if (embedContent instanceof PDFImage) {
        const page = pdfDoc.addPage([pageWidth, pageHeight])
        page.drawImage(embedContent, {
          x: imgMargin,
          y: pageHeight - imgMargin - imageDims.height!,
        })
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

const getPdfTitlePage = async (pdfDoc: PDFDocument, docOwnerName: string, docGenerated: Date) => {
  const titlePage = pdfDoc.insertPage(0, [pageWidth, pageHeight])

  const imgSrc = path.join(process.cwd(), 'myfile-icon.png')
  const imgWidth = 300
  const resizedImage = await getResizedImage(imgSrc, imgWidth)
  const imageDims = imageSize(resizedImage)
  const embedContent = await pdfDoc.embedPng(resizedImage)
  const imgMargin = (pageWidth - imgWidth) / 2
  
  titlePage.drawImage(embedContent, {
    x: imgMargin,
    y: pageHeight - imgMargin - imageDims.height!,
  })

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const myFileTitle = 'My File NYC'
  const documentOwnerText = `Document owner: ${docOwnerName}`
  const createTimestampText = `Created originally at ${docGenerated.toString()}`
  const myFileTitleWidth = helveticaBold.widthOfTextAtSize(myFileTitle, 36)
  const docOwnerTextWidth = helvetica.widthOfTextAtSize(documentOwnerText, 24)
  const createTimestampTextWidth = helvetica.widthOfTextAtSize(createTimestampText, 10)

  const myFileTitleY = (pageHeight - imgMargin - imageDims.height!) - 40 - helveticaBold.heightAtSize(36)
  titlePage.drawText(myFileTitle, {
    x: (pageWidth / 2) - (myFileTitleWidth / 2),
    y: myFileTitleY,
    font: helveticaBold,
    size: 36,
  })
  const docOwnerTextY = myFileTitleY - 27 - helvetica.heightAtSize(24)
  titlePage.drawText(documentOwnerText, {
    x: (pageWidth / 2) - (docOwnerTextWidth / 2),
    y: docOwnerTextY,
    font: helvetica,
    size: 24,
  })
  const createTimestampTextY = docOwnerTextY - 14
  titlePage.drawText(createTimestampText, {
    x: (pageWidth / 2) - (createTimestampTextWidth / 2),
    y: createTimestampTextY,
    font: helvetica,
    size: 10,
  })

}

const getResizedImage = (
  inputPath: string,
  width: number,
) => {
  return new Promise<Buffer>((resolve, reject) => {
    gm(inputPath)
      .autoOrient()
      .resize(width) // Resize to fixed 128px width, maintaining aspect ratio
      .toBuffer(function (error: any, buffer: Buffer) {
        if (!error) {
          resolve(buffer)
        } else {
          console.log(`There was an error getting resized image buffer:
          ${JSON.stringify(error, null, 2)}
          `)
          reject(error)
        }
      })
  })
}
