---
title: TweenMax 动画研究
date: '2015-06-02 16:48:41'
categories:
- 前端
tags:
- TweenMax
- 创意动画
---

最近 Html5 动画非常火，小溪里也在某一个网页中发现了它的踪迹。[DEMO](http://www.smartisan.com/wechat/anniversary.html  "真正的光芒，需要一点点时间")（建议在手机微信或者iPad微信上观看）

我在帝都的前端朋友也有问我，这种Html5动画怎么做。这里我把我的研究成果在这里展示一下。

我的这个 HTML5 动画研究是基于 Tween 的高级版 [TweenMax](http://greensock.com/docs/#/HTML5/GSAP/TweenMax/) 来做的。

<!--more-->

> **Tween 动画** 又称“补间动画”、“中间动画”，最早接触Tween类是在学习Flash时候，使用ActionScript做动画的时候，使用过类Tween。
>--[【Android】两种动画介绍(Tween动画、Frame动画)](http://www.cnblogs.com/tianshuai11/archive/2012/04/20/2477167.html)

## TweenMax.js 介绍

>TweenMax 建立在 TweenLite 核心类以及它的大哥TweenFilterLite 基础之上，它为Tween 家族增加了新的受欢迎的功能（尽管只是锦上添花），从而使家族更加的壮大，比如贝赛尔缓动、暂停/继续能力，简便的连续缓、16进制颜色缓动、以及更多的内容。
> --[百度百科 tweenmax](http://baike.baidu.com/link?url=HURhQ6Nw19OQi2dgH6doi0GanMfyQIDHHs5HpWrdkIuKrr8t8WoY-DyTy7y7nHfPUbUe8Ywf58xgKwkJ1ez-Oa)

当然，TweenLite 更加轻量级，需要调用更多的轻量级 js，只是小溪里有些偷懒，就直接用了TweenMax。


[TweenMax.js 官网](http://greensock.com/) （需翻墙）
[TweenMax.js Docs](http://greensock.com/docs/#/HTML5/GSAP/TweenMax/)（需翻墙）
[TweenMax.js 参数说明 中文翻译](http://blog.5d.cn/user12/dzxz/200809/500547.html)


## TweenMax 与 CSS3 动画

小溪里觉得，CSS3 动画适合写一些逻辑比较少、自动循环的小动画，TweenMax.js 是用js来控制CSS的变化，适合写逻辑复杂的动画。

这里奉上使用TweenMax制作的《哈尔的移动城堡》动画
[Howl's Moving Castle](http://greensock.com/?post_type=example&p=5966)（需翻墙）

## 附上 Demo 及部分代码
[TweenMax Demo 网址](/assets/2015-06-02-tweenmax-demo1/)
PS： DEMO 效果差强人意。建议在Chrome 浏览器的手机模拟器中查看。

```
// 动画的js
$(function(){

    // 获取 DOM 节点
    var bgAura1 = $('.bg_aura_1');
    var bgAura2 = $('.bg_aura_2');
    var bgAura3 = $('.bg_aura_3');

/*

auraAni1
obj         DOM 节点
maxScale    缩放最大值
minScale    缩放最小值
duration    动画时间
delay       延迟时间
*/

    var  auraAni1 = function (obj, maxScale, minScale, duration, delay) {

        // step1 完成第一步加载，onComplete开始执行 step2
        var step1 = function () {
            TweenMax.to(obj, duration * 0.55, {
                x: -15,
                scaleX: maxScale,
                scaleY: maxScale,
                delay: delay,
                onComplete: step2
            });
        };

        // step2 从一个小的起始状态后执行 step3
        var step2 = function () {
            TweenMax.fromTo(obj, duration * 0.45, {
                x: 10,
                opacity: 0.2,
                scaleX: minScale,
                scaleY: minScale,
                delay: 0.2
            }, {
                x: 0,
                opacity: 1,
                scaleX: (maxScale - minScale)/3,
                scaleY: (maxScale -minScale)/3,
                // delay: 0.2,
                ease:Back.ease,
                onComplete: step3
            });
        };

        // step3 从一个小的起始状态后执行 step2
        var step3 = function () {
            TweenMax.fromTo(obj, duration * 0.55, {
                x: 0,
                opacity: 1,
                scaleX: (maxScale - minScale)/3,
                scaleY: (maxScale -minScale)/3,
                // delay: 0.2
            }, {
                x: -15,
                opacity: 0.05,
                scaleX: maxScale,
                scaleY: maxScale,
                delay: 0.2,
                ease:Back.ease,
                onComplete: step2
            });
        };

        return {
            animate: step1
        }

    };


    setTimeout(function () {

        // 调用参数且执行animate()
        auraAni1(bgAura1, 3.6, 0.1, 1.8, 0).animate();
        auraAni1(bgAura2, 5.4, 0.2, 1.8, 0.6).animate();
        auraAni1(bgAura3, 12, 0.4, 1.8, 1.2 ).animate();

    }, 2000);

    // TweenMax.to(bgAura1, 0.1, {
    //     scaleX: 0.7,
    //     scaleY: 0.7,
    //     delay: 0
    // });

    // TweenMax.to(bgAura2, 0.1, {
    //     scaleX: 1,
    //     scaleY: 1,
    //     delay: 0
    // });

});
```




