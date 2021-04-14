---
title: PageScroll 研究
date: '2015-05-26 15:01:07'
categories:
- 前端
tags:
- 前端插件
- 单页全屏
---
## 引言
使用了jQuery插件 [jquery.onepage-scroll.js 1.2.1](https://github.com/peachananr/onepage-scroll) （下文用onepage-scroll）插件进行修改。具体文章详见 [How I Built The One Page Scroll Plugin](http://www.smashingmagazine.com/2014/08/25/how-i-built-the-one-page-scroll-plugin/)。onepage-scroll新版本为 1.3.1

本插件的名字为 jquery.pagescroll.js（下文用 pagescroll） ，以向 onepage-scroll 致敬，同时为了有点区别。

### 功能列表

* 单页/全屏滚动（借鉴）
 * 支持鼠标滚轮、空格键、上下方向键、上下翻页键、上下滑动
 * 在PC和ipad上支持 **响应式** 操作
 * 在Mobile上支持竖屏滚动，横屏正常拖动
* 支持 header、footer、topSlideNav、pagination
* 手指跟随(未加入阻尼)
* 页面回弹(有阻尼)
* 支持 CSS3 easing cubic-bezier()

<!--more-->

## 补充说明
在 onepage-scroll 中用 `translate3d 100%`进行了一屏滑动，同时在ie8上使用了绝对定位进行滚屏操作。

```
transform: translate3d(0, 100%, 0)
```

### 单位，是使用 % 还是 px (像素)

在百度V5.7和搜狗3.7.4 对transform: translate3d(0, ?%, 0)中百分比不支持，所以改用px

具体表现：滚屏会白屏或计算不准确。[View Demo](http://www.thepetedesign.com/demos/onepage_scroll_demo.html)

另外，本插件支持 `手指跟随` 和 `页面回弹`，那么用px进行计算会更加方便一些。

### 是否兼容IE9-
> IE9-指的是不支持translate3d的Internet Explorer，包含ie6、ie7、ie8、ie9.

>```
//onepage-scroll 1.3.1
if($('html').hasClass('ie8')) { }
>```

在 `onepage-scroll 1.3.1 ` 中有对 IE9- 的支持，但考虑到pagescroll使用了 `translate3d` 这么高大上的方式，并且在 IE9- 上表现效果也不好，在经过反复考虑后决定先不支持 IE9-。在IE8、IE9 上再做单独处理吧。

> modernizr.transforms3d.js
> 判断浏览器所能支持的特性，本插件所使用的modernizr 2.8.3使用定制版本
> 网址：http://modernizr.com/download/#-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
> 在 IE10+ 、Chrome 、Safari 、Firefox 等浏览器上支持 csstransforms3d，才可以使用pagescroll
> 在 IE9- 等浏览器上不支持csstransforms3d，所以就不启动page scroll



### 各大浏览器的具体表现如何？

在 Safari 浏览器和 Smartisan T1 自带浏览器上，如果页面高度超过了浏览器内容高度的话，在上下滑动时，浏览器的标题栏、工具栏都可能会消失，那这时候会影响到页面滚屏的效果。但在 pagescroll 不会出现这个问题。
```
html.onepage-wrapper, html.onepage-wrapper body {
  margin: 0;
  height: 100%;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; /* For some Androids */
}

.hidden {
  overflow-y: hidden;
}

.mac-hidden {
  overflow: hidden;
}
```

## 手势操作

在 onepage-scroll 只提供了上下左右滑动的单页/全屏滚动。但在智能手机或平板上除了整屏滑动之外，还拥有手指跟苏和页面回弹等特性。

pagescroll 主要是针对 `swipeEvents` 进行了扩展。在 onepage-scroll 中使用 `touchMove` 来 `trigger` 了 `swipe` 事件(包含up、down、left、right)。在 pagescroll 中，因为需要加上手指跟随和页面回弹这两个特性，将触发swipe动作主要放在了 `touchEnd` 事件上。

### 慢速滑动和快速滑动

**慢速滑动**
1. touchStart 中记录 `startY`
2. touchMove 中算出 `endY(startY - touches[0].pageY)`
3. 在 touchEnd 中判断 `endY` 是否超过 50。若超过50，将 `trigger` 了 `swipe` 事件(包含up、down、left、right)。

**快速滑动**
1. touchStart 中记录 `startTime`
2. touchEnd 中记录 `endTime`， 并判断时间间隔 `quickSwipeTime = (endTime - startTime) < 300;`
3. 在 touchEnd 中判断时间间隔是否小于 300ms。若小于300ms，将 `trigger` 了 `swipe` 事件(包含up、down、left、right)。

```
var endTime = new Date().getTime();
var quickSwipeTime = (endTime - startTime) < 300;
if (endX >= 50 || (endX > 14 quickSwipeTime&& )) {
    $this.trigger('swipeLeft');
} else if (endX <= -50 || (endX < -14 && quickSwipeTime)) {
    $this.trigger('swipeRight');
}
if (endY >= 50 || (endY > 14 && quickSwipeTime)) {
    $this.trigger('swipeUp');
} else if (endY <= -50 || (endY < -14 && quickSwipeTime)) {
    $this.trigger('swipeDown');
};
```

#### bug处理——卡在标题栏

在ipad和iPhone上滑到微信标题栏时，此时并不会 `touchEnd`，此时页面会卡在页面上。pagescroll 会 `touches[0].pageY` 是否小于 0，然后让其触发 `doSwipe()`
```
if (touches[0].pageY < 0 || startY >= windowHeight - 10 ) {
// 触发滑动或页面回弹
doSwipe();
}
```

### 手指跟随

手指跟随的逻辑其实挺简单的。

1. touchStart 中记录 `startY`
2. touchMove 中算出 `endY(startY - touches[0].pageY)`
3. 在 touchMove 中即时改变 页面容器的 `translate3d`

### 页面回弹
页面回弹的逻辑其实挺简单的。
1. touchStart 中记录 `startY`
2. touchMove 中算出 `endY(startY - touches[0].pageY)`
3. 在 touchEnd 

#### bug处理——开在调出控制中心后
在ipad和iPhone上有屏幕底部滑出“控制中心”时，也不会触发`touchEnd`，此时页面也会卡住。pagescroll 使用了 `touchCancel` 来让页面回弹。

### 附上 swipeEvents 代码

```
$.fn.swipeEvents = function() {
    return this.each(function () {

        // 横向起始位置
        var startX;
        // 纵向起始位置
        var startY;
        // 横向截止位置
        var endX;
        // 纵向截止位置
        var endY;
        // 页面高度
        var windowHeight = element._window.height();
        // 页面回弹的触发高度
        var positionXY = windowHeight * 0.25;

        // 快速滑动
        var startTime;

        // 赋值$(this)的指向
        var $this = $(this);

        // 元素绑定touchstart和touchend事件
        $this.on('touchstart', touchstart);
        $this.on('touchend', touchend);
        $this.on('touchcancel', touchcancel);

        function touchstart(event) {

            var touches = event.originalEvent.touches;
            if (touches && touches.length) {

                // 触摸的起始坐标
                startX = touches[0].pageX;
                startY = touches[0].pageY;
                startTime = new Date().getTime();

                // touchstart上绑定touchmove，持续运行
                $this.on('touchmove', touchmove);
            }
        }

        function touchmove(event) {

            var touches = event.originalEvent.touches;
            if (touches && touches.length) {

                // 加上preventDefault在T1、QQ浏览器上才能触发touchend事件
                event.preventDefault();

                // 滑动的位移/偏移
                endX = startX - touches[0].pageX;
                endY = startY - touches[0].pageY;

                // 显示页码
                if (isMobile) {
                    pagination.show(10);
                }

                // 在首页和末页，只能跟随手指50px
                if (headerFooterNeed) {
                    if (endIndex == 0) {
                        endY = ( 1 - 0.82 * Math.abs(endY) / windowHeight) * endY;
                        endY = endY <= -positionXY ? -(positionXY - 0.000001) : endY;
                    } else if (endIndex == element.section.length + 1){
                        endY = ( 1 - 0.82 * Math.abs(endY) / windowHeight) * endY;
                        endY = endY >= positionXY ? (positionXY - 0.000001) : endY;
                    }
                } else {

                    if (endIndex == 1 && endY < 0) {
                        endY = ( 1 - 0.82 * Math.abs(endY) / windowHeight) * endY;
                        endY = endY <= -positionXY ? -(positionXY - 0.000001) : endY;
                        
                    } else if (endIndex == element.section.length && endY > 0){
                        endY = ( 1 - 0.82 * Math.abs(endY) / windowHeight) * endY;
                        endY = endY >= positionXY ? (positionXY - 0.000001) : endY;
                    
                    }
                }

                // 计算整屏需要的位移/偏移量
                // 手指移动100%，屏幕移动50%
                var pos = -endY / 2 + endTop;

                // 如果touchend触发的动画不在进行中
                if (!isRunning) {
                    // 页面跟随手指移动
                    changeSectionPosition(pos, 0, settings.easing);

                }

                if (touches[0].pageY < 0 || startY >= windowHeight - 10 ) {
                    // $('a.back').html($('a.back').html() +'<br /> touchmove doSwipe');
                    doSwipe();
                    //$this.off('touchend', touchend);
                }

            }
        }


        function touchend(event) {
            var touches = event.originalEvent.changedTouches;
            if (touches && touches.length) {
                doSwipe();
            }
        } // toudend end

        function touchcancel(event) {
            // 位移过小，则页面回弹
                if (Math.abs(endY) < positionXY) {
                    var animationTime = settings.animationTime / 2;
                    changeSectionPosition(endTop, animationTime, 'cubic-bezier(.4,.01,.165,.99)');
                }

                // 隐藏页码
                if (isMobile) {
                    pagination.hide(1600);
                }

                // 关闭touchmove
                $this.off('touchmove', touchmove);
        } // toudend end

        function doSwipe () {
                // 将swipeEvent与滑动方向绑定在一起
                var endTime = new Date().getTime();
                var quickSwipeTime = endTime - startTime < 300;
                if (endX >= 50 || (endX > 14 && quickSwipeTime)) {
                    $this.trigger('swipeLeft');
                } else if (endX <= -50 || (endX < -14 && quickSwipeTime)) {
                    $this.trigger('swipeRight');
                }

                if (endY >= 50 || (endY > 14 && quickSwipeTime)) {
                    $this.trigger('swipeUp');
                } else if (endY <= -50 || (endY < -14 && quickSwipeTime)) {
                    $this.trigger('swipeDown');
                };

                // 位移过小，则页面回弹
                if (Math.abs(endY) < positionXY) {
                    var animationTime = settings.animationTime / 2;
                    changeSectionPosition(endTop, animationTime, 'cubic-bezier(.4,.01,.165,.99)');
                }

                // 隐藏页码
                if (isMobile) {
                    pagination.hide(1600);
                }

                // 关闭touchmove
                $this.off('touchmove', touchmove);
                endX = 0;
                endY = 0;
        }

    });
};

var touchHandler = {
    isTablet : navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|Tizen|Bada)/),
    addTouchHandler: function(){
        el.swipeEvents().bind("swipeDown",  function(event){ 
            mouseWheelHandle(event, 1);
        }).bind("swipeUp", function(event){ 
            mouseWheelHandle(event, -1);
        });
    },
    removeTouchHandler: function(){
        el.swipeEvents().unbind("swipeDown swipeUp");
    }
}
```
## 核心函数

### doScroll()

`doScroll()` 完成了滚动屏幕的核心功能。

```
var isRunning = false;

function doScroll(delta) {
    // 检测动画是否在运行
    if (isRunning) {
        return;
    }
    isRunning = true;
    setTimeout(function() {
        isRunning = false;
    }, settings.animationTime + 300);
    // 更新 endIndex
    updateIndex(delta);
    // 更新 endTop
    updateTop();

    // 执行页面切换动画
    el.transformPage(settings, endTop, endIndex, delta);

    //if (headerFooterNeed) {
        subNav.toggle();
    //}

    // pagination 切换 active 状态
    pagination.toggle();
    screenSwitch.toggle();

}
```

**isRunning**
在 onepage-scroll 的实际操作中，如果快速滑动页面，可能前一屏页面动画还没执行完就立马执行下一屏了，导致用户体验变差。在 pagescroll中引入了 `isRunning`  来阻断页面动画还没有执行完的页面连续上下切换。

### transformPage()
`transformPage` 完成了页面切换的功能，其中提供了 `beforeMove` 和 `afterMove` 功能。

```
// 切换页面
$.fn.transformPage = function(settings, pos, index, delta) {

    if (typeof settings.beforeMove == 'function') {
        settings.beforeMove(index);
    }

    changeSectionPosition(pos, settings.animationTime, settings.easing);

    $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        if (typeof settings.afterMove == 'function'){
            settings.afterMove(index);
        }
    });
    
    // 页面切换时执行
    page.transition(index, delta);
}
```
### mouseWheelHandle()
`mouseWheelHandle()`  可以将滑动、鼠标及键盘统一到一起，来完成 `doScroll()` 的页面操作。
```
var mouseWheelHandle = function (event, delta) {
    event.preventDefault();

    // 这里鼠标没有给delta
    if (!delta) {
        delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
    }

    // 每次只滚动一屏
    if (delta > 0) {
        delta = 1;
    } else {
        delta = -1;
    }

    // 进行滚动
    doScroll(delta);
};
```
### changeSectionPosition() 
`changeSectionPosition()`  完成页面平移，包含页面滚动、手指跟随、页面回弹。

```
function changeSectionPosition(top, time, easing) {
    el.css({
        '-webkit-transform': 'translate3d(0, ' + top + 'px, 0)',
        '-webkit-transition': '-webkit-transform ' + time + 'ms ' +easing,
        '-moz-transform': 'translate3d(0, ' + top + 'px, 0)',
        '-moz-transition': '-moz-transform ' + time + 'ms ' +easing,
        '-ms-transform': 'translate3d(0, ' + top + 'px, 0)',
        '-ms-transition': '-ms-transform ' + time + 'ms ' +easing,
        'transform': 'translate3d(0, ' + top + 'px, 0)',
        'transition': 'transform ' + time + 'ms ' +easing
    });
}
```


## 代码简要分析
### 设置项

* `defaults` 默认参数
* `settings` 可扩展参数
* `elementInit` 针对 defaults 和 settings中的 **element** 中需要变成$()的进行了预先元素设置。
* `endIndex` 当前执行动画后的单页序号
* `endTop` 执行动画后页面的位置

### 功能函数
init() 提供了的进入方法
```
// 执行一次  在ie10+、chrome、Safari、Firefox等浏览器上使用page scroll
if ($('html').hasClass('csstransforms3d')) {
    // 启动本函数
    init();
}
```
pagination 对页码进行处理
page 对每一个单页做处理
subNav 对`header-nav-slide` 进行处理
updateIndex() 对 `endIndex` 进行处理
updateTop() 对 `endTop` 进行处理

附上单页案例
https://github.com/yanhaijing/zepto.fullpage/issues/21