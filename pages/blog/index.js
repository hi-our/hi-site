import React from "react";
import { getAllPosts, getAllTags } from '../../utils/api'
// import Page from "../../components/page"
// import ModuleTitle from "../../components/module-title"
import './styles.styl'

export default function Index({ allPosts, allTags }) {
  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}
  // console.log('heroPost', heroPost, morePosts, allTags)

  return (
    // <Page>
      <div style={{ color: 'var(--color-title)' }}>
        <article>
          <h2>{heroPost.title}</h2>
        </article>
        {/* <ModuleTitle enTitle='Tags Cloud' cnTitleLeft='标签' cnTitleRight='云'></ModuleTitle> */}
        <ul>
          {
            allTags.map(tag => {
              return (
                <li key={tag}>
                  <a href={`/blog/tags/${tag}`}>{tag}</a>  
                </li>
              )
            })
          }
        </ul>
      </div>
    // </Page>
  )
}

export async function getStaticProps() {

  const allTags = getAllTags(['tags'])
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'categories',
    'tags',
  ])

  // console.log('allTags', allTags)

  return {
    props: { allPosts, allTags },
  }
}