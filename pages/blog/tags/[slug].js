import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import { getPostBySlug, getAllPosts, getTagMd, getAllTags, getAllPostsByTag } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
import Page from "../../../components/page"

export default function Post({ post = {}, tagName}) {
  const { title } = post
  console.log('title', title)
  return (
    <>
      {tagName}
    </>
  )
}

export async function getStaticProps({ params }) {
  // console.log('params', params.slug)
  // const post = getPostBySlug('abc', [
  //   'title',
  // ])

  return {
    props: {
      tagName: params.slug,
      post: {title: '132'},
    },
  }
}

export async function getStaticPaths() {
  // const allTags = getAllTags(['tags'])

  return {
    // paths: allTags.map((tag) => {
    //   console.log('tag', tag)
    //   return {
    //     params: {
    //       slug: tag,
    //     },
    //   }
    // }),
    paths: [
      { params: { slug: 'React' }}
    ],
    fallback: false,
  }
}