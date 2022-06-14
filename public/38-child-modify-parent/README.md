## 子组件可以直接改变父组件的数据么，说明原因

### 分析

这是一个实践知识点，组件化开发过程中有个单项数据流原则，不在子组件中修改父组件是个常识问题。

参考文档：https://staging.vuejs.org/guide/components/props.html#one-way-data-flow

---

### 思路

1. 讲讲单项数据流原则，表明为何不能这么做
2. 举几个常见场景的例子说说解决方案
3. 结合实践讲讲如果需要修改父组件状态应该如何做

---

### 回答范例

1. 所有的 prop 都使得其父子之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。另外，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器控制台中发出警告。
       const props = defineProps(['foo'])
       // ❌ 下面行为会被警告, props是只读的!
       props.foo = 'bar'

---

2. 实际开发过程中有两个场景会想要修改一个属性：
   - 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data，并将这个 prop 用作其初始值：
         const props = defineProps(['initialCounter'])
         const counter = ref(props.initialCounter)
   - 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
         const props = defineProps(['size'])
         // prop变化，计算属性自动更新
         const normalizedSize = computed(() => props.size.trim().toLowerCase())
3. 实践中如果确实想要改变父组件属性应该emit一个事件让父组件去做这个变更。注意虽然我们不能直接修改一个传入的对象或者数组类型的prop，但是我们还是能够直接改内嵌的对象或属性。
