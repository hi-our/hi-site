import './styles.styl'
import Link from '../link-html'


export default class Page extends React.Component {
  render() {
    return (
      <header>
        <div className="header-main">
          <h1 className="logo">
            <Link href='/'>
              小溪里 xiaoxili.com
            </Link>
          </h1>
          <nav className="main-nav">
            <Link href='/'>首页</Link>
            <Link href='/about'>关于</Link>
            <a href='/hi-face' title="Hi头像教程">小册</a>
          </nav>
        </div>
      </header>
    )
  }
}