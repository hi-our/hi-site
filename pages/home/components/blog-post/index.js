import React from 'react'
import ModuleTitle from '../module-title'
import { blogPostNews, blogPostList } from './service'
import './styles.styl'

export default class BlogPost extends React.PureComponent {
  render() {
    const moduleProps = {
      enTitle: 'BLOG POST',
      cnTitleLeft: '博客',
      cnTitleRight: '文章'
    }

    return (
      <section className="blog-post">
        <ModuleTitle {...moduleProps} />

        <div className="blog-container">
          <div className="blog-wrap">
            <div className="block-news">
              <img className="pic" src={blogPostNews.pic} alt="news" />
              <h3 className="title">{blogPostNews.title}</h3>
              <p className="info">{blogPostNews.info}</p>
            </div>

            <div className="block-list">
              {blogPostList.map(item => (
                <div className="block-item" key={item.id}>
                  <div className="date">
                    <span>{item.day}</span>
                    <span>{item.month}</span>
                  </div>

                  <div className="line"></div>

                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p className="info">{item.info}</p>
                    <div className="more">
                      更多
                      <img src="/images/icon-arraw-right.png" alt="更多" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
