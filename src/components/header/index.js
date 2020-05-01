import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


export default class Page extends React.Component {
  render() {
    return (
      <header>
        <div className="header-main">
          <Link to='/' className="logo">
            <h1>Hi Our</h1>
          </Link>
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