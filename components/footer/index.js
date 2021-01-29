import React from 'react'
import Link from '../link-html'
import './styles.styl'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a href="/" className="footer-logo">
          <img src="/images/footer-logo.png" alt="logo"/>
        </a>
        <p className="footer-thank">感谢阅读！</p>
        <section className="footer-links">
            <dl className="footer-links-item">
              <dd><p>关于我们</p></dd>
              <dd><span>关于嘻嘻</span></dd>
              <dd><span>关于团队</span></dd>
            </dl>
            <dl className="footer-links-item">
              <dd><p>社区</p></dd>
              <dd><span>Taro</span></dd>
              <dd><span>图雀社区</span></dd>
            </dl>
            <dl className="footer-links-item">
              <dd><p>友情链接</p></dd>
              <dd><span>itclanCoder</span></dd>
              <dd><span>APPClIP</span></dd>
            </dl>
            <dl className="footer-links-item">
              <dd><p>联系我们</p></dd>
              <dd><span>公众号：笑嘻嘻</span></dd>
              <dd><span>微博：笑嘻嘻</span></dd>
            </dl>
        </section>
      </footer>
    )
  }
}
