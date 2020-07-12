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
              {/* <dt><img src={require("../../img/footer-about@2x.png")} alt="关于我们" />关于我们</dt> */}
              <dd><Link href="/about">关于小溪里</Link></dd>
              <dd><Link href="/about#hi-our">关于 Hi Our</Link></dd>
            </dl>
            {/* <dl>
                <dt>社区</dt>
                <dd>GitHub</dd>
                <dd>微信</dd>
              </dl> */}
            <dl>
              {/* <dt><img src={require("../../img/footer-resource@2x.png")} alt="相关资源" />相关资源</dt> */}
              <dd><a href="https://cloudbase.net">云开发 CloudBase</a></dd>
              <dd><a href="https://taro.jd.com">Taro</a></dd>
              <dd><a href="https://tuture.co">图雀社区</a></dd>
            </dl>
            {/* <dl>
              <dt><img src={require("../../img/footer-link@2x.png")} alt="友情链接" />友情链接</dt>
            </dl> */}
          </section>
        </div>
        <div className="footer-copyright">
          Copyright © 2020. All Rights Reserved.<br /><a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备20020594号-2</a>
        </div>

      </footer>
    )
  }
}