import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { pathname = '' } = ctx
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, pageName: pathname.substr(1) }
  }

  render() {
    const { pageName } = this.props
    return (
      <Html className={`page-${pageName || 'home'}`} lang='zh'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument