## 36-异步组件是什么？使用场景有哪些？

### 分析

因为异步路由的存在，我们使用异步组件的次数比较少，因此还是有必要两者的不同。



### 体验

大型应用中，我们需要分割应用为更小的块，并且在需要组件时再加载它们。

> In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it's needed.

```js
import { defineAsyncComponent } from 'vue'
// defineAsyncComponent定义异步组件
const AsyncComp = defineAsyncComponent(() => {
  // 加载函数返回Promise
  return new Promise((resolve, reject) => {
    // ...可以从服务器加载组件
    resolve(/* loaded component */)
  })
})
// 借助打包工具实现ES模块动态导入
const AsyncComp = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
```

---

### 思路

1. 异步组件作用
2. 何时使用异步组件
3. 使用细节
4. 和路由懒加载的不同

---

### 范例

1. 在大型应用中，我们需要分割应用为更小的块，并且在需要组件时再加载它们。
2. 我们不仅可以在路由切换时懒加载组件，还可以在页面组件中继续使用异步组件，从而实现更细的分割粒度。
3. 使用异步组件最简单的方式是直接给defineAsyncComponent指定一个loader函数，结合ES模块动态导入函数import可以快速实现。我们甚至可以指定loadingComponent和errorComponent选项从而给用户一个很好的加载反馈。另外Vue3中还可以结合Suspense组件使用异步组件。
4. 异步组件容易和路由懒加载混淆，实际上不是一个东西。异步组件不能被用于定义懒加载路由上，处理它的是vue框架，处理路由组件加载的是vue-router。但是可以在懒加载的路由组件中使用异步组件。

---

### 知其所以然

defineAsyncComponent定义了一个高阶组件，返回一个包装组件。包装组件根据加载器的状态决定渲染什么内容。

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiAsyncComponent.ts#L43-L44

