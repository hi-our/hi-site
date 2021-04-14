import React from "react";
import { getAllPosts, getAllTags, getAllCategoris } from '../../utils/api'
import Page from "../../components/page"
import ModuleTitle from "../../components/module-title"
import './styles.styl'
import LinkHtml from "../../components/link-html";

export default function Index({ allPosts, allTags, allCategoris }) {
  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}
  // console.log('heroPost', heroPost, morePosts, allTags)

  return (
    <Page>
      <div style={{ color: 'var(--color-title)' }}>
        <article>
          <h2>{heroPost.title}</h2>
        </article>
        <ModuleTitle enTitle='Categories' cnTitleLeft='文章' cnTitleRight='分类'></ModuleTitle>
        <ul>
          {
            allCategoris.map(category => {
              return (
                <li key={category}>
                  <LinkHtml href={`/blog/categories/${category}`}>{category}</LinkHtml>
                </li>
              )
            })
          }
        </ul>
        <ModuleTitle enTitle='Tags Cloud' cnTitleLeft='标签' cnTitleRight='云'></ModuleTitle>
        <ul>
          {
            allTags.map(tag => {
              return (
                <li key={tag}>
                  <LinkHtml href={`/blog/tags/${tag}`}>{tag}</LinkHtml>
                </li>
              )
            })
          }
        </ul>
      </div>
   </Page>
  )
}

export async function getStaticProps() {

  const allTags = getAllTags(['tags'])
  const allCategoris = getAllCategoris(['categories'])
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

  console.log('allTags', allTags, allCategoris)

  return {
    props: { allPosts, allTags, allCategoris},
  }
}