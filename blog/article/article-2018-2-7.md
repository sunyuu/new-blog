---
title: 因一次低级错误重新认识setTimeout
publishDate: 2018-02-07
tags: 
  - blog
  - JavaScript
---
> 前几天在看一个issue时无意中暴露了我对于setTimeout的错误理解，于是重新开始完整的回顾和学习一下相关的知识点，巩固下相关的基础知识

## setTimeout是什么

MDN上的定义是这么写的
> WindowOrWorkerGlobalScope混合的 **setTimeout()** 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码

意思就是指在Window和[WorkerGlobalScope](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)中同时被实现，具体的看setTimeout中的参数状况

```
var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function[, delay]); 
var timeoutID = scope.setTimeout(code[, delay]);
```

其中function就是在delay（毫秒）延迟后要执行的函数，其中code是function的一个替代语法，但是不推荐这么写，一般使用function就行了，function的写法有以下几种

``` javascript
//匿名函数方式
setTimeout(function () {}, 1000)

//函数名
function foo() {}
setTimeout(foo, 1000)

//函数变量
var bar = function () {}
setTimeout(bar, 1000)
```
当使用foo()作为参数时，其实就是把foo函数的运行结果作为了参数，并没有达到在延迟后去执行foo函数的效果，失去了回调的意义

## setTimeout的原理

其实对于setTimeout这样的timer来说在JavaScript中我们可以这样理解，单一的线程按顺序执行代码，遇到timer时则先不执行，而是在相应的时间后把需要执行的代码再插入到线程中，如果遇到一段非常耗时的代码，虽然已经插入了代码，但是前面的耗时阻塞了，就达不到在指定时间执行的效果了，查看下图

![JavaScript](https://mdn.mozillademos.org/files/4617/default.svg)

setTimeout中的代码就是在指定时间后插入了队列，在栈执行完成后就去执行队列里的东西，更加详细的介绍可以看这边的文档[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)