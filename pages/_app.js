import React from 'react'
import App from 'next/app'
import './_app.styl'
import {
  ConfigProvider,
  ConfigContext,
} from '../components/config-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    )
  }
}

export default MyApp
