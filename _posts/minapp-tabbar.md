---
title: 【Taro 版】小程序 TabBar 创意动画
date: '2020-10-18 19:24:56'
summary: Hi 头像最近进行了 v2 版大改版，其中的交互动画得到了不少好友的称赞。今天我就来分享一些关于小程序 TabBar 创意动画，将从 TabBar 类型、完整的 TabBar 创意动画进行分析。
categories:
- 前端
tags:
- 小程序
- 创意动画
- Taro

---

Hi 头像最近进行了 v2 版大改版，其中的交互动画得到了不少好友的称赞。今天我就来分享一些关于小程序 TabBar 创意动画，将从 TabBar 类型、完整的 TabBar 创意动画进行分析。

![](https://image-hosting.xiaoxili.com/img/img/20201018/7b73f4d58c9ad761e01eafed77a2d28f-750765.png)

为何要使用自定义 TabBar 效果呢？
在页面的抽屉动画、TabBar 组件、添加图像素材按钮的多种要求下，我们只能选择使用自定义 TabBar 动画了。

<!--more-->

## 基础知识

### 默认 TarBar

[Tabbar](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/tabbar.html) 在 `app.json` 中配置，作用范围为 TabBar 页，常驻页面最底部，占据页面高度 50px，有 iPhone x 全面屏适配。

```js
tabBar: {
  custom: true,
  backgroundColor: '#DEE8FF',
  borderStyle: 'white',
  color: '#95a1af',
  selectedColor: '#2f5aff',
  list: [
    {
      pagePath: 'pages/theme-list/theme-list',
      text: '主题',
      iconPath: 'images/tab-theme-1.png',
      selectedIconPath: 'images/tab-theme-2.png'
    },
  ]
}
```

下图为小溪里参与维护的 CCtalk 出品的“打卡鸭”小程序。

![](https://image-hosting.xiaoxili.com/img/img/20200827/2128e0fc707ad29046520cf48f9b4881-d86272.jpeg)

### 全局自定义 TarBar

[自定义 tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。

> 在自定义 tabBar 模式下
>
> - 为了保证低版本兼容以及区分哪些页面是 tab 页，tabBar 的相关配置项需完整声明，但这些字段不会作用于自定义 tabBar 的渲染。
> - 此时需要开发者提供一个自定义组件来渲染 tabBar，所有 tabBar 的样式都由该自定义组件渲染。推荐用 fixed 在底部的 `cover-view` + `cover-image` 组件渲染样式，以保证 tabBar 层级相对较高。
> - 与 tabBar 样式相关的接口，如 `wx.setTabBarItem` 等将失效
> - **每个 tab 页下的自定义 tabBar 组件实例**是不同的，可通过自定义组件下的 `getTabBar` 接口，获取当前页面的自定义 `tabBar` 组件实例。

简单来说：

- 使用 CSS fixed 将 Tabbar 固定到底部，需要做 iPhone x 全面屏适配
- 在切换页面（onShow）后，设置当前高亮的 `TabItem`

![](https://image-hosting.xiaoxili.com/img/img/20200827/6baa5b8531d8f3575db1991e6996f152-a12be5.png)

**注意：如需实现 tab 选中态，要在当前页面下，通过 `getTabBar` 接口获取组件实例，并调用 `setData` 更新选中态。**

```js
show() {
  if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
}
```

以下为全局自定义 TabBar 的几篇文章：

- [小程序自定义底部导航栏组件](https://github.com/ljybill/miniprogram-custom-tab-bar)
- [Taro 3.x 设置自定义 TabBar](https://github.com/tarojsx/ui/blob/master/src/CustomTabBar.tsx)
- [基于 Taro 封装微信小程序的 tabBar](https://www.jianshu.com/p/a3822409622e)
- [taro 中自定义 tabbar 实现中间图标凸出效果](https://my.oschina.net/u/4403673/blog/3345417)

### 页面单独调用自定义 TabBar

每个页面调用 TabBar，页面内控制组件更加灵活。

> 这种方式可以视为每个 TabBar 都单独调用了 TabBar 组件。

![](https://image-hosting.xiaoxili.com/img/img/20201018/8cf1374295bdb5f25f9b18acfd28d4c1-ef065d.png)

```js
<CustomTabBar
  selected={tabBarIndex}
  hideIndex={tabBarIndex === 1 && !isShowShape ? 1 : -1}
/>
```

## 动画调研

### 抽屉动画演示

在移动端 UI 中汉堡包菜单配合抽屉式弹出动画是很常见的交互动效之一。首先，我们来看几个比较经典的动画效果：

**气泡动画参考**

气泡动画的核心点为，几个子按钮按照圆心分布，弹出有先后。

https://codepen.io/0guzhan/pen/YvNmwJ

![](https://image-hosting.xiaoxili.com/img/img/20201018/85b738b7a0b099e54325a44a913ec107-cc7aac.png)

**抽屉式动画**
抽屉式动画要点为

- 页面容器内有菜单和页面主内容两个子容器
- 带回弹效果的交互动画会更有趣

https://codepen.io/andrejsharapov/pen/jJXEGq

![](https://image-hosting.xiaoxili.com/img/img/20201018/308a1143638b41bd61dcdb967af29636-2e5225.png)

https://codepen.io/tylerfowle/pen/vEqXMV

![](https://image-hosting.xiaoxili.com/img/img/20201018/a0391addd0e6928f6c482d8fcbe78726-fe544b.png)

通过对上面抽屉动画所对应页面布局进行分析，我们可以发现，TabBar 组件只能放在当前页面中,作为“主要页面内容”模块被缩小。

![](https://image-hosting.xiaoxili.com/img/img/20201004/7c12e3c0b0cfd63ae53d897b43e10672-3d87c2.PNG)

### 底部 TabBar 动画

通过对国内常见的几十款 APP 进行分析，我们可以得出以下几个特点

1. 大部分 APP 的 TabBar 的交互动画中除了有类似小程序那样的几个页面 TabBar 外，都会有“+”号或者“▶”的主按钮
2. 在 TabBar 上 都会有一些微动画，比如爱奇艺 APP 上的气泡动画和京东 APP 上的图标转场动画。

| 爱奇艺                                                                                               | 京东                                                                                                 |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1）气泡动画 <br> 2）粘连动画                                                                         | Icon 高亮动画                                                                                        |
| ![](https://image-hosting.xiaoxili.com/img/img/20201018/a0ceda47c4874755230e5322054b1190-989029.jpg) | ![](https://image-hosting.xiaoxili.com/img/img/20201018/aa29251e185a806f691fa3706733b041-dbe107.jpg) |

 视频演示：https://v.qq.com/x/page/k3161mu12nw.html

## 动画试验

### 动画 1——粘连菜单

下方动画基于 `CSS filter` 滤镜与 `SVG` 高斯模糊实现，在 web 端上没有问题，但在真机上小程序上不支持。

![](https://image-hosting.xiaoxili.com/img/img/20201018/fa5a310e09182e08da3fcb303d5ce9fc-8ab3b1.png)

效果源码： https://codepen.io/siseer/pen/MBameP

> 这篇《[微信小程序 CSS filter（滤镜）的使用示例](https://juejin.im/post/6844903633289478152)》讲了大部分 CSS 滤镜效果，但都是基于微信开发者工具的，在真机上只有 `filter(abc.svg#goo)` 的这个不支持。

**知识点补充**

《[粘连效果实现](https://www.leevii.com/2018/09/adhesive-effect.html)》
对应的示例： https://codepen.io/leevare/pen/yxxMMq

### 动画 2——SVG 路径

既然黏连动画在小程序上无法实现，我就尝试换成了 SVG 路径来实现动画。
那为何不使用 CSS 圆角矩形呢？因为圆弧与直线的连接处要做“过渡”效果的。

![](https://image-hosting.xiaoxili.com/img/img/20201018/9ac5281816d4f3964e3de182d24ee715-7e9252.png)

效果源码： https://codepen.io/ainalem/pen/KBvOWV

## Hi 头像动画简述

视频演示：https://v.qq.com/x/page/c3161x3vo8v.html

### Tab 页切换动画

> （具体效果情况请看上面的视频）

Tab 页切换有两种实现思路：

- 分为多个有页面实体的 Tab 页
  - 在页面切换后，需要重新产生 TabBar 组件实例
  - 切换动画不够理想，但页面逻辑完全独立
- 在一个实体页面内
  - 用 Tabs 组件包含多个 Tab 子页面（组件）
  - 几个组件的逻辑相对独立，切换动画会更好

特别说明，Hi 头像的 `TabBar`并非使用 fixed 布局，而是用了页面 100% 高度配合 flex 布局，具体可以看 https://face.xiaoxili.com。

![](https://image-hosting.xiaoxili.com/img/img/20201018/520ff9fafa02c923b195b922fdc0b756-78d1a6.png)

```js
// 示意源码
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { isIphoneSafeArea } from 'utils/common'
import './styles.styl'

const IS_IPHONEX = isIphoneSafeArea()

export default class CustomTabBar extends Taro.Component {
  ...

  static defaultProps = {
    selected: -1,
    hideIndex: -1
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          pagePath: '/pages/theme-list/theme-list',
          text: '主题',
          iconPath:  Taro.getEnv() === 'WEB' ? require('../../images/tab-theme-1.png') : '../../images/tab-theme-1.png',
          selectedIconPath:  Taro.getEnv() === 'WEB' ? require('../../images/tab-theme-2.png') : '../../images/tab-theme-2.png',
        }
      ]
    }
  }

  switchTab = (e) => {
    const data = e.currentTarget.dataset
    const url = data.path
    Taro.switchTab({ url })
  }
  render() {
    const { selected, hideIndex } = this.props
    const { list } = this.state
    return (
      <View className={`tab-bar ${IS_IPHONEX ? 'bottom-safe-area' : ''} ${hideIndex === selected ? 'tab-bar-hide' : ''}`}>
        {
          list.map((item, index) => {
            const { pagePath, selectedIconPath, iconPath, text } = item
            return (
              <View key={text} hoverClass='tab-bar-item-hover' className={`tab-bar-item ${selected === index ? 'tab-item-active' : ''}`} data-path={pagePath} data-index={index} onClick={this.switchTab}>
                <Image className="tab-bar-image" src={'' + (selected === index ? selectedIconPath : iconPath)}></Image>
                <View className="tab-bar-text">{text}</View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
```

TabBar 源码地址：https://github.com/hi-our/hi-face/tree/master/taro/src/components/custom-tab-bar

### 按钮弹出动画

> （具体效果情况请看上面的视频）

在 v2 版 Hi 头像里，添加头像素材的按钮是在 TabBar 组件中“加号”中弹出，其中关键点为“同心圆布局”和“动画延迟”。

视频地址：https://v.qq.com/x/page/z3161kzeiwx.html

**同圆心布局**是按照圆心进行布局的，比计算 X 轴 和 Y 轴的偏移量更方便更准确
`transform: rotate(-60deg) translateY(-85px) rotate(60deg);`
**动画延迟**，多个按钮菜单项所对应的动画在执行时需要加上动画延迟
`transition-delay: 0.1s;`

按钮菜单源码：https://github.com/hi-our/hi-face/blob/master/taro/src/pages/avatar-edit/components/menu-choose/index.js

### 抽屉式动画

在抽屉式动画中，抽屉菜单和页面容器的动画参数是核心，可以有一点回弹效果

```css
.menu-main {
  transition: 0.35s cubic-bezier(.75,.26,.02,1.01) transform;
}

.page-container {
  transition: 0.35s cubic-bezier(.75,.26,.02,1.01) transform, 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55) border-radius;
}
```

下图为 “cubic-bezier”的参数效果，具体细节可以访问 https://cubic-bezier.com/#.68,-0.04,.26,1.55

![](https://image-hosting.xiaoxili.com/img/img/20201004/8fc83c2b91332569e08ea05044c74d83-426191.png)

```css
.menu-item:nth-child(1) {
    transition-delay: 0.1s;
    transform: rotate(-60deg) translateY(-85px) rotate(60deg);
}
.menu-item:nth-child(2) {
    transition-delay: 0.18s;
    transform: rotate(-20deg) translateY(-85px) rotate(20deg);
}
```

抽屉动画源码：https://github.com/hi-our/hi-face/blob/master/taro/src/pages/avatar-edit/components/menu-main/index.js


## 补充信息
### PPT 演示
https://www.xiaoxili.com/slides/5-minapp-tabbar/

### 视频课程
为了让大家更好地了解我的动画效果，后续会有一节 Hi 头像 UI 交互的分享课。

![](https://image-hosting.xiaoxili.com/img/img/20201018/afc8438c7413e661399eccd6069f685a-b71dd0.png)

## 关于 Hi 头像开源项目

Hi 头像，让头像有趣一点

![](https://image-hosting.xiaoxili.com/img/img/20200911/6f53bfa6573da16bec899f169fe58ae4-977c15.png)

* Web体验版： https://face.xiaoxili.com
* 源码：https://github.com/hi-our/hi-face
* 部署文档：https://github.com/hi-our/hi-face/blob/master/DEPLOYMENT.md
* 云开发技术小册：https://www.xiaoxili.com/hi-face/docs/README.html
```
