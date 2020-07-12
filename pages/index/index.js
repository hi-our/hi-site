import React, { Fragment, PureComponent } from 'react'
import Page from '../../components/page';

import './styles.styl'

export default class Home extends PureComponent {
  render() {
    const { title } = this.props

    return (
      <Fragment>
        <Page
          pageClassName="page-home"
          title={title}
        >
          <div className="page-wrap">
            <div className="page-main">
              <section className="hiface-wrap">
                <div className="hiface-logo">
                  <img src="https://image-hosting.xiaoxili.com/img/20200712182458.png" alt="Hi头像 " />
                </div>
                <div className="hiface-main">
                  <h2>Hi头像</h2>
                  <p>记录生活的点滴</p>
                  <div className="button-wrap">
                    <a className="button-github" href="https://github.com/hi-our/hi-face">GitHub</a>
                    <div className="button-try">
                      快速体验
                    <div className="qrcode-mask">
                        <div className="qrcode-mask-inner">
                          <img className="hiface-qrcode" src="https://image-hosting.xiaoxili.com/img/20200712182459.jpg" alt="Hi头像小程序码" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </section>

            </div>

          </div>
        </Page>
      </Fragment>
    )
  }
}


export async function getStaticProps(context) {
  // Get external data from the file system, API, DB, etc.
  // const data = {}
  // const { pathname } = context || {}
  // console.log('pathname :>> ', pathname);

  // // The value of the `props` key will be
  // //  passed to the `Home` component
  return {
    props: {
      title: '小溪里 - 前端技术',
      pageClassName: "page-home"
    }
  }
}