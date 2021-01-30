import React from 'react'
import './styles.styl'

export default class Home extends React.PureComponent {
  render() {
    return (
      <section className="home-banner">
        <div className="page-auto">
          {/* 线条 */}
          <div className="line"></div>
          {/* 小程序创意动画 */}
          <section className="animation">
            <div className="animation-module">
              <h3 className="animation-module-title">小程序 TabBar 创意动画</h3>
              <p className="animation-module-text">精美小巧的动画，让你耳目一新</p>
              <button className="animation-module-go">去看看</button>
            </div>
            <img className="animation-little" src="/images/little-people.png" alt="小人" />
          </section>
        </div>
        {/* 小程序创意动画类别 */}
        <ul className="program-category page-auto">
          <li className="program-category-item">
            <img src="/images/notebook.png" alt="用户体验" />
            <h4>用户体验</h4>
            <p>擅长响应式设计 精准还原设计稿 强调组件化开发</p>
          </li>
          <li className="program-category-item">
            <img src="/images/stars.png" alt="用户体验" />
            <h4>用户体验</h4>
            <p>擅长响应式设计 精准还原设计稿 强调组件化开发</p>
          </li>
          <li className="program-category-item">
            <img src="/images/animation.png" alt="交互动画" />
            <h4>交互动画</h4>
            <p>熟悉基础动画 创新动画专题 分享动画心得</p>
          </li>
          <li className="program-category-item">
            <img src="/images/created.png" alt="开源创造" />
            <h4>开源创造</h4>
            <p>参与开源组织 开源精巧组件 热心开发者群体</p>
          </li>
        </ul>
      </section>
    )
  }
}