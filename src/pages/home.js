import React, { Component } from 'react';
import Page from '../components/page';


import './home.css';

export default class Home extends Component {
  render() {
    return (
      <Page
        pageClassName="page-home"
        title={'HiOur-Hi头像的出品方'}
      >
        <header>
          <div className="header-main">
            <a className="logo"></a>
            <nav></nav>

          </div>
        </header>
        <section className="feature-1"></section>
        <footer className="footer">
          底部模块
        </footer>
      </Page>
    );
  }
}
