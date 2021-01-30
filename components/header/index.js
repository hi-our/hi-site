import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default class Header extends React.Component {
  state = {
    menuState: false // 导航菜单的状态 
  }

  changeMenuState = state => this.setState({menuState: state})

  toggleMenuStatus = () => {
    this.setState({
      menuState: !this.state.menuState
    })
  }

  render() {
    const {menuState} = this.state
    return (
      <>
        {/* 头部 */}
        <header className="header">
          <div className="header-main">
            <h1 className="logo">
              <Link href='/' addHtml={false}>
                小溪里 xiaoxili.com
              </Link>
            </h1>
            <nav className="navigation-pc">
              <Link href='/' isActive={true} addHtml={false}>首页</Link>
              <a href='/blog' title="小溪里博客">博客</a>
              <a href='/hi-face' title="Hi头像教程">小册</a>
              <Link href='/about' addHtml>关于</Link>
            </nav>
            <div className="navigation-operation">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* 杠杠图标 */}
            <div 
              className={(menuState ? 'active' : '') + ' header-menu'}
              onClick={this.toggleMenuStatus}
            >
              <div></div>
              <div></div>
            </div>
          </div>
        </header>
        {/* 导航菜单 */}
        <div
          className={'navigation ' + (menuState ? 'active' : '')}
        >
          <div className="navigation-menu" onClick={this.toggleMenuStatus}>
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