---
title: 记一次失败的混pr之旅
publishDate: 2018-02-05
tags: 
  - 吐槽
  - 日记
  - JavaScript
  - Vue
  - Element-UI
---

> 最近一直在用基于vue的Element-UI作为框架进行开发，常常也应为业务需求需要去定制改变其源码，于是也常常关注其github上的信息，昨天晚上偶然在Issues上看到[[Bug Report] table control BUG](https://github.com/ElemeFE/element/issues/9631)这个issue，心想能不能自己尝试着解决下，也好混个pr啥的

##  定位问题

根据issue中的信息（ps：这个bug report包含了非常详细的步骤信息，还有jsfiddle的demo，可以说是非常方便的定位问题了），可以看一下其中的demo代码
``` html
<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column v-for="item in columns" v-bind="item">
    </el-table-column>
  </el-table>
</template>
```
``` javascript 
var Main = {
        created () {
    	setTimeout(this.setColumns, 1000)
    },
    methods: {
    	setColumns () {
      	this.columns = [{
        	prop: 'date',
          label: '日期'
        },{
        	prop: 'name',
          label: '姓名'
        },{
        	prop: 'address',
          label: '地址'
        }]
      }
    },
    data() {
      return {
        columns: [],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
```
其中当`<el-table></el-table>`中添加`height="200"`属性后，页面会崩溃卡掉

## 分析问题

其中最代码前后`height="200"`的添加，一级`setTimeout(this.setColumns, 1000)`是整个bug引起的重要因素，因为在其它情况中这两个条件单独存在是没有问题的，不过当时我没有仔细考虑清楚，直接在下面评论了把`setTimeout(this.setColumns, 1000)`改成`setTimeout(this.setColumns(), 1000)`,其实当时我真心不知道这两个有区别ヽ(。_°)ノ ，不过后来明确了之后进一步进行了分析
> todo: setTimeout的理解

去看Element-UI框架中的源码height作为props传进了table.vue组件，其中用到它得地方有几处，刚开始不熟悉代码的话不太容易判断这里哪边会出问题，不过细细分析，大部分只是用这个属性来进行样式的赋值计算，好得到一些样式，不过在计算属性computed下有`shouldUpdateHeight()`的函数直接受到了height属性的影响，而这个shouldUpdateHeight属性在整个页面中也只在这个组件的`doLayout()`函数的一处有使用，那就不妨看看这个函数的使用
``` javascript
doLayout() {
    if (this.shouldUpdateHeight) {
        this.layout.updateElsHeight();
    }
    this.layout.updateColumnsWidth();
}
```
也就是说当有height属性传入进来后会执行`this.layout.updateElsHeight()`函数，点进去看看这个函数，有些感觉问题就出现了这边，因为这边出现了循环调用，用console分别看了两个循环调用的函数内部，得出了结论问题出现在了这一行
``` javascript
if (this.showHeader && headerWrapper.offsetWidth > 0 && headerHeight < 2) {
      return Vue.nextTick(() => this.updateElsHeight());
    }
```
这一行的判断条件中前两个为true，在于第三个因为`<el-table-column></el-table-column>`是异步加载的，导致headerHeight一直没有高度，于是这个判断条件一直为真，导致了死循环执行这段函数，最终导致页面崩溃，修改起来也是比较的简单，只要加入判断是否有`<el-table-column>`就行了，正当我看看想怎么写的时候，然后pull request下的，发现bug已经被官方修复了，比我提前了5个小时，这是修改后的代码，很好的规避了这个问题
``` javascript
if (this.showHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
    return Vue.nextTick(() => this.updateElsHeight());
}
```
## 结论

问题本身并不复杂，熟悉代码的情况下可以很快的排查出问题，若是要完美的解决问题可能对上下文要更加的熟悉一些，并且对基础的知识要更加的掌握

需要不断提升！