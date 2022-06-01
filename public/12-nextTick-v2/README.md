## nextTick实现原理
此题属于原理题目，能够体现面试者对vue理解深度，答好了会加分很多。



### 答题思路：

1. 此题实际考查vue异步更新策略
2. 说出vue是怎么通过异步、批量的方式更新以提高性能的
3. 最后把源码中实现说一下



### 回答范例：

1. vue有个批量、异步更新策略，数据变化时，vue开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。然后在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

   > [官方文档在这里](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

2. 源码中，修改一个数据，组件对应的watcher会尝试入队:

  ```
  queue.push(watcher)
  ```

  并使用nextTick方法添加一个flushSchedulerQueue回调

  ```
  nextTick(flushSchedulerQueue)
  ```

  flushSchedulerQueue被加入callbacks数组

  ```js
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx) // cb就是加入的回调
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } 
  })
  ```

  然后以异步方式启动

  ```js
  if (!pending) {
    pending = true
    timerFunc()
  }
  ```

  timerFunc的异步主要利用Promise等微任务方式实现

  ```js
  let timerFunc
  
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    const p = Promise.resolve()
    // timerFunc利用p.then向微任务队列添加一个flushCallbacks
    // 会异步调用flushCallbacks
    timerFunc = () => {
      p.then(flushCallbacks)
    }
    isUsingMicroTask = true
  }
  ```

  flushCallbacks遍历callbacks，执行里面所有回调

  ```js
  function flushCallbacks () {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }
  ```

  其中就有前面加入的flushSchedulerQueue，它主要用于执行queue中所有watcher的run方法，从而使组件们更新

  ```js
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index]
    watcher.run()
  }
  ```

  



#### 知其所以然，测试代码：

[test.html](./test.html)

可以调试一下上述流程，看看是不是这样。



### 可能的追问

你平时什么时候会用到nextTick？