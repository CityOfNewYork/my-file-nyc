import { getObjectReadStream, uploadObjectStream } from './s3'
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
  await new Promise((resolve, reject) => {
    const archive = Archiver('zip')
    archive.on('error', (err) => {
      console.log(`archive error: ${JSON.stringify(err, null, 2)}`)
      reject(err)
    })
    streamPassThrough.on('close', resolve)
    streamPassThrough.on('end', resolve)
    streamPassThrough.on('error', (err) => {
      console.log(`streamPassThrough error: ${JSON.stringify(err, null, 2)}`)
      reject(err)
    })
    
    archive.pipe(streamPassThrough)
    objects.forEach((o) => {
      const objectReadStream = getObjectReadStream(o.key)
      archive.append(objectReadStream, { name: o.filename })
    })
    
    archive.finalize()
  })
  console.log('archive creation complete...')
  console.log('attempting archive upload to s3...')

  // wait for the upload to complete
  try {
    const response = await s3Upload.promise()
    console.log(`s3 upload response: ${JSON.stringify(response, null, 2)}`)
    return response
  } catch (err) {
    console.log(`Error uploading zip file: ${JSON.stringify(err, null, 2)}`)
    throw err
  }

}
