import React, { Component, Fragment } from 'react';
import HeaderTitle from '../headerTitle';
import './styles.styl';

class TechShares extends Component {
  render() {
    const titles = {
      entitle: 'TEC-SHARING',
      cntitle1: '技术',
      cntitle2: '分享',
    };
    return (
      <Fragment>
        <div>
          <div className="tec-main">
            <HeaderTitle title={titles} />
            <div className="tec-content">
              <div className="list">
                <img
                  className="list-img"
                  src="/images/tech-share/tab-bar.png"
                  alt="小程序 TabBar 创意动画"
                />
                <div className="list-bar">小程序 TabBar 创意动画</div>
                <div className="list-mark">
                  <img
                    src="/images/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
                    className="list-icon-img"
                  />
                </div>
              </div>
              <div className="list">
                <img
                  className="list-img"
                  src="/images/tech-share/fun-img.png"
                  alt="小程序基础架构和功能优化"
                />
                <div className="list-bar">小程序基础架构和功能优化</div>
                <div className="list-mark">
                  <img
                    src="/images/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
                    className="list-icon-img"
                  />
                </div>
              </div>
              <div className="list">
                <img
                  className="list-img"
                  src="/images/tech-share/svg-img.png"
                  alt="小程序 TabBar 创意动画"
                />
                <div className="list-bar">SVG动画研究的重要性</div>
                <div className="list-mark">
                  <img
                    src="/images/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="SVG动画研究的重要性"
                    className="list-icon-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TechShares;