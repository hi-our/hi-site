import './styles.styl'
import Link from '../link-html'


export default class Page extends React.Component {
  render() {
    return (
      <header>
        <div className="header-main">
          <h1 className="logo">
            <Link href='/' addHtml={false}>
              小溪里 xiaoxili.com
            </Link>
          </h1>
          <nav className="main-nav">
            <Link href='/' addHtml={false}>首页</Link>
            <a href='/blog' title="小溪里博客">博客</a>
            <a href='/hi-face' title="Hi头像教程">小册</a>
            <Link href='/about' addHtml>关于</Link>
          </nav>
        </div>
      </header>
    )
  }
}