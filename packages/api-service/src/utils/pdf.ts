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

        const page = pdfDoc.addPage()
        console.log(image)

        const imgBuffer = fs.readFileSync(createFilePath(ownerId, id, fileId));
        console.log(imgBuffer)

        let scaledImage;
        let embbedImage;

        const imageType = image.contentType.split('/')
        console.log(imageType)

        if (image.contentType == 'jpeg') {
            embbedImage = await pdfDoc.embedJpg(imgBuffer);
            scaledImage = embbedImage.scale(0.5)
        }
        else {
            embbedImage = await pdfDoc.embedPng(imgBuffer)
            scaledImage = embbedImage.scale(0.5)
        }

        console.log(embbedImage)
        console.log(scaledImage)

        page.drawImage(embbedImage, {
            x: page.getWidth() / 2 - scaledImage.width / 2,
            y: page.getHeight() / 2 - scaledImage.height / 2,
            width: scaledImage.width,
            height: scaledImage.height,
        });
    };

    const bytesFile = await pdfDoc.save()
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