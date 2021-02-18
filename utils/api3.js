import { join } from 'path'

import fs from 'fs'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return 1 //fs.readdirSync(postsDirectory)
}
