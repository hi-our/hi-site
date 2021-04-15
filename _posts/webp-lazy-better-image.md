---
title: Webp图像压缩和图片懒加载的高级实践
date: '2021-01-06 21:10:13'
summary: 图片处理的高级综合性实践文章
categories:
- 前端
tags:
- Webp
- 图片懒加载
---

# 正文——《官网首页图片体积降低 70% 的秘诀》

> 本文图像处理功能基于七牛云或腾讯云的图像处理。至于其他云厂商提供的图片处理服务，请看文末补充信息。

### 讲师简介

我是盛瀚钦，沪江 CCtalk 前端开发工程师，腾讯云云开发高级布道师，Taro 社区共建者，开发了 Hi 头像小程序，并著有技术小册《从 0 到 1 开发一个智能头像识别小程序》。在前端页面重构及用户体验优化方面有着深入的理解。

[个人网站](https://www.xiaoxili.com) | [头像小册](https://www.xiaoxili.com/hi-face/docs/README.html) | [案例 DEMO](https://www.xiaoxili.com/packages/react-better-image-cc/) | [ [图片懒加载组件](https://github.com/shenghanqin/react-better-image-cc) ]

### 适应人群

* 前端开发：图片压缩的适用场景及兼容性方案、图片懒加载组件的使用方法
* 后端开发与运维：七牛云参数的常见用法及各厂商迁移的注意点
* 测试：了解图片压缩后的测试注意点，比如 iPhone 微信 APP 上的兼容性
* 移动端开发：可以听一听前端的思路

## 问题背景

近些年网站 CDN 流量虽然降低很多，但还是需要被引起注意。前端工程师在开发时会将 CSS 样式中的图片进行压缩，但网站图片的流量大部分来自用户上传的图片，而这些图片如何进行图片压缩和懒加载呢？

近期 CCtalk 官网首页上线，整站图片体积从 10mb 降低到 3mb 左右，降低首屏图片体积从 2mb 降低 800kb，如何完成图片体积降低这么多呢？请看下文中的三个秘诀。

![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-1.png)

## 秘诀一：按图片宽度等比缩放

### 常见图片格式的压缩率分析

> 本文中图片处理操作是基于七牛云 `imageViewer2` 图片快速转换来完成的。

jpg、png 格式原图使用`imageView2`后的效果来看

- 即使不改变宽度，图片体积也会减少一些。
  - jpg 格式会降低 70%
  - png 会降低 30%。
- 减少图片宽度后，如原图 1184px 降低到 600px 后
  - jpg 格式图片会降低 90%
  - png 格式图片降低了 50%。

在使用上述方案后，图片体积从 6MB 降低到 4.5MB，首屏在 1.8MB 左右。此时通过 Network 面板发现，未被压缩下去的是 Gif 格式的图片。Gif 图片也仅仅从 800 KB 降低到 600 kb。

在 CCtalk 首页中有三四个 gif 图，压缩后的图片体积有 1MB。

![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-2.png)

<!--more-->

### 源码示例

```typescript
/**
 * 默认返回原格式
 * 传入原始图片url，根据指定宽度获取图片地址，宽度大于`width`的时候会等比缩放至该宽度
 * 原始宽度小于目标宽度，图片不缩放
 *
 * @param {string} url 传入的图片地址
 * @param {number} width 指定的图片最大宽度
 * @param {string} prefix 拼接的前缀，默认为 `?imageView2/2/w/`
 * @returns {string} 根据参数拼接的新图片地址
 */
export function getImgByWidth(
  originUrl: string,
  maxWidth: number,
  prefix: string = '?imageView2/2/w/'
): string {
  return `${originUrl}${prefix}${Math.ceil(maxWidth)}`
}
```

## 秘诀二：将图片转换为 Webp 格式

> WebP（发音：weppy）是一种同时提供了有损压缩与无损压缩（可逆压缩）的图片文件格式，派生自影像编码格式 VP8，被认为是 WebM 多媒体格式的姊妹项目，是由 Google 在购买 On2 Technologies 后发展出来，以 BSD 授权条款发布。
> ——来自百度百科《webp 格式》

`Webp`不仅可以在 Web 浏览器中使用，也可以在微信小程序中使用。在我的 Hi 头像小程序中就有相应的使用。

```javascript
<Image className="theme-cover" src={imageThumb(shareImageUrl, 280, 280)} webp />
```

### Webp 压缩率

通过图片宽度的缩放，jpg 有比较好的压缩率，但是 png、gif 并不理想，所以这里可以将图片转换为`webp`格式。

在仅改变图片格式、不改变宽度的情况下，粗略估计如下

- jpg 可以降低 70-85%
- png 可以降低 50-70%
- gif 可以降低 70-90%

上文中的提及的 Gif 图，最终从 1MB 降低到 200KB。

![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-2.png)

### Webp 源码示例

```typescript
/**
 * 默认返回 webp 格式
 * 传入原始图片url，根据指定宽度获取图片地址，宽度大于`width`的时候会等比缩放至该宽度
 * 原始宽度小于目标宽度，图片不缩放
 *
 * @param {string} url 传入的图片地址
 * @param {number} width 指定的图片最大宽度
 * @param {string} prefix 拼接的前缀，默认为 `?imageView2/2/w/`
 * @returns {string} 根据参数拼接的新图片地址
 */
export function getWebpByWidth(
  originUrl: string,
  maxWidth: number,
  prefix: string = '?imageView2/2/w/'
): string {
  return `${originUrl}${prefix}${Math.ceil(maxWidth)}${
    isSupportWebp ? '/format/webp/ignore-error/1' : ''
  }`
}
```

### Webp 格式兼容性判断

Webp 格式其实存在浏览器兼容性问题。

![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-4.png)

详情请前往：[WebP image format](https://caniuse.com/?search=webp)

在《[站点优化之 WebP 实战](https://juejin.cn/post/6844903784561246216)》中着重讲的是如何快速判断`Webp`格式，其主要是使用加载一张 Webp 格式图片的方式。

```typescript
export function checkLoadWebp() {
  var img = new Image()
  img.onload = function () {
    isSupportWebp = !!(img.height > 0 && img.width > 0)
  }
  img.onerror = function () {
    isSupportWebp = false
  }
  img.src = `data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=`
}
```

但通过加载 Webp 图片的方式来判断，属于有异步加载的延迟的，虽然这个判断在渲染组件时基本上都会执行完成，但依旧可能在页面刚刚启动时获取不到。

但还有另一种更快的方法，那就是通过`Canvas`的`toDataURL`中是否包含`image/webp`，只是这个判断方法在最新版 Safari 浏览器中只能获取到`image/png`这个默认值。

```typescript
/**
 * 支持 Chrome、Firefox 浏览器
 * Safari 14支持 webp 格式，但 dataUrl 中还是 image/png
 */
export function checkCanvasWebP(): boolean {
  const ele = document.createElement('canvas')
  if (ele && typeof ele.toDataURL === 'function') {
    const dataUrl = ele.toDataURL('image/webp') || ''
    return dataUrl.indexOf('data:image/webp') === 0
  }
  return false
}
```

所以，我最后的判断方法是这样的：

```typescript
/**
 * 判断浏览器是否兼容 Webp 格式图片
 */
let isSupportWebp = false
const uaStr = window.navigator.userAgent.toLowerCase()
function checkWebp() {
  // 在 iPhone、iPad、Mac Safari 上使用加载 Webp 方式
  if (uaStr.includes(`iphone`) || uaStr.includes(`ipad`) || (uaStr.includes(`macintosh`) && uaStr.includes(`version/`))) {
    checkLoadWebp()
    return
  }
  isSupportWebp = checkCanvasWebP()
}
checkWebp()
```

### Webp 不适用场景

Webp 集中不适用的功能多出现在 iPhone 版微信 APP 内。

1. 无法保存 Webp 图片。
2. 预览原图功能无法查看 Webp 版 Gif 动图
3. 公众号 H5 分享图片时，也不要分享 Webp 图片格式

**方案一：**

如果确定该区域需要保存图片的话，可以换成`getImgByWidth()`，这个方法仅改变宽度，不改变图片格式。

**方案二：**

使用`UserAgent`获取到`micromessenger`，直接返回`false`。

> 那为何又能在官网首页中使用 Webp 图片格式呢？因为在首页中，多是链接跳转，无法直接保存图片。
> 经过简单测试，在企业微信、支付宝、UC 浏览器中均可保存 Webp 格式图片，仅微信 app 不支持。

## 秘诀三：`BetterImage`——使用图片懒加载组件

在上文中提及，CCtalk 官网首页有整站图片体积和首屏图片体积之分，这是因为图文列表模块中的图片都使用了图片懒加载`BetterImage`。

`BetterImage`图片懒加载组件有如下几个特点：

- 基于`intersectionObserver`判断图片是否在视图之内，性能好
- 提供了图片宽度等比缩小和转换为 Webp 格式等图片压缩方式
- 图片在未在视图之内时，填充了 30x30 的小图，以模拟高斯模糊的效果
- 提供了等比 ratio、宽高两种使用方式

### 如何安装

图片懒加载组件依赖`IntersectionObserver`来判断是否在视图之内，这个方法在老旧浏览器中不支持，需要在`app.js`中导入`intersection-observer`。

主包：

```
npm install --save @xiaoxili/react-better-image-cc
```

依赖性：

```shell
npm install --save intersection-observer
```

```javascript
 // app.js
import 'intersection-observer' 
```

### 如何使用

```javascript
import React, { Component } from 'react'
import BetterImage from '@xiaoxili/react-better-image-cc'
class Example extends Component {
  render() {
    return (
      <>
        {/* 图片比例确定，宽高不定，需要覆盖的样式较多。 */}
        <div className="image">
          <BetterImage ratio={9 / 16} src={'图片地址'} maxImageWidth={1200} />
        </div>
        {/* 图片区域宽高确定 */}
        <div className='image'>
          <BetterImage width={200} height={112} src={'图片地址'} maxImageWidth={800} />
          <BetterImage ratio={9 / 16} src={'图片地址'} maxImageWidth={1200} />
        </div>
      </>
    )
  }
}
```

### 注意点

1、组件内有一些 style 属性上定义的宽高，可能在代码中需要`!important`来覆盖。

```scss
.image-now {
  position: relative;
  padding-top: 62.5%;
  & > img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%!important;
    object-fit: cover;
  }
}
```

> PS：我也在思考此处如何改进，等我想好后会在后续版本中改进。

2、页面中存在滚动锚点定位时，富文本组件中不建议使用图片懒加载组件，因为图片高度可能获取不准确。

## 终极秘诀：看源码，学习更多

本文所提及的 Webp 图片压缩和图片懒加载组件等内容都已经开源了，具体请访问一下地址或二维码。

Github:[https://github.com/shenghanqin/react-better-image-cc](https://github.com/shenghanqin/react-better-image-cc)

Demo:[https://www.xiaoxili.com/packages/react-better-image-cc/](https://www.xiaoxili.com/packages/react-better-image-cc/)

<!-- ![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-5.png) -->

### 效果图

![](https://image-hosting.xiaoxili.com/img/img/20210106/CSFp29x8KVBOnAzZ-3.png)

## 补充信息

`BetterImage`目前版本是基于七牛云、腾讯云数据万象的图片压缩及图片转换方法。

各厂商均已支持图片压缩和图片格式转换。

- [七牛云](https://developer.qiniu.com/dora/1279/basic-processing-images-imageview2)
- [腾讯云](https://cloud.tencent.com/document/product/460/6929)
- [阿里云](https://help.aliyun.com/document_detail/44703.html?spm=a2c4g.11186623.2.12.6a16720dY6VPM0#concept-mf3-md5-vdb)
- [京东云](https://docs.jdcloud.com/cn/object-storage-service/convert-format)
- [又拍云](https://help.upyun.com/knowledge-base/image/)
- [华为云](https://support.huaweicloud.com/fg-obs/obs_01_0471.html)
- [百度云](https://cloud.baidu.com/doc/BOS/s/Akdzs4xua)
