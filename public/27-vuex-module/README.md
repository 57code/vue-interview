## 27-你有使用过vuex的module吗？

这是基本应用能力考察，稍微上点规模的项目都要拆分vuex模块便于维护。

---

### 体验

https://vuex.vuejs.org/zh/guide/modules.html

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}
const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
store.getters.c // -> moduleA里的getters
store.commit('d') // -> 能同时触发子模块中同名mutation
store.dispatch('e') // -> 能同时触发子模块中同名action
```

---

### 思路

1. 概念和必要性
2. 怎么拆
3. 使用细节
4. 优缺点

---

### 范例

1. 用过module，项目规模变大之后，单独一个store对象会过于庞大臃肿，通过模块方式可以拆分开来便于维护
2. 可以按之前规则单独编写子模块代码，然后在主文件中通过`modules`选项组织起来：`createStore({modules:{...}})`
3. 不过使用时要注意访问子模块状态时需要加上注册时模块名：`store.state.a.xxx`，但同时`getters`、`mutations`和`actions`又在全局空间中，使用方式和之前一样。如果要做到完全拆分，需要在子模块加上`namespace`选项，此时再访问它们就要加上命名空间前缀。
4. 很显然，模块的方式可以拆分代码，但是缺点也很明显，就是使用起来比较繁琐复杂，容易出错。而且类型系统支持很差，不能给我们带来帮助。pinia显然在这方面有了很大改进，是时候切换过去了。

---

### 可能的追问

1. 用过pinia吗？都做了哪些改善？
