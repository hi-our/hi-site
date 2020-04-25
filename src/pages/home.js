import React, { Component } from 'react';
import Page from '../components/page';
import { Link } from 'react-router-dom';


import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <Page
        pageClassName="page-home"
        title={'HiOur-Hi头像的出品方'}
      >
        <header>
          <div className="header-main">
            <Link to='/' className="logo">
              <h1>Hi Our</h1>
            </Link>
            <nav className="main-nav">
              <a href='/' title="Hi Our">首页</a>
              <a href='/hi-face' title="Hi头像教程">头像小册</a>
            </nav>
          </div>
        </header>
        <section className="feature-1"></section>
        <footer className="footer">
          <div className="footer-main">
            <a href='/' className="footer-logo">
              <h3>Hi Our</h3>
            </a>
            <section className="footer-links">
              <dl>
                <dt><img src={require("../img/footer-about@2x.png")} />关于我们</dt>
                <dd><Link to="/about">Hi Our</Link></dd>
                <dd><Link to="/about#join">加入我们</Link></dd>
                <dd><Link to="/about#contact">联系我们</Link></dd>
              </dl>
              {/* <dl>
                <dt>社区</dt>
                <dd>GitHub</dd>
                <dd>微信</dd>
              </dl> */}
              <dl>
                <dt><img src={require("../img/footer-resource@2x.png")} />相关资源</dt>
                <dd><a href="https://cloudbase.net">云开发 CloudBase</a></dd>
                <dd><a href="https://taro.jd.com">Taro</a></dd>
              </dl>
              <dl>
                <dt><img src={require("../img/footer-link@2x.png")} />友情链接</dt>
                <dd><a href="https://tuture.co">图雀社区</a></dd>
                <dd><a href="https://xiaoxili.com">小溪里</a></dd>
              </dl>
            </section>
          </div>
          
        </footer>
      </Page>
    );
  }
}
