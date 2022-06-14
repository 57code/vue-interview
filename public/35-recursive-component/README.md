## 35-什么是递归组件？举个例子说明下？

### 分析

递归组件我们用的比较少，但是在Tree、Menu这类组件中会被用到。

---

### 体验

组件通过组件名称引用它自己，这种情况就是递归组件。

> An SFC can implicitly refer to itself via its filename.

```html
<template>
  <li>
    <div> {{ model.name }}</div>
    <ul v-show="isOpen" v-if="isFolder">
      <!-- 注意这里：组件递归渲染了它自己 -->
      <TreeItem
        class="item"
        v-for="model in model.children"
        :model="model">
      </TreeItem>
    </ul>
  </li>
<script>
export default {
  name: 'TreeItem',
  // ...
}
</script>
```

---

### 思路

- 下定义
- 使用场景
- 使用细节
- 原理阐述

---

### 回答范例

1. 如果某个组件通过组件名称引用它自己，这种情况就是递归组件。
2. 实际开发中类似Tree、Menu这类组件，它们的节点往往包含子节点，子节点结构和父节点往往是相同的。这类组件的数据往往也是树形结构，这种都是使用递归组件的典型场景。
3. 使用递归组件时，由于我们并未也不能在组件内部导入它自己，所以设置组件`name`属性，用来查找组件定义，如果使用SFC，则可以通过SFC文件名推断。组件内部通常也要有递归结束条件，比如model.children这样的判断。
4. 查看生成渲染函数可知，递归组件查找时会传递一个布尔值给`resolveComponent`，这样实际获取的组件就是当前组件本身。

---

### 知其所以然

递归组件编译结果中，获取组件时会传递一个标识符 `_resolveComponent("Comp", true)`

```js
const _component_Comp = _resolveComponent("Comp", true)
```

就是在传递`maybeSelfReference`

```js
export function resolveComponent(
  name: string,
  maybeSelfReference?: boolean
): ConcreteComponent | string {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name
}
```

resolveAsset中最终返回的是组件自身：

```js
if (!res && maybeSelfReference) {
    // fallback to implicit self-reference
    return Component
}
```

---

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/helpers/resolveAssets.ts#L22-L23

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/helpers/resolveAssets.ts#L110-L111

https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBjb21wIGZyb20gJy4vQ29tcC52dWUnXG5jb25zdCBtc2cgPSByZWYoJ+mAkuW9kue7hOS7ticpXG5jb25zdCBtb2RlbCA9IHtcbiAgbGFiZWw6ICdub2RlLTEnLFxuICBjaGlsZHJlbjogW1xuICAgIHtsYWJlbDogJ25vZGUtMS0xJ30sXG4gICAge2xhYmVsOiAnbm9kZS0xLTInfVxuICBdXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE+e3sgbXNnIH19PC9oMT5cbiAgPGNvbXAgOm1vZGVsPVwibW9kZWxcIj48L2NvbXA+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0iLCJDb21wLnZ1ZSI6Ijx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICB7e21vZGVsLmxhYmVsfX1cbiAgPC9kaXY+XG4gIDxDb21wIHYtZm9yPVwiaXRlbSBpbiBtb2RlbC5jaGlsZHJlblwiIDptb2RlbD1cIml0ZW1cIj48L0NvbXA+XG4gIDxjb21wMj48L2NvbXAyPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ29tcCcsXG4gICAgcHJvcHM6IHtcbiAgICAgIG1vZGVsOiBPYmplY3RcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGNvbXAyOiB7XG4gICAgICAgIHJlbmRlcigpe31cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJ9

