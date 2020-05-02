import React, { Fragment } from 'react'
import { addClass, removeClass } from '../../utils/dom-utils';
import DocumentMeta from '../document-meta';
import Header from '../header';
import Footer from '../footer';
import wxUitls from '../../utils/wx-mixins';

const DEFAULT_SHARE_COVER = 'https://n1image.hjfile.cn/res7/2020/04/26/2041af2867f22e62f8fce32b29cd1fb0.png'
export default class Page extends React.Component {

  static defaultProps = {
    isPCMode: false,
    isShowHeader: true,
    isShowFooter: true,
    theme: '',
    title: '',
    description: '',
    keywords: '',
    meta: {}
  }
  constructor(props) {
    super(props)

    this.htmlNode = document.getElementsByTagName('html')[0]

    this.rootNode = document.getElementById('root')
  }

  componentDidMount() {
    
    const { pageClassName } = this.props
    if (pageClassName && this.htmlNode) {
      addClass(this.htmlNode, pageClassName)
    }

    if (navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger") {
      this.setWechatShare()
    }
  }

  setWechatShare = async () => {
    const { title } = this.props
    await wxUitls.wxConfig()

    wxUitls.setWechatShareConfig({
      shareTitle: title,
      descContent: 'HiOur，Hi头像用起来！',
      shareImg: DEFAULT_SHARE_COVER,
    })
  }

  componentDidUpdate(prevProps) {

    console.log('prevProps.pageClassName !== this.props.pageClassName :>> ', prevProps.pageClassName, this.props.pageClassName);
    if (prevProps.pageClassName !== this.props.pageClassName) {
      removeClass(this.htmlNode, prevProps.pageClassName)
      addClass(this.htmlNode, this.props.pageClassName)
    }
  }

  render() {
    const { title, description, keywords, meta, isShowHeader, isShowFooter } = this.props
    return (
      <Fragment>
        <DocumentMeta
          title={title}
          description={description}
          charset='utf-8'
          keywords={keywords}
          {...meta}
        />
        {
          isShowHeader && <Header />
        }
        {this.props.children}
        {
          isShowFooter && <Footer />
        }
      </Fragment>
    )
  }

  
}