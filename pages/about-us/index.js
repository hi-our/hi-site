import React, { Fragment } from 'react'
import DocumentMeta from '../../components/document-meta'
import Header from '../../components/header'
import Footer from '../../components/footer'

import './styles.styl'

export default function AboutUs() {

  return (
    <Fragment>
      <DocumentMeta title="关于我 - 小溪里" />
      <Header />
      <Footer />
    </Fragment>
  )
}