import React, { Fragment } from 'react'
import { addClass, removeClass } from '../../utils/dom-utils'
import DocumentMeta from '../document-meta';
import Header from '../header';
import Footer from '../footer';
// import wxUitls from '../../utils/wx-utils';

// const DEFAULT_SHARE_COVER = 'https://n1image.hjfile.cn/res7/2020/04/26/2041af2867f22e62f8fce32b29cd1fb0.png'
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
  
  componentDidMount() {
    this.htmlNode = document.getElementsByTagName('html')[0]
  
    const { pageClassName } = this.props

    if (pageClassName && this.htmlNode) {
      addClass(this.htmlNode, pageClassName)
    }
  }

  componentDidUpdate(prevProps) {

    if (prevProps.pageClassName !== this.props.pageClassName) {
      removeClass(this.htmlNode, prevProps.pageClassName)
      addClass(this.htmlNode, this.props.pageClassName)
    }
  }


  componentWillUnmount() {
    const { pageClassName, isShowIphoneXBottom } = this.props
    if (pageClassName && this.htmlNode) {
      removeClass(this.htmlNode, pageClassName)
    }
  }

  render() {
    const { title, description, keywords, meta, isShowHeader, isShowFooter } = this.props
    return (
      <Fragment>
        <DocumentMeta
          title={title || ''}
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

export async function getStaticProps() {

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      title: 123,
    }
  }
}