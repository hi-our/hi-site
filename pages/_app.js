import React from 'react'
import App from 'next/app'
import './_app.styl'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    console.log('pageProps :>> ', pageProps);
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
