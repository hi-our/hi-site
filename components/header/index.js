import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default class Header extends React.Component {
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
          <div className="header-auto">
            <h1 className="header-title">
              <img src="/images/logo.png" alt="logo"/>
            </h1>
            <ul className="navbar">
              <li className="navbar-item">
                <a href="" className="navbar-item-active">首页</a>
              </li>
              <li className="navbar-item">
                <a href="">博客文章</a>
              </li>
              <li className="navbar-item">
                <a href="">技术分享</a>
              </li>
              <li className="navbar-item">
                <a href="">关于我们</a>
              </li>
            </ul>
            <div className="navigation-operation">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* 杠杠图标 */}
            <div 
              className={(menuState ? 'active' : '') + ' header-menu'}
              onClick={() => this.changeMenuState(true)}
            >
              <div></div>
              <div></div>
            </div>
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
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    )
  }
}