import React, { Fragment, PureComponent } from 'react'
import DocumentMeta from '../../components/document-meta'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './styles.styl'

export default class Home extends PureComponent {
  render() {
    const { title, list = [] } = this.props
    const { isShow } = this.state
  
    return (
      <Fragment>
        <DocumentMeta title="Way Art" />
        <Header />
        
        <Footer />
      </Fragment>
    )
  }
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {
    
  }

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      title: 123,
    }
  }
}