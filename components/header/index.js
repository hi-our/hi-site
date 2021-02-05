import React from 'react'
import './styles.styl'
import Link from '../link-html'

export default class Header extends React.Component {
  state = {
    isOpen: false // 导航菜单的状态 
  }

  toggleMenuStatus = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderMainNav = (isPC) => {
    return (
      <nav className={isPC ? 'navigation-pc' : 'navigation-mobile'}>
        <ul>
          <li>
            <Link href='/' isActive={true} addHtml={false}>首页</Link>
          </li>
          <li>
            <a href='/blog' title="小溪里博客">博客</a>
            
          </li>
          <li>
            <a href='/hi-face' title="Hi头像教程">小册</a>
          </li>
          <li>
            <Link href='/about' addHtml>关于</Link>
          </li>
        </ul>
      </nav>
    )
  }

  renderMainOperation = () => {
    return (
      <div className="navigation-operation">
        <button className="mode"></button>
        <button className="language"></button>
        <button className="subscribe"></button>
      </div>
    )
  }

  render() {
    const { isOpen } = this.state
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
            {this.renderMainNav(true)}
            {this.renderMainOperation()}
            {/* 杠杠图标 */}
          </div>
        </header>
        {/* 导航菜单 */}
        <button
        className={"navigation-toggle " +  (isOpen ? 'active' : '')}
          onClick={this.toggleMenuStatus}
        >
          <div className='text'>菜单切换</div>
        </button>
        <div
          className={'navigation-pop ' + (isOpen ? 'active' : '')}
        >
          {this.renderMainNav()}
          {this.renderMainOperation()}
        </div>
      </>
    )
  }
}