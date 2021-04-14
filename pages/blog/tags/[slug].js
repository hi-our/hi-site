import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import {  } from '../../../utils/api2'
import { getAllTags, getAllPostsByTag, getPostBySlug } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
// import Page from "../../../components/page"

export default function Post({ post = {}, tagName}) {
  const { title } = post
  // console.log('title', title)
  return (
    <>
      {tagName}
    </>
  )
}

export async function getStaticProps({ params }) {
  // console.log('params', params.slug)
  // const post = await getPostBySlug('abc', [
  //   'title',
  // ])

  const allPosts = getAllPostsByTag(params.slug, ['title', 'categories', 'tags', 'slug'])

  console.log('allPosts', allPosts)

  // console.log('post', post)

  return {
    props: {
      tagName: params.slug,
      post: {title: '132'},
    },
  }
}

export async function getStaticPaths() {
  const allTags = getAllTags(['tags'])
  console.log('allTags', allTags)

  return {
    paths: allTags.map((tag) => {
      // console.log('tag', tag)
      return {
        params: {
          slug: tag,
        },
      }
    }),
    fallback: false,
  }
}