## 你知道哪些vue3新特性

### 分析

官网列举的最值得注意的新特性：https://v3-migration.vuejs.org/

![image-20220210165307624](https://tva1.sinaimg.cn/large/e6c9d24ely1h0wjzxntraj21a60f2q4z.jpg)

---

也就是下面这些：

- Composition API
- SFC Composition API语法糖
- Teleport传送门
- Fragments片段
- Emits选项
- 自定义渲染器
- SFC CSS变量
- Suspense

以上这些是api相关，另外还有很多框架特性也不能落掉。

---

### 回答范例

1. api层面Vue3新特性主要包括：Composition API、SFC Composition API语法糖、Teleport传送门、Fragments 片段、Emits选项、自定义渲染器、SFC CSS变量、Suspense

2. 另外，Vue3.0在框架层面也有很多亮眼的改进：

- 更快
  - 虚拟DOM重写
  - 编译器优化：静态提升、patchFlags、block等
  - 基于Proxy的响应式系统
- 更小：更好的摇树优化
- 更容易维护：TypeScript + 模块化
- 更容易扩展
  - 独立的响应化模块
  - 自定义渲染器

---

### 知其所以然

体验编译器优化

https://sfc.vuejs.org/



reactive实现

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/reactive.ts#L90-L91