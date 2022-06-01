## 说一下 Vue 子组件和父组件创建和挂载顺序

这题考查大家对创建过程的理解程度。



### 思路分析

1. 给结论
2. 阐述理由

---

### 回答范例

1. 创建过程自上而下，挂载过程自下而上；即：
   - parent created
   - child created
   - child mounted
   - parent mounted
2. 之所以会这样是因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件；子组件首次创建时会添加mounted钩子到队列，等到patch结束再执行它们，可见子组件的mounted钩子是先进入到队列中的，因此等到patch结束执行这些钩子时也先执行。


---

### 知其所以然

观察beforeCreated和created钩子的处理

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L554-L555

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L741-L742

观察beforeMount和mounted钩子的处理

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/renderer.ts#L1310-L1311



测试代码，[test-v3.html](test-v3.html)

