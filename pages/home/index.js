import React, { PureComponent } from 'react'
import Page from '../../components/page'
import Banner from "./components/banner";
import BlogPost from "./components/blog-post";

import './styles.styl'
export default class Home extends PureComponent {
  render() {
    return (
      <Page pageClassName="page-home">
        <Banner />
        <BlogPost />
      </Page>
    )
  }
}


// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   // const data = {}

//   // // The value of the `props` key will be
//   // //  passed to the `Home` component
//   return {
//     props: {
//       title: '小溪里 - 前端技术2',
//       pageClassName: "page-home"
//     }
//   }
// }
