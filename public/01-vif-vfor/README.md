## v-if和v-for哪个优先级更高？

分析：此题考查常识，文档中曾有[详细说明](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)；也是一个很好的实践题目，项目中经常会遇到，能够看出面试者应用能力。



思路分析：总分总模式

1. 先给出结论
2. 为什么是这样的
3. 它们能放一起吗
4. 如果不能，那应该怎样
5. 总结





回答范例：

1. v-for优先于v-if被解析

2. 我曾经做过实验，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件

3. 实践中也不应该把它们放一起，因为哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表。

4. 通常有两种情况下导致我们这样做：

   - 为了过滤列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。此时定义一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表即可。

   - 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。此时把 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)即可。

5. 文档中明确指出**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**，显然这是一个重要的注意事项。

6. 看过源码里面关于代码生成的部分，





知其所以然：

做个测试，[01.html](./01.html)
两者同级时，渲染函数如下：


```js
ƒ anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},_l((items),function(item){return (item.isActive)?_c('div',{key:item.id},[_v("\n      "+_s(item.name)+"\n    ")]):_e()}),0)}
}
```



源码中找答案compiler/codegen/index.js 

