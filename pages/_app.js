import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'next-themes'
import './_app.styl'
import {
  ConfigProvider,
  ConfigContext,
} from '../components/config-context';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider defaultTheme='light'>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
