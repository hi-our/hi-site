---
title: 响应式Web设计——断点设计
date: '2015-06-03 11:27:04'
categories:
- 前端
tags:
- 响应式设计

---
## 前言
小溪里从2013年开始接触响应式Web设计，前后做过多个响应式网站，对 CSS3 媒体查询中断点还是有一点理解的。

本文重点探讨的是一个响应式网站的需求：

 - 通用型 CSS3 Media Query，尽可能短而简单，容易扩展；
 - 在手机上等小屏幕设备上显示的是Mobile版，而在包括iPad、PC端在内的中大型屏幕上要显示的PC版；
 - 不借助 JavaScript 的 UserAgent 判断设备或浏览器；
 - 咱不考虑 Window Phone 和 Surface Pro，事实上小溪里手上也没这两款测试设备。

<!--more-->


## 断点：区间的具体分界点

根据场景、设备选择常见的断点，如 mobile (320px、360px、414px、640px、736px)、iPad (768px、1024px)、PC (1280px、1440px、1600px、1920px) 等。

又考虑到主要检测移动设备，我又做了非常常见的三种 Mobile 分辨率。

| 设备 | 屏幕实际显示宽高 | 渲染宽度 |
| ------------- |:-------------:| -----:|
| iPhone 5s     | 640 * 1136 | 320 * 568 |
| 某手机      | 1080 * 1920      |   360 * 640 |
| iPhone 6 plus | 1080 * 1920 ( 1242 * 2208)      |    414 * 736 |

> 参考：   [百度 分辨率使用情况](http://tongji.baidu.com/data/screen)

### 有经典吗？

小溪里最开始考虑的去看一下 [苹果官网](http://www.apple.com/cn/) 的断点设计，但未能满足我的要求。因为苹果官网确实确实在所有的iPhone设备上都是Mobile版，在iPad和PC上为PC版，但是在安卓1080p的手机上，竖屏时，UC和QQ浏览器上显示的是PC版。

```
@media only screen and (max-device-width: 767px){}
```
##### [DEMO - 苹果官网](http://www.apple.com/cn/)  

请使用安卓系统1080p或更大分辨率的手机，保证其竖屏状态，打开UC或QQ浏览器上，打开的苹果官网会显示 PC 版。另外，这个手机处于横屏状态时，也会 PC 版。
原因猜测：可能是安卓1080p竖屏时，UC给出`width`是 360，但`device-width`却是 1080，但是在iPhone6 plus上UC的 `width`和`device-width`都是 736。

##### [DEMO - 验证width和device-width](/assets/2015-06-03-braek-of-design/)
测试设备为某1080P的安卓手机和iPhone 5c

| ··· | document.body.offsetWidth | window.screen.width |
| ------------- |:-------------:| :-----:|
| 安卓UC     | 360  | 1080 |
| 安卓 Chrome | 360 | 360 |
| iPhone UC | 360 |   360 |
| iPhone Safari | 320 | 320 |



###我要的···
而小溪里想要的是PC和PAD上显示PC固定布局，手机端才显示移动端响应式。

#### `max-width`写法

```
@media screen and (max-width: 736px) { }
```
*bug*

无论pc和手机都会显示响应式，不满足要求,因为 736px为iPhone6 plus横屏渲染宽度，但在pc上浏览器缩小到736px时也有效。

##### 测试：[DEMO - 新浪视频](http://www.apple.com/cn/)  
在PC上，将浏览器的宽度拖到 1024px 、768px 、640px 、480px 、360px 、320px ，都产生了响应式的变化，而非小溪里所希望的PC固定布局的情况。

#### `max-device-width` 写法
``` 
@media screen and (max-width: 736px) and (max-device-width: 1920px) { }
```
*bug*
这种写法在小于1920px屏幕上也会显示响应式，不满足要求。

#### `orientation` 写法

原理：在移动设备上，竖屏状态下且浏览器渲染宽度为414px，或者横屏状态下且浏览器渲染宽度为736px时，都出发该media query
```
@media screen and (max-width: 414px) and (orientation:portrait),
       screen and (max-width: 736px) and (orientation:landscape) { }
```

*Bug*

* PC Chrome 拖动宽高为 400*800 时会触发`(max-width: 414px) and (orientation:portrait)`，不符合要求；
* PC Chrome 拖动宽高为 600*500 时会触发`(max-width: 736px) and (orientation:landscape)`，不符合要求。

#### `max-device-width` 和 `orientation` 写法

原理：横竖屏状态和设备宽都加上吧。

```
@media screen and (max-width: 414px) and (max-device-width: 1080px) and (orientation:portrait),
       screen and (max-width: 736px) and (max-device-width: 1920px) and (orientation:landscape) { }
       
```
*bug*

在 MacBook Pro(1280 * 800 Retina 2倍屏)和 公司台式机(1920 * 1200) 都符合小于1920设备宽的横屏设备宽，那么735 * 734以下（宽比高的数值更大，符合横屏条件）就会显示响应式。

当然上面的 bug 出现的情况较小，我开始就用这种方案了。但我们组长表示不满意。

- 太长了，不好扩展
- 加了 1080px 和 1920px 两个设备宽的限制条件，那以后更大分辨率的手机，就不好整了。

#### `max-device-width` 和 `设备像素比`

原理：在 `max-device-width: 736px` 的苹果设备上和 `-webkit-min-device-pixel-ratio: 2.0` 的移动设备上会显示响应式。

当然，在文章开头我就提出，我没有考虑 window phone，所以，我大胆用`-webkit-min-device-pixel-ratio: 2.0`。


```
@media screen and (max-width: 736px) and (max-device-width: 736px),
screen and (max-width: 736px) and (-webkit-min-device-pixel-ratio: 2.0)  { }
```
*bug*
在 MacBook pro(1280 * 800 2倍屏）上拖动Chrome宽变为735px时， 会触发`-webkit-min-device-pixel-ratio: 2.0`，不符合要求。

## 对响应式布局的理解

### 响应式网页的概念

[百度百科](http://baike.baidu.com/link?url=7CgjLHRXckG2yNb1mMxfqjY5O8icZvy4WsHVNIpwJFpPdIT-QI9nVmNHWkduAwZVDEvOrqJs53_bFjLKrTT0Ia)     [漫谈响应式设计](http://ued.sina.com.cn/?p=1406)

* 多设备
* 多浏览器宽度
* 横竖屏切换

我的理解：通过CSS3媒体查询，在某一宽度区间内显示固定“变化”布局，响应各种区间的布局方案。示例：[微软](http://www.microsoft.com/zh-cn/default.aspx)  [苹果](http://www.apple.com/cn/)

断点的另一种理解：特定的浏览器宽度下，页面元素出现效果不佳时添加断点。[微软](http://www.microsoft.com/zh-cn/default.aspx)

下方的这个适配不是很好。
![](http://devconf.qiniudn.com/microsoft-gallery.png)

```
/* → 1列 */     @media screen and (max-width: 539px){ }
/* → 2列 */     @media screen and (max-width: 992px) and (min-width: 540px) { }
/* → 4列 */     @media screen and (min-width: 992px) { }
```




## 相关文章
《[漫谈响应式设计](http://ued.sina.com.cn/?p=1406)》是之前同事写的对响应式 Web 设计的理解，其中对 CSS3 媒体查询的理解较为精辟。
《[响应性web设计实战总结](http://www.cnblogs.com/tugenhua0707/p/4147569.html)》里面详细讲解了响应式 Web 设计、CSS3媒体查询的基础支持。

《[移动Web手册](http://item.jd.com/1520263143.html "移动Web手册（双色）移动Web第一书 9787121258213")》一书也对响应式Web设计作了补充。

