import React from 'react'
import App from 'next/app'
import './_app.styl'
import {
  ConfigProvider,
  ConfigContext,
} from '../components/config-context'
import { ParallaxProvider } from 'react-scroll-parallax';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ParallaxProvider>
        <ConfigProvider>
          <Component {...pageProps} />
        </ConfigProvider>
      </ParallaxProvider>
    )
  }
}

export default MyApp
