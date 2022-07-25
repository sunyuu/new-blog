import fm from 'front-matter'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const getFilePath = (source: string): string[] => {
  let files = []
  if (statSync(source).isDirectory()) {
    files.push(readdirSync(source).map(filename => getFilePath(join(source, filename))))
  } else {
    files.push(source)
  }
  return files.join(',').split(',')
}

export const getArticle = () => {
  const articleFiles = getFilePath('./blog/article')
  
  const articleTmp = articleFiles.map(file => {
    let fileRaw = readFileSync(file, 'utf-8')

    let yaml = fm(fileRaw)

    let attr = yaml.attributes as any

    return {
      title: attr.title || '',
      date: attr.publishDate,
      tags: attr.tags || [],
      path: file.replace('.md', '')
    }
  })
  
  articleTmp.sort((a, b) => b.date.getTime() - a.date.getTime())

  return articleTmp
}