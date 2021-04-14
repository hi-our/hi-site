---
title: 从PC Web到移动 Web，我踩过的坑
date: '2015-06-03 11:16:15'
categories:
- 前端
tags:
- 移动Web
---

我在《[响应式Web设计——断点设计](http://www.xiaoxili.com/2015/06/03/break-of-responsive-web-design/)》一文中简单阐述了我对断点的理解及运用。

## 快速审查

### 问题1：屏幕变宽，页面中可能会出现过多空白区域。应当调节元素宽度或者设置其他方式自动来补充页面留白.

示例： [互联网分析沙龙](http://www.techxue.com/)

<!--more-->

此处有两张图

![](http://devconf.qiniudn.com/list-more.png)
![](http://devconf.qiniudn.com/51cto-pic.png)

长标题，可以单行截取。示例：[51CTO](http://www.51cto.com/)

```
a {
	display: block;
	word-wrap: normal;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
```

### 问题2：写死高度可能使内容超出模块范围，出现截取或者错版的问题。

屏幕宽度变化时，如从360px到320px时。PS：在UC上float有bug
图片
![](http://devconf.qiniudn.com/height-float.png)

```
.am-list-news-hd h2 {
	font-size: 1.6rem;
	float: left;
	margin: 0;
	height: 2rem;
	line-height: 2rem;
}
```
```
/* 导致uc上float不正常的原因 示例:float.html*/
text-rendering: optimizeLegibility;
```
### 问题3：浮动容易导致错版。
![](http://devconf.qiniudn.com/51cto-float1.png)
![](http://devconf.qiniudn.com/51cto-float.png)

```
.col-a .area > a {
	width: 80px;
	overflow: hidden;
	float: left;
	margin-right: 5px;
}
	
		
.col-a .area {
  padding: 5px 10px;
  border-bottom: 1px dashed #bfbfbf;
  overflow: hidden;
}
```

### 问题5：按钮、图片使用一致的对齐方式。

竖屏看起来像水平居中，那么横屏时也要是水平居中的。
![](http://devconf.qiniudn.com/align-left.png)
![](http://devconf.qiniudn.com/align-left2.png)



## 奇思淫巧

### NO1: 基于表格布局的垂直居中。

1、高度一致；2：轻松实现垂直居中

此处有一张图片
![](http://devconf.qiniudn.com/height-float.png)


```
<div class="list">
	<div class="line">
		<div class="pic"></div>
		<div class="title"></div>
	</div>
	<div class="line">
		<div class="pic"></div>
		<div class="title"></div>
	</div>
</div>

```

```

list {
	display: table;
}
.line {
	display:table-row;
}
.pic, .title {
	display:table-cell;vertical-align: middle;
}
.pic {
	/*左边固定宽度，右边宽度自适应*/
	width: 120px;
}
```


### NO2: 计算间距

* 情况一：看几倍图，看font-size，看line-height，看padding和margin。
* 情况二：缩放式，间距也应当设置成百分比形式的
* 情况三：360px到320px可能导致换行，此时行距也会导致间距，应适时改变间距设置


### NO3: 手机上 1PX 边框

1像素边框，在2倍屏幕上为2“占位”，3倍屏上为3“占位”，但设计师就要1“占位”

```
.content h1:after,
.content h2:after {
    border-top: 1px solid #bfbfbf;
    content: ' ';
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-transform-origin: left bottom;
}
/* Retina 适配 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0),
only screen and (min--moz-device-pixel-ratio: 2.0),
only screen and (-o-min-device-pixel-ratio: 200/100),
only screen and (min-device-pixel-ratio: 2.0) {
    .content h1:after,
    .content h2:after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}

/* 三倍屏 适配 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.5),
only screen and (min--moz-device-pixel-ratio: 2.5),
only screen and (-o-min-device-pixel-ratio: 250/100),
only screen and (min-device-pixel-ratio: 2.5) {
    .content h1:after,
    .content h2:after {
        -webkit-transform: scaleY(0.33333334);
        transform: scaleY(0.33333334);
    }
}
```


## 字体 我是这么认为的~

[px em rem 三者的区别](http://www.howsci.com/diffirence-of-px-em-rem.html)

不建议使用小于12px的字体，因为在安卓chrome上不支持

### 知名互联网公司 移动端字体大小

| 类型 | 基准字体	|字体区间 |
| ------------- |:-------------:| -----|
|国外官网类	| 18~16px |大字体 ≈30px<br> 标题字体 22px~18px<br>正文字体 18~14px<br>底部最小字体 14~12px |
|网购类|	14~12px|标题 16px<br>正文 14~12px<br>底部最小字体 12px|
|国内媒体类|16px	|标题 22px~18px<br>正文 18~16px<br>附加信息 12px<br>底部最小字体 12px|


_行高为 1.3、1.35、1.45、1.5_

## 表单区域

### 搜索区域内的输入框和搜索按钮在横竖屏切换占满整个屏幕，并且UI显示效果一致。
示例: search-input.html 此乃右边固定、左边自适应的写法之一

![](http://devconf.qiniudn.com/search-320.png)
![](http://devconf.qiniudn.com/search-568.png)

### 布局类的表单样式在苹果、安卓手机显示效果要一致。
![](http://devconf.qiniudn.com/input-51cto-iphone.png)
![](http://devconf.qiniudn.com/input-51cto-android.png)

```
 /* 修复代码 */
input {
	outline: none; //清除input外边框
	-webkit-appearance: none; // 清除iPhone上默认的样式，如圆角（待确认）
}
/* 保证安卓手机和苹果手机样式一致 */
.inputtext{
    display: block;  //变成块元素消除默认的上下外边距 某些时候有用
    width: 100%; //特定的时候用
    height: 30px; //严格要求的时候用
    //需要设置  `边距、边框、背景、圆角、行高`
    padding: 0;
    background: #e1e1e1; //背景颜色不一致？
    border-radius: 5px 0 0 5px; // 圆角矩形也必须写出
    border: none;
    line-height: 30px; //与高度保持一致
 }
```