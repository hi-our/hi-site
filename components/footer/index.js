import React from 'react'
import './styles.styl'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img className="footer-logo" src="/images/footer-logo.png" alt="footer"/>
        <p className="footer-thank">感谢阅读！</p>
        <ul className="footer-links">
            <li className="footer-links-item">
                <p>关于我们</p>
                <span>关于嘻嘻</span>
                <span>关于团队</span>
            </li>
            <li className="footer-links-item">
                <p>社区</p>
                <span>Taro</span>
                <span>图雀社区</span>
            </li>
            <li className="footer-links-item">
                <p>友情链接</p>
                <span>itclanCoder</span>
                <span>APPClIP</span>
            </li>
            <li className="footer-links-item">
                <p>联系我们</p>
                <span>公众号：笑嘻嘻</span>
                <span>微博：笑嘻嘻</span>
            </li>
        </ul>
      </footer>
    )
  }
}
