import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../../utils/api'
import { markdownToHtml, getMarkdownToTOC } from '../../../utils/markdown'
import Page from "../../../components/page"

export default function Post({ post = {}, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { title, content } = post

  // console.log('post', post, morePosts, preview)
  return (
    <Page title={title} pageClassName="page-article">
      <article>
        <h1>{title}</h1>
        <main>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </article>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'categories',
    'tags',
  ])
  const content = await markdownToHtml(post.content || '')
  const toc = await getMarkdownToTOC(post.content || '')

  // console.log('toc', toc)

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}