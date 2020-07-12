import Head from 'next/head'

export default function DocumentMeta(props) {
  const { title = '小溪里 - 前端技术' } = props

  return (
    <Head>
      {title ? <title>{title || ''}</title> : ''}
      
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
    </Head>
  )
}