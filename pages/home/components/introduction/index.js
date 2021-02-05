import ModuleTitle from '../module-title'

import './styles.styl'

function Introduction() {
    const titleProps = {
        enTitle: 'ABOUT ME',
        cnTitleLeft: '个人',
        cnTitleRight: '介绍',
    };
    return (
        <div className="home-introduction">
            <ModuleTitle {...titleProps} />
            {/* 个人简绍 描述 */}
            <div className="desc">
                <img className="desc-bitmap" src="/images/bitmap.png" alt="bitmap" />
                <section className="desc-content">
                    <div className="desc-content-group"></div>
                    <h3 className="desc-content-title">资深 Web 前端工程师</h3>
                    <p className="desc-content-text">嘻师傅，资深 Web 前端工程师，有过多年的大厂工作经验，目前就职于 XX XXX。擅长领域为用户体验、交互动画，在 Web 响应式网页设计、小程序基础架构、多端账户统一登录有所研究。个人作品有 xx 小程序，著有《从0到1开发一个智能头像识别小程》小册。</p>
                    <button className="desc-content-more">MORE</button>
                </section>
            </div>
            {/* 个人简绍 特色 */}
            <ul className="feature">
                <li className="feature-item">
                    <img src="/images/icon-1.png" alt="icon-1"/>
                    <h3>07</h3>
                    <p>7年工作经验</p>
                </li>
                <li className="feature-item">
                    <img src="/images/icon-2.png" alt="icon-2"/>
                    <h3>12</h3>
                    <p>12篇技术文章</p>
                </li>
                <li className="feature-item">
                    <img src="/images/icon-3.png" alt="icon-3"/>
                    <h3>01</h3>
                    <p>1本技术小册</p>
                </li>
                <li className="feature-item">
                    <img src="/images/icon-4.png" alt="icon-4"/>
                    <h3>04</h3>
                    <p>4个开源组件</p>
                </li>
                <li className="feature-item">
                    <img src="/images/icon-5.png" alt="icon-5"/>
                    <h3>20</h3>
                    <p>20次技术分享</p>
                </li>
                <li className="feature-item">
                    <img src="/images/icon-6.png" alt="icon-6"/>
                    <h3>03</h3>
                    <p>3个开源贡献</p>
                </li>
            </ul>
        </div>
    )
}

export default Introduction
