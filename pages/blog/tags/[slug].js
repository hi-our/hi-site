import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getTagMd, getAllTags } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
import Page from "../../../components/page"

export default function Post({}) {
  return (
    <></>
  )
}

export async function getStaticProps({ params }) {
  const result = getTagMd(params.slug, [
    'title',
    'type',
  ])

  console.log('result')

  // console.log('allTags', allTags)

  return {
    props: {}
  }
}

export async function getStaticPaths() {
  const allTags = getAllTags(['tags'])
  const posts = getAllPosts(['slug', 'tags'])
  console.log('posts', allTags, posts)

  return {
    paths: allTags.map((tag) => {
      console.log('tag', tag)
      return {
        params: {
          slug: tag,
        },
      }
    }),
    fallback: false,
  }
}