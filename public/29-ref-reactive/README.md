## 29-ref和reactive异同

这是`Vue3`数据响应式中非常重要的两个概念，自然的，跟我们写代码关系也很大。

---

### 体验

ref：https://vuejs.org/api/reactivity-core.html#ref

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```


---

reactive：https://vuejs.org/api/reactivity-core.html#reactive

```js
const obj = reactive({ count: 0 })
obj.count++
```

---

### 回答思路

1. 两者概念
2. 两者使用场景
3. 两者异同
4. 使用细节
5. 原理

---

### 回答范例

1. `ref`接收内部值（inner value）返回响应式`Ref`对象，`reactive`返回响应式代理对象
2. 从定义上看`ref`通常用于处理单值的响应式，`reactive`用于处理对象类型的数据响应式
3. 两者均是用于构造响应式数据，但是`ref`主要解决原始值的响应式问题
4. ref返回的响应式数据在JS中使用需要加上`.value`才能访问其值，在视图中使用会自动脱ref，不需要`.value`；ref可以接收对象或数组等非原始值，但内部依然是`reactive`实现响应式；reactive内部如果接收Ref对象会自动脱ref；使用展开运算符(...)展开reactive返回的响应式对象会使其失去响应性，可以结合toRefs()将值转换为Ref对象之后再展开。
5. reactive内部使用Proxy代理传入对象并拦截该对象各种操作（trap），从而实现响应式。ref内部封装一个RefImpl类，并设置get value/set value，拦截用户对值的访问，从而实现响应式。

---

### 知其所以然

reactive实现响应式：

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/reactive.ts#L90-L91

ref实现响应式：

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/ref.ts#L73-L74