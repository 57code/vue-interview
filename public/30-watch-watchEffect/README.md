## 30-watch和watchEffect异同

我们经常性需要侦测响应式数据的变化，vue3中除了watch之外又出现了watchEffect，不少同学会混淆这两个api。

---

### 体验

`watchEffect`立即运行一个函数，然后被动地追踪它的依赖，当这些依赖改变时重新执行该函数。

> Runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies are changed.

```js
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

count.value++
// -> logs 1
```

---

`watch`侦测一个或多个响应式数据源并在数据源变化时调用一个回调函数。

> Watches one or more reactive data sources and invokes a callback function when the sources change.

```js
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
```

---

### 思路

1. 给出两者定义
2. 给出场景上的不同
3. 给出使用方式和细节
4. 原理阐述

---

### 范例

1. `watchEffect`立即运行一个函数，然后被动地追踪它的依赖，当这些依赖改变时重新执行该函数。`watch`侦测一个或多个响应式数据源并在数据源变化时调用一个回调函数。

2. `watchEffect(effect)`是一种特殊`watch`，传入的函数既是依赖收集的数据源，也是回调函数。如果我们不关心响应式数据变化前后的值，只是想拿这些数据做些事情，那么`watchEffect`就是我们需要的。watch更底层，可以接收多种数据源，包括用于依赖收集的getter函数，因此它完全可以实现watchEffect的功能，同时由于可以指定getter函数，依赖可以控制的更精确，还能获取数据变化前后的值，因此如果需要这些时我们会使用watch。
3. `watchEffect`在使用时，传入的函数会立刻执行一次。`watch`默认情况下并不会执行回调函数，除非我们手动设置`immediate`选项。
4. 从实现上来说，`watchEffect(fn)`相当于`watch(fn,fn,{immediate:true})`

---

### 知其所以然

`watchEffect`定义：https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiWatch.ts#L80-L81

```js
export function watchEffect(
  effect: WatchEffect,
  options?: WatchOptionsBase
): WatchStopHandle {
  return doWatch(effect, null, options)
}
```


---

`watch`定义如下：https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiWatch.ts#L158-L159

```js
export function watch<T = any, Immediate extends Readonly<boolean> = false>(
  source: T | WatchSource<T>,
  cb: any,
  options?: WatchOptions<Immediate>
): WatchStopHandle {
  return doWatch(source as any, cb, options)
}
```

很明显`watchEffect`就是一种特殊的`watch`实现。