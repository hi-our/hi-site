import React from 'react'
import './styles.styl'
import Link from '../link-html'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isOpen, setIsOpen ] = React.useState(false)

  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark';

  function toggleColorMode(event) {
    event.preventDefault();
    setTheme(isDark ? 'light' : 'dark');
  }

  const toggleMenuStatus = () => setIsOpen(!isOpen)

  const renderMainNav = (isPC) => {

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

  const renderMainOperation = () => {
    const modeTitle = '切换主题模式'

    return (
      <div className="navigation-operation">
        <button className={"mode "} title={modeTitle} aria-label={modeTitle} onClick={toggleColorMode}></button>
        {/* <button className="language"></button>
        <button className="subscribe"></button> */}
      </div>
    )
  }

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
          {renderMainNav(true)}
          {renderMainOperation()}
          {/* 杠杠图标 */}
        </div>
      </header>
      {/* 导航菜单 */}
      <button
        className={"navigation-toggle " + (isOpen ? 'active' : '')}
        onClick={toggleMenuStatus}
        aria-label={isOpen ? '关闭菜单' : '打开菜单'}
      >
        <div className='text'>菜单切换</div>
      </button>
      <div
        className={'navigation-pop ' + (isOpen ? 'active' : '')}
      >
        <button className="navigation-pop-btn" onClick={toggleMenuStatus}></button>
        {renderMainNav()}
        {renderMainOperation()}
      </div>
    </>
  )
}