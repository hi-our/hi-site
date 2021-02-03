import './styles.styl'

function Introduction() {
    return (
        <div className="home-introduction">
            {/* 头部 */}
            <header className="header">
                <div className="header-text">
                    <h3 className="header-text-model">ABOUT ME</h3>
                    <h4 className="header-text-title">
                        <span>个人</span>
                        <span>介绍</span>
                    </h4>
                </div>
            </header>
            {/* 简绍描述 */}
            <section className="desc">
                <img src="/images/bitmap.png" alt="bitmap" className="desc-bitmap"/>
                <div className="desc-content">
                    <div className="desc-content-group"></div>
                    <h3 className="desc-content-title">资深 Web 前端工程师</h3>
                    <p className="desc-content-text">嘻师傅，资深 Web 前端工程师，有过多年的大厂工作经验，目前就职于 XX XXX。擅长领域为用户体验、交互动画，在 Web 响应式网页设计、小程序基础架构、多端账户统一登录有所研究。个人作品有 xx 小程序，著有《从0到1开发一个智能头像识别小程》小册。</p>
                    <button className="desc-content-button">MORE</button>
                </div>
            </section>
            {/* 简绍经历 */}
            <ul className="experience">
                <li className="experience-item">
                    <img src="/images/icon-1.png" alt="icon"/>
                    <h3 className="experience-item-serial">07</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
                <li className="experience-item">
                    <img src="/images/icon-2.png" alt="icon"/>
                    <h3 className="experience-item-serial">12</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
                <li className="experience-item">
                    <img src="/images/icon-3.png" alt="icon"/>
                    <h3 className="experience-item-serial">01</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
                <li className="experience-item">
                    <img src="/images/icon-4.png" alt="icon"/>
                    <h3 className="experience-item-serial">04</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
                <li className="experience-item">
                    <img src="/images/icon-5.png" alt="icon"/>
                    <h3 className="experience-item-serial">20</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
                <li className="experience-item">
                    <img src="/images/icon-6.png" alt="icon"/>
                    <h3 className="experience-item-serial">03</h3>
                    <p className="experience-item-text">7年工作经验</p>
                </li>
            </ul>
        </div>
    )
}

export default Introduction
