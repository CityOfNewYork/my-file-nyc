import gm from 'gm'
import { FileContentTypeEnum } from 'api-client'
import { downloadObject, uploadObject } from '@/utils/s3'
import { unlinkSync } from 'fs'
import { FilesReceivedResponse } from './markFileReceived'
import { wrapAsyncHandler } from '@/utils/sentry'

export interface ThumbnailsGeneratedResponse {
  documentLinks: DocumentThumbnailLink[]
}

export interface DocumentThumbnailLink {
  documentId: string
  thumbnailKey: string
}

export const handler = wrapAsyncHandler(
  async (
    event: FilesReceivedResponse,
  ): Promise<ThumbnailsGeneratedResponse> => {
    const { files: rawFiles } = event
    const files = rawFiles.filter((f) => f.order === 0)
    const documentLinks: DocumentThumbnailLink[] = []
    for (const file of files) {
      const { id, path, documentId, contentType } = file
      const downloadLocation = `/tmp/${id}`
      const thumbnailLocation = `/tmp/thumbnail-${id}.png`
      const thumbnailKey = `${path}-thumbnail`


      await downloadObject(path, downloadLocation)

      console.log('object downloaded. creating thumbnail...')

      await createThumbnail(
        contentType as FileContentTypeEnum,
        downloadLocation,
        thumbnailLocation,
      )
      await uploadObject(thumbnailLocation, thumbnailKey, {
        ContentType: FileContentTypeEnum.ImagePng,
      })
      documentLinks.push({
        documentId,
        thumbnailKey,
      })
      unlinkSync(downloadLocation)
      unlinkSync(thumbnailLocation)
    }
    return { documentLinks }
  },
  {
    rethrowAfterCapture: true,
  },
)

export const createThumbnail = (
  contentType: FileContentTypeEnum,
  inputPath: string,
  outputPath: string,
) => {
  console.log(`inputPath: ${inputPath}`)
  if (contentType == FileContentTypeEnum.ApplicationPdf) {
    return new Promise<string>((resolve, reject) => {
      gm(`${inputPath}[0]`)
        .setFormat('png')
        .resize(128) // Resize to fixed 128px width, maintaining aspect ratio
        // .quality(75) // Quality from 0 to 100
        .write(outputPath, function (error) {
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
  } else {
    return new Promise<string>((resolve, reject) => {
      gm(inputPath)
        .autoOrient()
        .thumb(100, 100, outputPath, 75, function (error) {
          if (!error) {
            resolve(outputPath)
          } else {
            console.log(`Thumbnail generation error:
            ${JSON.stringify(error, null, 2)}
            `)
            reject(error)
          }
        })
    })
  }
}

export default handler
