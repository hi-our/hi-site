import React, { Component, Fragment } from 'react';
import ModuleTitle from '../../../../components/module-title'
import './styles.styl';
class OpenResources extends Component {
  render() {
    const titleProps = {
      enTitle: 'OPEN SOURCE',
      cnTitleLeft: '开源',
      cnTitleRight: '组件',
    };
    return (
      <section className="open-main">
        <ModuleTitle {...titleProps} />
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
            <h3>轻 3D 图片轮播</h3>
            <p>react-slider-3d-cc</p>
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
            <h3>图片懒加载组件</h3>
            <p>react-better-image-c</p>
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
            <h3>融合响应式组件</h3>
            <p>react-ui-mode-cc</p>
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
            <h3>收货地址组件</h3>
            <p>react-address-picker</p>
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
      </section>
    );
  }
}

export default OpenResources;
