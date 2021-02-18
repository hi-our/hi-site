
import remark from 'remark'
import html from 'remark-html'
import toc from 'remark-toc'

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  // console.log('result', result)
  return result.toString()
}


export async function getMarkdownToTOC(markdown) {
  const tocResult = await remark().use(toc).process(markdown)
  console.log('tocResult', tocResult)
  return tocResult.toString()
}