## 怎么缓存当前的组件？缓存后怎么更新？

缓存组件使用keep-alive组件，这是一个非常常见且有用的优化手段，vue3中keep-alive有比较大的更新，能说的点比较多。


### 思路

1. 缓存用keep-alive，它的作用与用法
2. 使用细节，例如缓存指定/排除、结合router和transition
3. 组件缓存后更新可以利用activated或者beforeRouteEnter
4. 原理阐述

---

### 回答范例

1. 开发中缓存组件使用keep-alive组件，keep-alive是vue内置组件，keep-alive包裹动态组件component时，会缓存不活动的组件实例，而不是销毁它们，这样在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

   ```vue
   <keep-alive>
     <component :is="view"></component>
   </keep-alive>
   ```

2. 结合属性include和exclude可以明确指定缓存哪些组件或排除缓存指定组件。vue3中结合vue-router时变化较大，之前是`keep-alive`包裹`router-view`，现在需要反过来用`router-view`包裹`keep-alive`：

   ```vue
   <router-view v-slot="{ Component }">
     <keep-alive>
       <component :is="Component"></component>
     </keep-alive>
   </router-view>
   ```

---

3. 缓存后如果要获取数据，解决方案可以有以下两种：

   - beforeRouteEnter：在有vue-router的项目，每次进入路由的时候，都会执行`beforeRouteEnter`

     ```js
     beforeRouteEnter(to, from, next){
       next(vm=>{
         console.log(vm)
         // 每次进入路由执行
         vm.getData()  // 获取数据
       })
     },
     ```

   - actived：在`keep-alive`缓存的组件被激活的时候，都会执行`actived`钩子

     ```js
     activated(){
     	  this.getData() // 获取数据
     },
     ```

---

4. keep-alive是一个通用组件，它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode，如果该组件在map中存在就直接返回它。由于component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。

   

---


### 知其所以然

KeepAlive定义

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L73-L74

缓存定义

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L102-L103

缓存组件

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L215-L216

获取缓存组件

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L241-L242



测试缓存特性，test-v3.html