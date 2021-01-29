import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default class Page extends React.Component {
  state = {
    menuState: false // 导航菜单的状态 
  }
  changeMenuState = state => this.setState({menuState: state})
  render() {
    const {menuState} = this.state
    return (
      <>
        {/* 头部 */}
        <header className="header">
          <img className="header-logo" src="/images/logo.png" alt="logo"/>
          <nav className="navbar">
            <section className="navbar-item">
              <a href="" className="navbar-item-active">首页</a>
            </section>
            <section className="navbar-item">
              <a href="">博客文章</a>
            </section>
            <section className="navbar-item">
              <a href="">技术分享</a>
            </section>
            <section className="navbar-item">
              <a href="">关于我们</a>
            </section>
          </nav>
          <div className="navigation-operation">
            <img src="/images/themoom.png" alt="月亮"/>
            <img src="/images/language.png" alt="语言"/>
            <img src="/images/subscribe.png" alt="订阅"/>
          </div>
          {/* 杠杠图标 */}
          <div 
            className={(menuState ? 'active' : '') + ' header-menu'}
            onClick={() => this.changeMenuState(true)}
          >
            <div></div>
            <div></div>
          </div>
        </header>
        {/* 导航菜单 */}
        <div
          className={(menuState ? 'active' : '') + ' navigation'}
        >
          <div className="navigation-menu" onClick={() => this.changeMenuState(false)}>
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
      </>
    )
  }
}