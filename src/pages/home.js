import React, { Component } from 'react';
import Page from '../components/page';


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
            <a href='/' className="logo">
              <h1>Hi Our</h1>
            </a>
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
                <dt>关于我们</dt>
                <dd>Hi Our</dd>
                <dd>加入我们</dd>
                <dd>联系我们</dd>
              </dl>

            </section>
          </div>
          
        </footer>
      </Page>
    );
  }
}
