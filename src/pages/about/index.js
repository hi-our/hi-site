import React, { Component } from 'react';
import Page from '../../components/page';

import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <Page
        pageClassName="page-about"
        title={'关于我们-HiOur'}
      >
        <div className="page-wrap">
          <div className='page-main'>

            <div className="page-module module-about">
              <div className="module-main">
                <h2>关于我们</h2>
                <p>嗨在我们：(英文名称：HiOur）始建于2020年4月，是一个富有青春活力的技术综合团队。</p>
                <p>HiOur主要是侧重于原生代码的书写以及对腾讯云技术的应用，专注于自主案例的开发和对案例的讲解培训，案例特色主要基于生活，通过技术来改变生活，让生活更加美好。</p>
              </div>
            </div>
            <div className="module-member">
              <div className="module-main">
                <ul className="member-list">
                  <li className="member-item">
                    <img src={require("../../img/member-boss.jpg")} alt="盛瀚钦" />
                    <div className="item-main">
                      <h3>盛瀚钦</h3>
                      <p>创始人</p>
                      <p>负责项目统筹规划、架构设计，分工安排</p>
                    </div>
                  </li>
                  <li className="member-item">
                    <img src={require("../../img/member-lihuan.jpg")} alt="盛瀚钦" />
                    <div className="item-main">
                      <h3>李欢</h3>
                      <p>Web前端</p>
                      <p>负责团队项目功能的实现</p>
                    </div>
                  </li>
                  <li className="member-item">
                    <img src={require("../../img/member-baoguo.jpg")} alt="盛瀚钦" />
                    <div className="item-main">
                      <h3>王宝国</h3>
                      <p>产品经理</p>
                      <p>负责团队的项目策划以及产品需求</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="page-module module-contact">
              <div className="module-main">
                <h2>联系我们</h2>
                <p><a href="mailto:shenghanqin@163.com">shenghanqin@163.com</a></p>
              </div>
            </div>
            <div className="page-module module-join">
              <div className="module-main">
                <h2>加入我们</h2>
                <p>我们需要Web前端、设计师、产品经理等互联网类的人员。你可以为大学生，也可以为已工作的，我们都欢迎。</p>
              </div>
            </div>
          </div>

        </div>

      </Page>
    )
  }
}