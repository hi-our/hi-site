import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { pathname = '' } = ctx
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, pageName: pathname.substr(1) }
  }

  render() {
    const { pageName } = this.props
    const codeToDark = 
      `
        var mediaMatch = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const prefersDark = localStorage.getItem("prefers-dark");
        let isDark = "string" == typeof prefersDark ? "true" === prefersDark : mediaMatch
        let root = document.documentElement;
        root.style.setProperty("--prefers-dark", isDark)
        root.classList.add(isDark ? "mode-dark" : 'mode-light')
      `
    return (
      <Html className={`page-${pageName || 'home'}`} lang='zh'>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: codeToDark }}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument