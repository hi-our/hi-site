import React from 'react'
import './styles.styl'

export default class Home extends React.PureComponent {
  render() {
    return (
      <section className="home-banner">
        <div className="banner-main">
          {/* 线条 */}
          {/* 小程序创意动画 */}
          <section className="animation">
            <div className="animation-module">
              <div className="line"></div>
              <h2>小程序 TabBar 创意动画</h2>
              <p>精美小巧的动画，让你耳目一新</p>
              <button>去看看</button>
            </div>
            <div className="animation-little"></div>
          </section>
        </div>
        {/* 小程序创意动画类别 */}
        <ul className="program-category banner-main">
          <li>
            <img src="/images/notebook.png" alt="用户体验" />
            <h3>用户体验</h3>
            <p>擅长响应式设计<br />精准还原设计稿<br />强调组件化开发</p>
          </li>
          <li>
            <img src="/images/stars.png" alt="用户体验" />
            <h3>用户体验</h3>
            <p>擅长响应式设计<br />精准还原设计稿<br />强调组件化开发</p>
          </li>
          <li>
            <img src="/images/animation.png" alt="交互动画" />
            <h3>交互动画</h3>
            <p>熟悉基础动画<br />创新动画专题<br />分享动画心得</p>
          </li>
          <li>
            <img src="/images/created.png" alt="开源创造" />
            <h3>开源创造</h3>
            <p>参与开源组织<br />开源精巧组件<br />热心开发者群体</p>
          </li>
        </ul>
      </section>
    )
  }
}