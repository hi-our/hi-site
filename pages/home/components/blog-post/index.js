import React from 'react'
import ModuleTitle from '../../../../components/module-title'
import './styles.styl'

const blogPostNews = {
  pic: '/images/blog-post-news.png',
  title: 'UI设计师与前端工程师不能错过的年度报告适配技巧',
  info: '岁末年初，各大厂家都会推出各自的年度报告，这些年度报告有何特点呢？'
}

const blogPostList = [
  {
    id: 1,
    month: 'SEP',
    day: '23',
    title: 'CSS3动画分享-积分签到',
    info: '本文中会包含一个复合型动画，其项目背景为在 xx 平台签到时会赚取 C 币。'
  },
  {
    id: 2,
    month: 'SEP',
    day: '23',
    title: 'CSS3动画分享-积分签到',
    info: '本文中会包含一个复合型动画，其项目背景为在 xx 平台签到时会赚取 C 币。'
  },
  {
    id: 3,
    month: 'SEP',
    day: '23',
    title: 'CSS3动画分享-积分签到',
    info: '本文中会包含一个复合型动画，其项目背景为在 xx 平台签到时会赚取 C 币。'
  }
]

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
