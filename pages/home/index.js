import React, { PureComponent } from 'react'
import Page from '../../components/page'
import Banner from "./components/banner";

import './styles.styl'
export default class Home extends PureComponent {
  render() {
    const { title, pageClassName } = this.props

    return (
      <Page title={title} pageClassName={pageClassName}>
        <Banner />
      </Page>
    )
  }
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  // const data = {}

  // // The value of the `props` key will be
  // //  passed to the `Home` component
  return {
    props: {
      title: '小溪里 - 前端技术',
      pageClassName: "page-home"
    }
  }
}
