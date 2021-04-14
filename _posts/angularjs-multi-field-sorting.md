---
title: AngularJS  多字段混合排序
date: '2016-03-31 19:24:56'
categories:
- 前端
tags:
- AngularJS

---

在小溪里最近做的 “[加入我们](http://www.smartisan.com/support/#/join)” 碰到了多字段中英文排序，需要把多个字段按照先英文后中文的方式进行排序。



##初始字段

* 职位名称：中英文，如“Web 前端开发工程师”
* 是否热门：new
* 工作职能：中英文，如“软件研发”
* 工作地点：中英文，如“北京 - 望京”或“北京 - 亦庄”
* 职位详情：HTML 文档

## 排序具体规则
产品说需要将职位是否热门、职位名称、工作职能、工作地点按照汉语拼音/English 进行排序，相同拼音（字母）开头开头时，按照英文在前面来排，如“Android 工程师”在 “安全工程师”之前。

产品经理制定的排序具体规则：(减号表示降序)

* PC
    * 默认升序：&nbsp;职能 > 热门 > 职位 > 地点
    * 职位升序：&nbsp;热门 > 职位 > 职能 > 地点
    * 职位降序：&nbsp;热门 > -职位 > 职能 > 地点
    * 职能升序：&nbsp;职能 > 热门 > 职位 > 地点
    * 职能降序：-职能 > 热门 > 职位 > 地点
    * 地点升序：&nbsp;地点 > 热门 > 职能 > 职位
    * 地点降序：-地点 > 热门 > 职能 > 职位
* 移动端
    * 默认升序：&nbsp;热门 > 职能 > 职位 > 地点

<!--more-->
  
### 使用 AngularJS orderBy 排序

因为在项目中使用 AngularJS，所以首先考虑使用 AngularJS 进行排序，这里用到了 `$filter('orderBy') ` 进行排序。

> 文档：https://docs.angularjs.org/api/ng/filter/orderBy

但排序中文时，并没有完全按照拼音排序，好像是按照 中文对应的 Unicode 编码~~~~
> **来自 [w3cschool](http://www.w3school.com.cn/jsref/jsref_localeCompare.asp) 的解释**
> 把 < 和 > 运算符应用到字符串时，它们只用字符的 Unicode 编码比较字符串，而不考虑当地的排序规则。以这种方法生成的顺序不一定是正确的。例如，在西班牙语中，其中字符 “ch” 通常作为出现在字母 “c” 和 “d” 之间的字符来排序。

```js
var orderBy = $filter('orderBy');
var items = [{'title': '中文'},{'title': '英文'},  {'title':'汉语'}];
console.log(orderBy(items, 'title'));
// output: 中文 汉语 英文
```
PS：至于说，`$filter('orderBy')(array, expression, reverse)`中的 `expression` 可以使用 callback，但在网上寻找了很久都没有找到合适的方式写这个function。

### 基于 `JavaScript localCompare()` 的排序

#### `localCompare()` 存在的固有问题

> **来自 [w3cschool](http://www.w3school.com.cn/jsref/jsref_localeCompare.asp) 的解释**
> 用本地特定的顺序来比较两个字符串。
> **说明**
> `localeCompare()` 方法提供的比较字符串的方法，考虑了默认的本地排序规则。ECMAscript 标准并没有规定如何进行本地特定的比较操作，它只规定该函数采用底层操作系统提供的排序规则。

那么，`localeCompare()` 存在的问题在于它的排序依据是当前电脑系统设置的语言来进行本地字符串的比较。

* 当电脑系统语言为中文时，`localeCompare()` 能返回中英文混合排序的预期结果，只是出现了所有的中文在前，英文都排在后面，此时，想让英文在前，中文在后面就有点难了。
* 当电脑系统语言为英文或者其他语言时，`localeCompare()` 并不能返回预期的中英文混合排序结果。


#### 多字段排序的方法
另外，就算使用 `localCompare()` 进行中英文混合排序能达到预期效果，在多字段排序上，也得需要用递归的方式进行深入的排序，在定制相应的方法方面，需要自行写 JS 逻辑。

以下代码来自于我学弟，他的前端博客是 http://thunf.me/。

```JSON
[{
    "title": "Smartisan OS产品经理",
    "category": "产品经理",
    "address": "北京 - 望京",
    "status": "new",
    "body": "<div class=\"section\">\n<h3 id=\"-\">岗位职责</h3>\n<ol>\n<li>参与 Smartisan OS 的产品设计；</li>\n<li>设计新产品，新功能，并持续优化和改善现有应用和功能；</li>\n<li>跟进项目进度和周期，推动产品的顺利上线。</li>\n</ol>\n</div>",
    "sort_id": 47
}]
```

```javascript
function sort1(data, order){
    if (order.length <= 0) { return data;}

    var curK = order.slice(0, 1),
        tempData = sortByKey(data, curK), 
        rData = [],
        start = 0, 
        end = 0;

    for (var i = 0; i < tempData.length - 1; i++) {
        end = i;
        if (tempData[i][curK].localeCompare(tempData[i+1][curK])) {
            var arr = tempData.slice(start, end+1);
            rData.push.apply(rData, sort1(arr, order.slice(1)));
            start = i+1;
        }
    }
    var arr = tempData.slice(start);
    rData.push.apply(rData, sort1(arr, order.slice(1)));
    return rData;
}

var order = ['category','status', 'title',  'address'];
data = sort1(data, order);


function sortByKey(data, k){
    return data.sort(function(pre, pos){
        if (pre[k] && pre[k].localeCompare) { 
            return pre[k].localeCompare(pos[k]);
        }
    });
}
```

### 按照中文拼音排序
先将中文转换成拼音，然后按照字母排序。
这种排序直接碰到的一个问题是，中文的可能跟英文的混在一起。如安全工程师（an-quan-gong-cheng-shi）和 Android 工程师（Android-gong-cheng-shi）,就没法很好的区分了。此时，我判断了第一个字是否是拼音，因为职位名称基本上是多种多样的，在第二个字或者字母出现相同的几率不是那么大，用户也不会那么在意。

``` JSON
[{
    "title": "游戏 SDK 产品经理",
    "titleFirstEn": 1,
    "titleSlug": "you-xi-sdk-chan-pin-jing-li",
    "titleSlugTo": "you-xi-sdk-pm",
    "sort_id": 3,
    "category": "产品",
    "categorySlug": "chan-pin",
    "address": "北京 - 望京",
    "addressSlug": "bj-wangjing",
    "status": "new",
    "body": "<div class=\"job-block\"><h3 id=\"section\">岗位职责：</h3>\n<ol>\n<li>负责 Smartisan OS 中游戏账号及支付 SDK 的市场分析、用户研究，挖掘需求，持续改进产品功能和用户体验；</li>\n<li>负责与运营/ BD 团队的日常沟通，收集整理跟 SDK 产品以及游戏运营数据的相关需求；</li>\n<li>沟通协调研发部门，跟进产品功能实施。</li>\n</ol>\n</div>"
}]
```

``` js
// 各个字段 升降序
var sortArr = {
    // 默认：热门 职能 职位 地点
    defaultAsc: ['status', 'categorySlug',  'titleFirstEn','titleSlug', 'addressSlug'],
    // 职位升序： 热门 职位 职能 地点
    titleAsc: [ 'status', 'titleFirstEn','titleSlug', 'categorySlug', 'addressSlug'],
    // 职位降序：热门 -职位 职能 地点
    titleDesc: [ 'status','-titleFirstEn', '-titleSlug', 'categorySlug', 'addressSlug']
};

// 默认排序名
$scope.sortName = $scope.isMobileVersion ? 'mobileAsc' : 'defaultAsc' ;
// 初始排序 升降序
$scope.reverseObj = angular.extend( {}, defaultReverse);
// 默认选择全部显示
$scope.categorySelected = '全部职能';

// 排序
$scope.changeSort = function (sortName) {
    var sortArrOne;
    if ($scope.sortName === sortName) {
        var tmpObj = {};
        tmpObj[sortName] = !$scope.reverseObj[sortName];
        $scope.reverseObj = angular.extend({}, defaultReverse, tmpObj);
    }

    $scope.sortName = sortName;
    if (sortName == 'defaultAsc' || sortName == 'mobileAsc') {
        sortArrOne = sortArr[sortName];
    } else if ($scope.reverseObj[sortName]) {
        sortArrOne = sortArr[sortName + 'Asc'];
    } else {
        sortArrOne = sortArr[sortName + 'Desc'];
    }
    $scope.jobListShow = orderBy($scope.jobList, sortArrOne);
};
```


> **排序的不完美地方**
> 排序时只考虑了首位是中文（拼音）或者是英文的情况，并没有考虑后几位字符的情况。

