import React from "react";
import { getAllPosts, getAllTags, getAllCategoris } from '../../utils/api'
import Page from "../../components/page"
import ModuleTitle from "../../components/module-title"
import './styles.styl'
import LinkHtml from "../../components/link-html";

export default function Index({ allPosts = [], allTags, allCategoris }) {
  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}
  // console.log('heroPost', heroPost, morePosts, allTags)

  return (
    <Page>
      <div style={{ color: 'var(--color-title)' }}>
        <LinkHtml href={`/blog/posts/${heroPost.slug}`}>
          <article>
            <h2>{heroPost.title}</h2>
          </article>
        </LinkHtml>
        <ModuleTitle enTitle='Categories' cnTitleLeft='文章' cnTitleRight='分类'></ModuleTitle>
        <ul className='blog-cateries'>
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
        <ul className='blog-tags-cloud'>
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