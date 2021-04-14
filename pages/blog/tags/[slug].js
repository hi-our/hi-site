import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllTags, getAllPostsByTag, getPostBySlug } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
import Page from "../../../components/page"

export default function Post({ allPosts, tagName}) {
  console.log('allPosts', allPosts)
  return (
    <Page title={tagName + ' - 小溪里'}>
      <h2>标签：{tagName}</h2>
      <br></br>
      <ul>
        {
          allPosts.map(post => {
            const { slug, title } = post

            return (
              <li key={slug}>
                <a href={`/blog/posts/${slug}`}>{title}</a>
              </li>
            )
          })
        }
      </ul>
    </Page>
  )
}

export async function getStaticProps({ params }) {

  const allPosts = getAllPostsByTag(params.slug, ['title', 'categories', 'tags', 'slug'])

  return {
    props: {
      tagName: params.slug,
      allPosts
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