import Head from 'next/head'

export default function DocumentMeta(props) {
  const { title = '小溪里 - 前端技术' } = props

  return (
    <Head>
      {title ? <title>{title || ''}</title> : ''}
      <meta content="前端,前端开发工程师,云开发,云开发布道师,小程序,Taro,人工智能,xiaoxili,沪江 cctalk" name="Keywords" />
      <meta name="description" content="盛瀚钦，沪江 CCtalk 前端开发工程师，Hi头像小程序作者，腾讯云云开发布道师，Taro 社区的知识共建者，著有《从0到1开发一个智能头像识别小程序》小册。" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
    </Head>
  )
}