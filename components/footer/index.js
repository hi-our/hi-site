import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-main">
          <a href='/' className="footer-logo">
            <h3>小溪里 xiaoxili.com</h3>
          </a>
          <section className="footer-links">
            <dl>
              <dt><img src="https://image-hosting.xiaoxili.com/img/20200712164455.png" alt="关于我们" />关于</dt>
              <dd><Link href="/about">关于小溪里</Link></dd>
              <dd><Link href="/about">关于 Hi Our</Link></dd>
            </dl>
            <dl>
              <dt><img src="https://image-hosting.xiaoxili.com/img/20200712164456.png" alt="相关资源" />社区</dt>
              {/* <dd><a href="https://cloudbase.net">云开发 CloudBase</a></dd> */}
              <dd><a href="https://taro.jd.com">Taro</a></dd>
              <dd><a href="https://tuture.co">图雀社区</a></dd>
            </dl>
            <dl>
              <dt><img src="https://image-hosting.xiaoxili.com/img/20200712183726.png" alt="友情链接" />友情链接</dt>
              <dd><a href="https://coder.itclan.cn/">itclanCoder</a></dd>
              <dd><a href="https://www.appclip.icu/">APPCLIP</a></dd>
            </dl>
          </section>
        </div>
        <div className="footer-copyright">
          Copyright © 2020. All Rights Reserved.<br /><a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备20020594号</a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502005403" target="_blank" rel="noopener noreferrer"><img src="https://image-hosting.xiaoxili.com/img/20200812141626.png" />沪公网安备 31010502005403号</a>
        </div>

      </footer>
    )
  }
}