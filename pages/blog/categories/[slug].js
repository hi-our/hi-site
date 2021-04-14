import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllCategoris, getAllPostsByCategory, getPostBySlug } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
import Page from "../../../components/page"

export default function Post({ allPosts, cagegoryName}) {
  console.log('allPosts', allPosts)
  return (
    <Page title={cagegoryName + ' - 小溪里'}>
      <h2>分类：{cagegoryName}</h2>
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

  const allPosts = getAllPostsByCategory(params.slug, ['title', 'categories', 'tags', 'slug'])

  return {
    props: {
      cagegoryName: params.slug,
      allPosts
    },
  }
}

export async function getStaticPaths() {
  const allCategoris = getAllCategoris(['categories'])
  console.log('allCategoris', allCategoris)

  return {
    paths: allCategoris.map((category) => {
      // console.log('category', category)
      return {
        params: {
          slug: category,
        },
      }
    }),
    fallback: false,
  }
}