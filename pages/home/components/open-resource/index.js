import React, { Component, Fragment } from 'react';
import HeaderTitle from '../header-title';
import './styles.styl';
class OpenResources extends Component {
  render() {
    const titles = {
      entitle: 'OPEN SOURCE',
      cntitle1: '开源',
      cntitle2: '组件',
    };
    return (
      <Fragment>
        <div>
          <div className="open-main">
            <HeaderTitle title={titles} />
            <div className="content">
              <div className="list">
                <div className="list-img">
                  <img
                    src="/images/open-resources/icon-3d-swiper-mini.png"
                    width="52"
                    height="52"
                    alt="轻 3D 图片轮播"
                    className="list-icon-img"
                  />
                </div>
                <div className="list-line"></div>
                <div className="list-item-desc">轻 3D 图片轮播</div>
                <div className="list-min-desc">react-slider-3d-cc</div>
                <div className="list-mask">
                  <img
                    src="/images/open-resources/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
                    className="list-icon-img"
                  />
                </div>
              </div>
              <div className="list">
                <div className="list-img">
                  <img
                    src="/images/open-resources/icon-img-mini-loading.png"
                    width="52"
                    height="52"
                    alt="图片懒加载组件"
                    className="list-icon-img"
                  />
                </div>
                <div className="list-line"></div>
                <div className="list-item-desc">图片懒加载组件</div>
                <div className="list-min-desc">react-better-image-c</div>
                <div className="list-mask">
                  <img
                    src="/images/open-resources/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
                    className="list-icon-img"
                  />
                </div>
              </div>
              <div className="list">
                <div className="list-img">
                  <img
                    src="/images/open-resources/icon-res-min-coms.png"
                    width="52"
                    height="52"
                    alt="融合响应式设计React 组件"
                    className="list-icon-img"
                  />
                </div>
                <div className="list-line"></div>
                <div className="list-item-desc">融合响应式组件</div>
                <div className="list-min-desc">react-ui-mode-cc</div>
                <div className="list-mask">
                  <img
                    src="/images/open-resources/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
                    className="list-icon-img"
                  />
                </div>
              </div>
              <div className="list">
                <div className="list-img">
                  <img
                    src="/images/open-resources/icon-address-min.png"
                    width="52"
                    height="52"
                    alt="收货地址组件"
                    className="list-icon-img"
                  />
                </div>
                <div className="list-line"></div>
                <div className="list-item-desc">收货地址组件</div>
                <div className="list-min-desc">react-address-picker</div>
                <div className="list-mask">
                  <img
                    src="/images/open-resources/icon-group-mini.png"
                    width="40"
                    height="40"
                    alt="链接"
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

export default OpenResources;
