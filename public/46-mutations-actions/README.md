## vuex中actions和mutations有什么区别？

### 题目分析

`mutations`和`actions`是`vuex`带来的两个独特的概念。新手程序员容易混淆，所以面试官喜欢问。

我们只需记住修改状态只能是`mutations`，`actions`只能通过提交`mutation`修改状态即可。

---

### 体验

看下面例子可知，`Action` 类似于 `mutation`，不同在于：

- `Action` 提交的是 `mutation`，而不是直接变更状态。
- `Action` 可以包含任意异步操作。

```js
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```

---

### 答题思路

1. 给出两者概念说明区别
2. 举例说明应用场景
3. 使用细节不同
4. 简单阐述实现上差异

---

### 回答范例

1. 官方文档说：更改 Vuex 的 store 中的状态的唯一方法是提交 `mutation`，`mutation` 非常类似于事件：每个 `mutation` 都有一个字符串的**类型 (type)\**和一个\**回调函数 (handler)**。`Action` 类似于 `mutation`，不同在于：`Action`可以包含任意异步操作，但它不能修改状态， 需要提交`mutation`才能变更状态。
2. 因此，开发时，包含异步操作或者复杂业务组合时使用action；需要直接修改状态则提交mutation。但由于dispatch和commit是两个API，容易引起混淆，实践中也会采用统一使用dispatch action的方式。
3. 调用dispatch和commit两个API时几乎完全一样，但是定义两者时却不甚相同，mutation的回调函数接收参数是state对象。action则是与Store实例具有相同方法和属性的上下文context对象，因此一般会解构它为`{commit, dispatch, state}`，从而方便编码。另外dispatch会返回Promise实例便于处理内部异步结果。
4. 实现上commit(type)方法相当于调用`options.mutations[type](state)`；`dispatch(type)`方法相当于调用`options.actions[type](store)`，这样就很容易理解两者使用上的不同了。

---

### 知其所以然

我们可以像下面这样简单实现`commit`和`dispatch`，从而辨别两者不同：

```js
class Store {
    constructor(options) {
        this.state = reactive(options.state)
        this.options = options
    }
    commit(type, payload) {
        // 传入上下文和参数1都是state对象
        this.options.mutations[type].call(this.state, this.state, payload)
    }
    dispatch(type, payload) {
        // 传入上下文和参数1都是store本身
        this.options.actions[type].call(this, this, payload)
    }
}
```

