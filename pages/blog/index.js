import React from "react";
import { getAllPosts, getAllTags, getAllCategoris } from '../../utils/api'
import { getRandomColor, hexToRgba } from '../../utils/color-utils'
import Page from "../../components/page"
import ModuleTitle from "../../components/module-title"
import './styles.styl'
import LinkHtml from "../../components/link-html"

export default function Index({ allPosts = [], allTags, allCategoris, colorMap }) {
  const heroPost = allPosts[0] || {}
  const morePosts = allPosts.slice(1) || {}
  console.log('heroPost', colorMap)

  return (
    <Page title='博客 - 小溪里'>
      <section className='blog-hero-post'>
        <div className='blog-hero-main'>
          <LinkHtml href={`/blog/posts/${heroPost.slug}`}>
            <article>
              <h2>{heroPost.title}</h2>
              <h3>{heroPost.summary}</h3>
              <button>立即查看</button>
            </article>
          </LinkHtml>
        </div>
      </section>
      <div className='container' style={{ color: 'var(--color-title)' }}>
        <ModuleTitle enTitle='Categories' cnTitleLeft='文章' cnTitleRight='分类'></ModuleTitle>
        <ul className='blog-cateries'>
          {
            allCategoris.map(category => {
              return (
                <li key={category}>
                  <LinkHtml href={`/blog/categories/${category}`} style={colorMap[category]}>{category}</LinkHtml>
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
                  <LinkHtml href={`/blog/tags/${tag}`} style={colorMap[tag]}>
                    {tag}
                  </LinkHtml>
                </li>
              )
            })
          }
        </ul>
        <ModuleTitle enTitle='Stories' cnTitleLeft='文章' cnTitleRight='列表'></ModuleTitle>
        <ul className='blog-posts'>
          {
            morePosts.map(post => {
              const { slug, title, date, tags = [], summary } = post
              return (
                <li key={slug}>
                  <LinkHtml href={`/blog/posts/${slug}`}>
                    <h3>{title}</h3>
                    <div className='tag-list'>
                      {
                        tags.map(tag => {
                          return <span key={tag} style={colorMap[tag]}>{tag}</span>
                        })
                      }
                    </div>
                    <p>{summary}</p>
                    <time>{date}</time>
                  </LinkHtml>
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
    'summary',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'categories',
    'tags',
  ])

  const colorMap = {}
  let colorArr = allTags.concat(allCategoris)
  colorArr.forEach(element => {
    let textColor = getRandomColor()
    colorMap[element] = {
      color: textColor,
      background: (hexToRgba(textColor, Math.random() > 0.5 ? 0.3 : 0.15)).rgba
    }
  })

  console.log('allTags', allTags, allCategoris)

  return {
    props: { allPosts, allTags, allCategoris, colorMap},
  }
}