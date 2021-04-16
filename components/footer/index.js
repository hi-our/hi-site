import React from 'react'
import Link from '../link-html'
import './styles.styl'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-core">
            <a href="/" className="footer-logo">
              <h2>小溪里 xiaoxili.com</h2>
            </a>
            <p>感谢阅读</p>
          </div>
          {/* <section className="footer-links">
            <dl className="footer-links-item">
              <dt>关于我们</dt>
              <dd>关于嘻嘻</dd>
              <dd>关于团队</dd>
            </dl>
            <dl className="footer-links-item">
              <dt>社区</dt>
              <dd>Taro</dd>
              <dd>图雀社区</dd>
            </dl>
            <dl className="footer-links-item">
              <dt>友情链接</dt>
              <dd>itclanCoder</dd>
            </dl>
            <dl className="footer-links-item">
              <dt>联系我们</dt>
              <dd>公众号：笑嘻嘻</dd>
              <dd>微博：笑嘻嘻</dd>
            </dl>
          </section> */}
        </div>
      </footer>
    )
  }
}
