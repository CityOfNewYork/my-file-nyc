import { getObjectReadStream, objectExists, uploadObjectStream } from './s3'
import { PassThrough } from 'stream'
import Archiver from 'archiver'

export type S3ObjectDetails = { key: string; filename: string }

type CreateS3ZipFromStreamsOptions = {
  key: string
  tags?: string
  objects: S3ObjectDetails[]
}
export const createS3ZipFromS3Objects = async (
  params: CreateS3ZipFromStreamsOptions,
) => {
  try {
    // read in params
    const { key, tags, objects } = params

    // create write stream
    const streamPassThrough = new PassThrough()
    const s3Upload = await uploadObjectStream(streamPassThrough, key, {
      ContentType: 'application/zip',
      Tagging: tags,
    })
    console.log(`s3 upload setup: ${JSON.stringify(s3Upload, null, 2)}`)
    console.log('attempting to create archive...')

    // attach object streams from S3 to archive
    await new Promise(async (resolve, reject) => {
      const archive = Archiver('zip')
      archive.on('warning', (err) => {
        console.log('archiver warning event:')
        console.error(err)
      })
      archive.on('error', (err) => {
        console.log('archiver error event:')
        console.error(err)
        reject(err)
      })
      archive.on('close', () => {
        console.log('archiver close event called.')
      })
      archive.on('finish', () => console.log('archiver finish event called.'))
      streamPassThrough.on('close', () => {
        console.log(`streamPassThrough close event called`)
        resolve(undefined)
      })
      streamPassThrough.on('end', () => {
        console.log(`streamPassThrough end event called`)
        resolve(undefined)
      })
      streamPassThrough.on('error', (err) => {
        console.log(`streamPassThrough error: ${JSON.stringify(err, null, 2)}`)
        reject(err)
      })

      archive.pipe(streamPassThrough)

      for (let i = 0; i < objects.length; i++) {
        const o = objects[i];
        const s3ObjectExists = await objectExists(o.key)
        if (s3ObjectExists) {
          const objectReadStream = getObjectReadStream(o.key)
          console.log(`read stream obtained:
        length: ${objectReadStream.readableLength}
        appending this stream to archive
        `)
          archive.append(objectReadStream, { name: o.filename })
          console.log('stream appended to archive')
        } else {
          console.log(`S3 object does not exist: ${o.key}.
          This object will be skipped and not added to the archived download.`)
        }
      }

      console.log('calling archive.finalize()')
      await archive.finalize()
      console.log('archive.finalize() completed.')
    })
    console.log('archive creation complete...')
    console.log('attempting archive upload to s3...')

    // wait for the upload to complete
    const response = await s3Upload.promise()
    console.log(`s3 upload response: ${JSON.stringify(response, null, 2)}`)
    return response
  } catch (err) {
    console.log(`Error uploading zip file: ${JSON.stringify(err, null, 2)}`)
    throw err
  }

}
