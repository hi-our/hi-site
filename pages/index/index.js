import React, { createRef, PureComponent } from 'react'
import Footer from '../../components/footer'
import DocumentMeta from '../../components/document-meta'

import './styles.styl'

export default class Home extends PureComponent {
  state = {
    menuStatus: false // menu导航状态
  }
  componentDidMount () {
    this.menuLogo = createRef()
  }
  componentDidUpdate (props, {menuStatus}) {
    // 根据状态 判断是否已经打开menu导航菜单
    const body = document.body
    this.timeAnimation()
    menuStatus ? body.classList.remove('not_scroll') : body.classList.add('not_scroll')
  }
  timeAnimation = () => {
    let time, baseline = 0;
    clearInterval(time)
    time = setInterval(() => {
      baseline += 0.1
      if (baseline > 7) {
        clearInterval(time)
        baseline = 0
      } else {
        const [dom1, dom2] = this.menuLogo.current.children
        const {menuStatus} = this.state
        if (menuStatus) {
          dom1.style.transform = `rotate(-${baseline * 6}deg)`;
          dom2.style.transform = `rotate(${baseline * 6}deg)`;
          dom1.style.top = `${baseline}px`;
          dom2.style.top = `-${baseline}px`;
        } else {
          dom1.style.transform = `rotate(0deg)`;
          dom2.style.transform = `rotate(0deg)`;
          dom1.style.top = `0px`;
          dom2.style.top = `0px`;
        }
      }
    }, 1)
  }
  render() {
    const { menuStatus } = this.state
    return (
      <>
        <DocumentMeta />
        <div className="page-home">
          {/* 模块头部 */}
          <section className="module-header">
            {/*头部 全局组件 */}
            <header className="header">
              <img className="header-logo" src="/images/logo.png" alt="logo"/>
              <div className="header-menu" ref={this.menuLogo} onClick={() => this.setState({menuStatus: !menuStatus})}>
                <div></div>
                <div></div>
              </div>
            </header>
            {/* 线条 */}
            <div className="line"></div>
            {/* 小程序创意动画 */}
            <section className="animation">
              <div className="animation-module">
                <h3 className="animation-module-title">小程序 TabBar 创意动画</h3>
                <p className="animation-module-text">精美小巧的动画，让你耳目一新</p>
                <button className="animation-module-go">去看看</button>
              </div>
              <img className="animation-little" src="/images/little-people.png" alt="小人"/>
            </section>
            {/* 小程序创意动画类别 */}
            <ul className="program-category">
              <li className="program-category-item">
                <img src="/images/notebook.png" alt="用户体验"/>
                <h4>用户体验</h4>
                <p>擅长响应式设计 精准还原设计稿 强调组件化开发</p>
              </li>
              <li className="program-category-item">
                <img src="/images/stars.png" alt="用户体验"/>
                <h4>用户体验</h4>
                <p>擅长响应式设计 精准还原设计稿 强调组件化开发</p>
              </li>
              <li className="program-category-item">
                <img src="/images/animation.png" alt="交互动画"/>
                <h4>交互动画</h4>
                <p>熟悉基础动画 创新动画专题 分享动画心得</p>
              </li>
              <li className="program-category-item">
                <img src="/images/created.png" alt="开源创造"/>
                <h4>开源创造</h4>
                <p>参与开源组织 开源精巧组件 热心开发者群体</p>
              </li>
            </ul>
          </section>
        </div>
        {/* 导航菜单 */}
        <div className="navigation" style={{display: menuStatus ? 'block' : 'none'}}>
          <div className="navigation-menu" onClick={() => this.setState({menuStatus: false})}>
            <div></div>
            <div></div>
          </div>
          <ul className="navigation-links">
            <li>
              <a href="" className="navigation-links-active">首页</a>
            </li>
            <li>
              <a href="">博客文章</a>
            </li>
            <li>
              <a href="">技术分享</a>
            </li>
            <li>
              <a href="">关于我们</a>
            </li>
          </ul>
          <div className="navigation-operation">
            <img src="/images/themoom.png" alt="月亮"/>
            <img src="/images/language.png" alt="语言"/>
            <img src="/images/subscribe.png" alt="订阅"/>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  // const data = {}

  // // The value of the `props` key will be
  // //  passed to the `Home` component
  return {
    props: {
      title: '小溪里 - 前端技术',
      pageClassName: "page-home"
    }
  }
}
