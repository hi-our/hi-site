import React, { Fragment } from 'react'
import { addClass, removeClass } from '../../utils/dom-utils';


export default class Page extends React.Component {

  static defaultProps = {
    isPCMode: false,
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
    const { pageClassName, isShowIphoneXBottom } = this.props
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
    const { title, description, keywords,  }
    return (
      <Fragment>
        <DocumentMeta
          title={title}
          description={description}
          charset='utf-8'
          keywords={keywords}
          {...meta}
        />
      </Fragment>
    )
  }

  
}