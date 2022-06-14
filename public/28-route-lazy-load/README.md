## 28-怎么实现路由懒加载呢？

### 分析

这是一道应用题。当打包应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应组件，这样就会更加高效。

```js
// 将
// import UserDetails from './views/UserDetails'
// 替换为
const UserDetails = () => import('./views/UserDetails')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: UserDetails }],
})
```

参考https://router.vuejs.org/zh/guide/advanced/lazy-loading.html

---

### 思路

1. 必要性
2. 何时用
3. 怎么用
4. 使用细节


---

### 回答范例

1. 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。利用路由懒加载我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样会更加高效，是一种优化手段。

2. 一般来说，对所有的路由**都使用动态导入**是个好主意。

3. 给`component`选项配置一个返回 Promise 组件的函数就可以定义懒加载路由。例如：

   `{ path: '/users/:id', component: () => import('./views/UserDetails') }`

4. 结合注释`() =>
   import(/* webpackChunkName: "group-user" */ './UserDetails.vue')`可以做webpack代码分块
   
   vite中结合[rollupOptions](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E4%BD%BF%E7%94%A8-vite)定义分块
   
5. 路由中不能使用异步组件

---

### 知其所以然

`component` (和 `components`) 配置如果接收一个返回 Promise 组件的函数，Vue Router **只会在第一次进入页面时才会获取这个函数**，然后使用缓存数据。

https://github1s.com/vuejs/router/blob/HEAD/src/navigationGuards.ts#L292-L293
