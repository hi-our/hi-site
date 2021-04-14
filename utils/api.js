import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function unique(arr) {
  return Array.from(new Set(arr))
}


const postsDirectory = join(process.cwd(), '_posts')
const tagsMd = join(process.cwd(), '_source', 'tags.md')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
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
export function getTagMd(slug, fields = []) {
  const fullPath = tagsMd
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = { slug }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (data[field]) {
      items[field] = data[field]
    }
  })

  console.log('items', items)
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
export function getAllPostsByTag(tagName, fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter(post => posts.tags.includes(tagName))
  return posts
}

export function getAllTags(fields = []) {
  const slugs = getPostSlugs()

  console.log('slugs', slugs)
  let tags = []

  slugs.forEach(slug => {
    let post = getPostBySlug(slug, fields)
    tags = tags.concat(post.tags)
  })
  return unique(tags)
}