## Vue2和Vue3中的响应式原理对比，分别的具体实现思路
此题非常好，既考察深度又考察广度，面试者要对两个版本的响应式原理都有深入理解才能答好。



### 答题思路：

1. 可以先说vue2响应式原理
2. 然后说出它的问题
3. 最后说出vue3是怎么解决的



### 回答范例：

1. vue2数据响应式实现根据对象类型做不同处理，如果是object，则通过`Object.defineProperty(obj,key,descriptor)`拦截对象属性访问

   ```js
   function defineReactive(obj, key, val) {
     Object.defineProperty(obj, key, {
       get() {
         return val
       },
       set(v) {
         val = v
         notify()
       }
     })
   }
   ```

   如果是数组，则覆盖数组的7个变更方法实现变更通知

   ```js
   const arrayProto = Array.prototype
   const arrayMethods = Object.create(arrayProto)
   
   ;['push','pop','shift','unshift','splice','sort','reverse']
     .forEach(function (method) {
     const original = arrayProto[method]
     def(arrayMethods, method, function mutator (...args) {
       const result = original.apply(this, args)
       notify()
       return result
     })
   })
   ```

   

2. 可以看到vue2中有几个问题：

   - 初始化时需要遍历对象所有key，如果对象层级较深，性能不好
   - 通知更新过程需要维护大量dep实例和watcher实例，额外占用内存较多
   - 动态新增、删除对象属性无法拦截，只能用特定set/delete api代替
   - 不支持新的Map、Set等数据结构

   

3. vue3中为了解决以上问题，使用原生的Proxy代替：

   ```js
   function defineReactive(obj) {
     return new Proxy(obj, {
       get(target, key) {
         track(target, key)
         return Reflect.get(target, key)
       },
       set(target, key, val) {
         Reflect.set(target, key, val)
         trigger(target, key)
       },
       deleteProperty(target, key) {
         Reflect.deleteProperty(target, key)
         trigger(target, key)
       }
     })
   }
   ```

   可以同时支持object和array，动态属性增、删都可以拦截，新增数据结构均支持，对象嵌套属性运行时递归，用到才代理，也不需要维护特别多的依赖关系，性能取得很大进步。
