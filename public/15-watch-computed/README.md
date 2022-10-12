## watch和computed的区别以及选择?

两个重要API，反应应聘者熟练程度。



### 思路分析

1. 先看两者定义，列举使用上的差异
2. 列举使用场景上的差异，如何选择
3. 使用细节、注意事项
4. vue3变化



### 回答范例

1. 计算属性可以**从组件数据派生出新数据**，最常见的使用方式是设置一个函数，返回计算之后的结果，computed和methods的差异是它具备缓存性，如果依赖项不变时不会重新计算。侦听器**可以侦测某个响应式数据的变化并执行副作用**，常见用法是传递一个函数，执行副作用，watch没有返回值，但可以执行异步操作等复杂逻辑。
2. 计算属性常用场景是简化行内模板中的复杂表达式，模板中出现太多逻辑会使模板变得臃肿不易维护。侦听器常用场景是状态变化之后做一些额外的DOM操作或者异步操作。选择采用何用方案时首先看是否需要派生出新值，基本能用计算属性实现的方式首选计算属性。
3. 使用过程中有一些细节，比如计算属性也是可以传递对象，成为既可读又可写的计算属性。watch可以传递对象，设置deep、immediate等选项。
4. vue3中watch选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式； reactivity API中新出现了watch、watchEffect可以完全替代目前的watch选项，且功能更加强大。



### 可能追问

1. watch会不会立即执行？
2. watch 和 watchEffect有什么差异



### 知其所以然

computed的实现

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L79-L80



ComputedRefImpl

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L26-L27



缓存性

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L59-L60

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L45-L46
