## 34-v-once的使用场景有哪些？

### 分析

`v-once`是Vue中内置指令，很有用的API，在优化方面经常会用到，不过小伙伴们平时可能容易忽略它。

### 体验

仅渲染元素和组件一次，并且跳过未来更新

> Render the element and component once only, and skip future updates.

```html
<!-- single element -->
<span v-once>This will never change: {{msg}}</span>
<!-- the element have children -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- component -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` directive -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```



### 思路

1. `v-once`是什么
2. 什么时候使用
3. 如何使用
4. 扩展`v-memo`
5. 探索原理



### 回答范例

1. `v-once`是vue的内置指令，作用是仅渲染指定组件或元素一次，并跳过未来对其更新。
2. 如果我们有一些元素或者组件在初始化渲染之后不再需要变化，这种情况下适合使用`v-once`，这样哪怕这些数据变化，vue也会跳过更新，是一种代码优化手段。
3. 我们只需要作用的组件或元素上加上v-once即可。
4. vue3.2之后，又增加了`v-memo`指令，可以有条件缓存部分模板并控制它们的更新，可以说控制力更强了。
5. 编译器发现元素上面有v-once时，会将首次计算结果存入缓存对象，组件再次渲染时就会从缓存获取，从而避免再次计算。



### 知其所以然

下面例子使用了v-once：

```html
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1 v-once>{{ msg }}</h1>
  <input v-model="msg">
</template>
```

我们发现v-once出现后，编译器会缓存作用元素或组件，从而避免以后更新时重新计算这一部分：

```js
// ...
return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    // 从缓存获取vnode
    _cache[0] || (
      _setBlockTracking(-1),
      _cache[0] = _createElementVNode("h1", null, [
        _createTextVNode(_toDisplayString(msg.value), 1 /* TEXT */)
      ]),
      _setBlockTracking(1),
      _cache[0]
    ),
// ...
```
