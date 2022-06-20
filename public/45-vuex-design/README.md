## 如果让你从零开始写一个vuex，说说你的思路

### 思路分析

这个题目很有难度，首先思考`vuex`解决的问题：存储用户全局状态并提供管理状态API。

- `vuex`需求分析
- 如何实现这些需求


---

### 回答范例

1. 官方说`vuex`是一个状态管理模式和库，并确保这些状态以可预期的方式变更。可见要实现一个`vuex`：

   - 要实现一个`Store`存储全局状态
   - 要提供修改状态所需API：`commit(type, payload)`, `dispatch(type, payload)`

2. 实现`Store`时，可以定义Store类，构造函数接收选项options，设置属性state对外暴露状态，提供commit和dispatch修改属性state。这里需要设置state为响应式对象，同时将Store定义为一个Vue插件。

3. `commit(type, payload)`方法中可以获取用户传入`mutations`并执行它，这样可以按用户提供的方法修改状态。 `dispatch(type, payload)`类似，但需要注意它可能是异步的，需要返回一个Promise给用户以处理异步结果。

   


---

### 实践

Store的实现：

```js
class Store {
    constructor(options) {
        this.state = reactive(options.state)
        this.options = options
    }
    commit(type, payload) {
        this.options.mutations[type].call(this, this.state, payload)
    }
}
```



### 知其所以然

Vuex中Store的实现：

https://github1s.com/vuejs/vuex/blob/HEAD/src/store.js#L19-L20