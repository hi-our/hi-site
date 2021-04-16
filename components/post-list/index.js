import React from 'react'
import './styles.styl'
import LinkHtml from "../link-html"

function PostList({ posts, colorMap }) {
  return (
    <ul className='blog-posts'>
      {
        posts.map(post => {
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
                <div className='read-more'>阅读更多</div>
                {/* <time>{date}</time> */}
              </LinkHtml>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PostList