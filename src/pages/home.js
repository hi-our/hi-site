import React, { Component } from 'react';

import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="main-home">
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
      </div>
    );
  }
}
