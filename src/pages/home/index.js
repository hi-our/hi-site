import React, { Component } from 'react';
import Page from '../../components/page';

import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <Page
        pageClassName="page-home"
        title={'HiOur-Hi头像的出品方'}
      >
        <div className="page-wrap">
          <div className="page-main">
            <section className="hiface-wrap">
              <div className="hiface-logo">
                <img src={require('../../img/hiface-logo.png')} alt="Hi头像" />
              </div>
              <div className="hiface-main">
                <h2>Hi头像</h2>
                <p>记录生活的点滴</p>
                <div className="button-wrap">
                  <div className="button-try">
                    快速体验
                    <div className="qrcode-mask">
                      <div className="qrcode-mask-inner">
                        <img className="hiface-qrcode" src={require('../../img/hiface-qrcode.jpg')} alt="Hi头像小程序码" />
                      </div>
                    </div>
                  </div>
                  <a className="button-github" href="https://github.com/hi-our/hi-face">GitHub</a>
                </div>
              </div>
              
            </section>

          </div>

        </div>
        
      </Page>
    );
  }
}
