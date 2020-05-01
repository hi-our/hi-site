import React, { Fragment } from 'react'
import { addClass, removeClass } from '../../utils/dom-utils';
import DocumentMeta from '../document-meta';
import Header from '../header';
import Footer from '../footer';


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
  }

  componentDidUpdate(prevProps) {

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