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
            <a href='/'>首页</a>
            <a href='/about' title="关于我">关于</a>
            <a href='/hi-face' title="Hi头像教程">小册</a>
          </nav>
        </div>
      </header>
    )
  }
}