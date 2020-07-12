import './styles.styl'
import Link from '../link-html'


export default class Page extends React.Component {
  render() {
    return (
      <header>
        <div className="header-main">
          <h1 className="logo">
            <Link to='/'>
              <a>Hi Our</a>
            </Link>
          </h1>
          <nav className="main-nav">
            <a href='/'>首页</a>
            <a href='/about' title="about us">关于</a>
            <a href='/hi-face' title="Hi头像教程">小册</a>
          </nav>
        </div>
      </header>
    )
  }
}