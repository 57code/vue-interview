## v-if和v-for哪个优先级更高？

### 分析：
此题考查常识，文档中曾有详细说明[v2](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)|[v3](https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)；也是一个很好的实践题目，项目中经常会遇到，能够看出面试者应用能力。



### 思路分析：总分总模式

1. 先给出结论
2. 为什么是这样的
3. 它们能放一起吗
4. 如果不能，那应该怎样
5. 总结

### 回答范例：

1. 在 `Vue 2` 中，`v-for` 优先于 `v-if` 被解析；但在 `Vue 3` 中，则完全相反，`v-if` 的优先级高于 `v-for`。

2. 我曾经做过实验，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件

3. 实践中也不应该把它们放一起，因为哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表。

4. 通常有两种情况下导致我们这样做：

   - 为了过滤列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。此时定义一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表即可。

   - 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。此时把 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)即可。

5. 文档中明确指出**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**，显然这是一个重要的注意事项。

6. 看过源码里面关于代码生成的部分，


### 知其所以然：

在 `Vue 2` 中做个测试，[test.html](./test.html)
两者同级时，渲染函数如下：


```js
ƒ anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},_l((items),function(item){return (item.isActive)?_c('div',{key:item.id},[_v("\n      "+_s(item.name)+"\n    ")]):_e()}),0)}
}
```

在 `Vue 3` 中做个测试，[test-v3.html](./test-v3.html)
两者同级时，渲染函数如下：

```js
(function anonymous(
) {
const _Vue = Vue

return function render(_ctx, _cache) {
  with (_ctx) {
    const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createCommentVNode: _createCommentVNode } = _Vue

    return shouldShowUsers
      ? (_openBlock(true), _createElementBlock(_Fragment, { key: 0 }, _renderList(items, (item) => {
          return (_openBlock(), _createElementBlock("div", { key: item.id }, _toDisplayString(item.name), 1 /* TEXT */))
        }), 128 /* KEYED_FRAGMENT */))
      : _createCommentVNode("v-if", true)
  }
}
})
```


源码中找答案：
`Vue 2`：[compiler/codegen/index.js](https://github1s.com/vuejs/vue/blob/dev/src/compiler/codegen/index.js#L65-L69)
`Vue 3`：[compiler-core/src/codegen.ts](https://github1s.com/vuejs/core/blob/main/packages/compiler-core/src/codegen.ts#L586-L587)

