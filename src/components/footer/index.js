import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';


export default class Page extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-main">
          <a href='/' className="footer-logo">
            <h3>Hi Our</h3>
          </a>
          <section className="footer-links">
            <dl>
              <dt><img src={require("../../img/footer-about@2x.png")} alt="关于我们" />关于我们</dt>
              <dd><Link to="/about">Hi Our</Link></dd>
              <dd><Link to="/about#join">加入我们</Link></dd>
              <dd><Link to="/about#contact">联系我们</Link></dd>
            </dl>
            {/* <dl>
                <dt>社区</dt>
                <dd>GitHub</dd>
                <dd>微信</dd>
              </dl> */}
            <dl>
              <dt><img src={require("../../img/footer-resource@2x.png")} alt="相关资源" />相关资源</dt>
              <dd><a href="https://cloudbase.net">云开发 CloudBase</a></dd>
              <dd><a href="https://taro.jd.com">Taro</a></dd>
            </dl>
            <dl>
              <dt><img src={require("../../img/footer-link@2x.png")} alt="友情链接" />友情链接</dt>
              <dd><a href="https://tuture.co">图雀社区</a></dd>
              <dd><a href="https://xiaoxili.com">小溪里</a></dd>
            </dl>
          </section>
        </div>
        <div className="footer-copyright">
          Copyright © 2020. All Rights Reserved.<br /><a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">苏ICP备18042648号-3</a>
        </div>

      </footer>
    )
  }
}