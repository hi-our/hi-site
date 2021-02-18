import { join } from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

export function unique(arr) {
  return Array.from(new Set(arr))
}
const postsDirectory = join(process.cwd(), '_posts')

export async function getPostBySlug(slug, fields = []) {
  console.log('1', 1)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllTags(fields = []) {

  let tags = []

  return unique(tags)
}

export const abc = 123
