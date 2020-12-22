
import fs from 'fs'
import path from 'path'


const postsDirectory = path.join(process.cwd(), 'lib/paths')

export function getQueryParams() {
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allLangs = fileNames.map(fileName => {
   
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = JSON.parse(fs.readFileSync(fullPath))

    return {
      ...fileContents
    }
  })
  return {
    allLangs
  }
}