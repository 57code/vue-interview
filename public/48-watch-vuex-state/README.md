## 41-怎么监听vuex数据的变化？

### 分析

vuex数据状态是响应式的，所以状态变视图跟着变，但是有时还是需要知道数据状态变了从而做一些事情。

既然状态都是响应式的，那自然可以`watch`，另外vuex也提供了订阅的API：`store.subscribe()`。

---

### 思路

- 总述知道的方法

- 分别阐述用法

- 选择和场景

  

---

### 回答范例

- 我知道几种方法：

  - 可以通过watch选项或者watch方法监听状态
  - 可以使用vuex提供的API：store.subscribe()

- watch选项方式，可以以字符串形式监听`$store.state.xx`；subscribe方式，可以调用store.subscribe(cb),回调函数接收mutation对象和state对象，这样可以进一步判断mutation.type是否是期待的那个，从而进一步做后续处理。

- watch方式简单好用，且能获取变化前后值，首选；subscribe方法会被所有commit行为触发，因此还需要判断mutation.type，用起来略繁琐，一般用于vuex插件中。

  

### 实践

watch方式

```js
const app = createApp({
    watch: {
      '$store.state.counter'() {
        console.log('counter change!');
      }
    }
  })
```

subscribe方式：

```js
  store.subscribe((mutation, state) => {
    if (mutation.type === 'add') {
      console.log('counter change in subscribe()!');
    }
  })
```
