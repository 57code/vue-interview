## Vue实例挂载的过程中发生了什么?

### 分析

挂载过程完成了最重要的两件事：

1. 初始化
2. 建立更新机制

把这两件事说清楚即可！

---

### 回答范例

1. 挂载过程指的是app.mount()过程，这个是个初始化过程，整体上做了两件事：**初始化**和**建立更新机制**
2. 初始化会**创建组件实例**、**初始化组件状态**、**创建各种响应式数据**
3. 建立更新机制这一步会立即执行一次组件更新函数，这会首次执行组件渲染函数并执行patch将前面获得vnode转换为dom；同时首次执行渲染函数会创建它内部响应式数据和组件更新函数之间的依赖关系，这使得以后数据变化时会执行对应的更新函数。

---

### 知其所以然

测试代码，test-v3.html



mount函数定义

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiCreateApp.ts#L277-L278

首次render过程

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/renderer.ts#L2303-L2304

---

### 可能的追问

1. 响应式数据怎么创建
2. 依赖关系如何建立

