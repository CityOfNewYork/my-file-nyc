import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import { createFilePath } from '@/utils/s3'
import { v4 as uuidv4 } from 'uuid'

export async function generatePFD(images: any, ownerId: any, id: any,) {
    const pdfDoc = await PDFDocument.create()

    for (const image of images) {
        const fileId = uuidv4()

        console.log("Image:")
        console.log(createFilePath(ownerId, id, fileId))
        console.log(image.contentType)

        const page = pdfDoc.addPage()
        const imgBuffer = fs.readFileSync(createFilePath(ownerId, id, fileId));
        const jpgImage = await pdfDoc.embedJpg(imgBuffer);
        const jpgDims = jpgImage.scale(0.5)

        const { width, height } = jpgImage.scale(1);
        page.drawImage(jpgImage, {
            x: page.getWidth() / 2 - width / 2,
            y: page.getHeight() / 2 - height / 2,
        });

        // const pngDims = pngImage.scale(0.5)
        // const pngImage = await pdfDoc.embedPng(pngImageBytes)
    };

    let bytesFile = await pdfDoc.save()
    return bytesFile
}



// import puppeteer from 'puppeteer';
// import fs from 'fs'

// export const generatePFD = (name: any, images: any) => {
//     (async () => {
//         const browser = await puppeteer.launch({ args: ['--allow-file-access-from-files', '--enable-local-file-accesses'] });
//         const page = await browser.newPage();
//         const image = `<html><img src="${images[0]}"></html>`;
//         const contentHtml = fs.readFileSync(image, 'utf8');
//         await page.setContent(contentHtml);

//         const pdf = await page.pdf({
//             path: `${name}.pdf`,
//             format: 'letter',
//         });

//         await browser.close();

//         return pdf
//     })();
// }

// import PDFDocument from 'pdfkit';
// import fs from 'fs'

// export const generatePFD = () => {
//     const pdf = new PDFDocument

//     pdf.pipe(fs.createWriteStream('TestDocument.pdf'))

//     pdf.text('hello world', 100, 50)
//     pdf.end()

//     return pdf
// }