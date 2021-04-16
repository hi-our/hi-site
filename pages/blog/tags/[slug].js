import { getAllTags, getAllPostsByTag, getPostBySlug } from '../../../utils/api'
import Page from "../../../components/page"
import ModuleTitle from "../../../components/module-title"
import PostList from "../../../components/post-list"
import { hexToRgba, COLOR_CLOUD } from '../../../utils/color-utils'

function unique(arr) {
  return Array.from(new Set(arr))
}

export default function Post({ allPosts, tagName, colorMap}) {
  console.log('allPosts', allPosts)
  return (
    <Page title={tagName + ' - 小溪里'} navName='blog'>
      <div className='container'>
        <h2 className='archive-title'>标签：{tagName}</h2>
        <ModuleTitle enTitle='Stories' cnTitleLeft='文章' cnTitleRight='列表'></ModuleTitle>
        <br></br>
        <PostList posts={allPosts} colorMap={colorMap} />
      </div>
    </Page>
  )
}

export async function getStaticProps({ params }) {

  const allPosts = getAllPostsByTag(params.slug, ['title', 'categories', 'tags', 'slug'])

  let tagsArr = []
  const colorMap = {}
  allPosts.map(post => {
    tagsArr = tagsArr.concat(post.tags || [])
  })

  let allTags = unique(tagsArr)


  allTags.forEach(element => {
    let textColor = COLOR_CLOUD[parseInt(Math.random() * 5)]
    colorMap[element] = {
      color: textColor,
      background: (hexToRgba(textColor, Math.random() > 0.5 ? 0.1 : 0.15)).rgba
    }
  })

  return {
    props: {
      tagName: params.slug,
      allPosts,
      colorMap
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