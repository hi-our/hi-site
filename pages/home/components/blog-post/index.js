import React from 'react'
import ModuleTitle from '../module-title'
import { blogPostNews, blogPostList } from './service'
import './styles.styl'

export default class BlogPost extends React.PureComponent {
  render() {
    const moduleTitles = {
      backgroundText: 'BLOG POST',
      leftText: '博客',
      rightText: '文章'
    }

    return (
      <section className="blog-post">
        <ModuleTitle title={moduleTitles} />

        <div className="blog-container">
          <div className="blog-wrap">
            <div className="block-news">
              <img className="pic" src={blogPostNews.pic} alt="news" />
              <p className="title">{blogPostNews.title}</p>
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
                    <p className="title">{item.title}</p>
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
