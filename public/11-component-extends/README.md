## 你如果想要扩展某个Vue组件时会怎么做？

此题属于实践题，着重考察大家对vue常用api使用熟练度，答题时不仅要列出这些解决方案，同时最好说出他们异同。



### 答题思路：

按照逻辑扩展和内容扩展来列举，逻辑扩展有：mixins、extends、composition api；内容扩展有slots；

分别说出他们使用方法、场景差异和问题。

作为扩展，还可以说说vue3中新引入的composition api带来的变化



### 回答范例：

1. 常见的组件扩展方法有：mixins，slots，extends等

2. 混入mixins是分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

   ```js
   // 复用代码：它是一个配置对象，选项和组件里面一样
   const mymixin = {
   	methods: {
   		dosomething(){}
   	}
   }
   // 全局混入：将混入对象传入
   Vue.mixin(mymixin)
   
   // 局部混入：做数组项设置到mixins选项，仅作用于当前组件
   const Comp = {
   	mixins: [mymixin]
   }
   ```

3. 插槽主要用于vue组件中的内容分发，也可以用于组件扩展。

   子组件Child

   ```html
   <div>
     <slot>这个内容会被父组件传递的内容替换</slot>
   </div>
   ```

   父组件Parent

   ```html
   <div>
   	<Child>来自老爹的内容</Child>
   </div>
   ```

   如果要精确分发到不同位置可以使用具名插槽，如果要使用子组件中的数据可以使用作用域插槽。

4. 组件选项中还有一个不太常用的选项extends，也可以起到扩展组件的目的

   ```js
   // 扩展对象
   const myextends = {
   	methods: {
   		dosomething(){}
   	}
   }
   // 组件扩展：做数组项设置到extends选项，仅作用于当前组件
   // 跟混入的不同是它只能扩展单个对象
   // 另外如果和混入发生冲突，该选项优先级较高，优先起作用
   const Comp = {
   	extends: myextends
   }
   ```

5. 混入的数据和方法不能明确判断来源且可能和当前组件内变量产生命名冲突，vue3中引入的composition api，可以很好解决这些问题，利用独立出来的响应式模块可以很方便的编写独立逻辑并提供响应式的数据，然后在setup选项中有机组合使用。例如：

   ```js
   // 复用逻辑1
   function useXX() {}
   // 复用逻辑2
   function useYY() {}
   // 逻辑组合
   const Comp = {
   	setup() {
   		const {xx} = useXX()
   		const {yy} = useYY()
   		return {xx, yy}
   	}
   }
   ```

   

### 可能的追问

Vue.extend方法你用过吗？它能用来做组件扩展吗？