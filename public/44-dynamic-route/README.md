## 12 - 怎么定义动态路由？怎么获取传过来的动态参数？

### 分析

API题目，考查基础能力，不容有失，尽可能说的详细。


### 思路

1. 什么是动态路由
2. 什么时候使用动态路由，怎么定义动态路由
3. 参数如何获取
4. 细节、注意事项

---

### 回答范例

1. 很多时候，我们需要**将给定匹配模式的路由映射到同一个组件**，这种情况就需要定义动态路由。
2. 例如，我们可能有一个 `User` 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，例如：`{ path: '/users/:id', component: User }`，其中`:id`就是路径参数
3. *路径参数* 用冒号 `:` 表示。当一个路由被匹配时，它的 *params* 的值将在每个组件中以 `this.$route.params` 的形式暴露出来。
4. 参数还可以有多个，例如`/users/:username/posts/:postId`；除了 `$route.params` 之外，`$route` 对象还公开了其他有用的信息，如 `$route.query`、`$route.hash` 等。

---

### 可能的追问

1. 如何响应动态路由参数的变化

https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96

2. 我们如何处理404 Not Found路由

https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1