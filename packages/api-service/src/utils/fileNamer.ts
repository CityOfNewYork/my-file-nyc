import { File } from "@/models/file"
import mimeTypes from 'mime-types';

const getFileExtension = (fileName: string) => {
  const parts = fileName.split('.')
  if (parts.length === 1) return ''
  return '.' + parts.pop()
}

export const resolveFileName = (
  document: { name: string },
  file: File,
  fileCount = 1,
  fileNames = new Set<string>(),
) => {
  // if there is only one file, we'll name the file in the zip after the document name
  if (fileCount === 1) {
    // const fileExtension = getFileExtension(file.name)
    const fileExtension = mimeTypes.extension(file.contentType);
    const fileName = `${document.name.split('.')[0]}.${fileExtension}`
    if (!fileNames.has(fileName)) return fileName
    return `${document.name} - ${file.id.substring(0, 8)}${fileExtension}`
  }

  // otherwise, we'll use a combination of the document name and file name
  const fileName = `${document.name} - ${file.name}`
  if (!fileNames.has(fileName)) return fileName
  return `${document.name} - ${file.order}${file.id.substring(0, 8)} ${
    file.name
  }`
}
