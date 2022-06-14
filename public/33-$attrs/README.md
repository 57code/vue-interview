## 33-说下\$attrs和$listeners的使用场景

### 分析

API考察，但\$attrs和$listeners是比较少用的边界知识，而且vue3有变化，$listeners已经移除，还是有细节可说的。

---

### 思路

1. 这两个api的作用
2. 使用场景分析
3. 使用方式和细节
4. vue3变化

---

### 体验

一个包含组件透传属性的对象。

> An object that contains the component's fallthrough attributes.

```vue
<template>
	<child-component v-bind="$attrs">
        将非属性特性透传给内部的子组件
    </child-component>
</template>
```

---

### 范例

1. 我们可能会有一些属性和事件没有在props中定义，这类称为非属性特性，结合v-bind指令可以直接透传给内部的子组件。
2. 这类“属性透传”常常用于包装高阶组件时往内部传递属性，常用于爷孙组件之间传参。比如我在扩展A组件时创建了组件B组件，然后在C组件中使用B，此时传递给C的属性中只有props里面声明的属性是给B使用的，其他的都是A需要的，此时就可以利用v-bind="$attrs"透传下去。
3. 最常见用法是结合v-bind做展开；$attrs本身不是响应式的，除非访问的属性本身是响应式对象。
4. vue2中使用$listeners获取事件，vue3中已移除，均合并到$attrs中，使用起来更简单了。

---

### 原理

查看透传属性foo和普通属性bar，发现vnode结构完全相同，这说明vue3中将分辨两者工作由框架完成而非用户指定：

```vue
<template>
  <h1>{{ msg }}</h1>
  <comp foo="foo" bar="bar" />
</template>
```

```vue
<template>
  <div>
    {{$attrs.foo}} {{bar}}
  </div>
</template>
<script setup>
defineProps({
  bar: String
})
</script>
```

```js
_createVNode(Comp, {
    foo: "foo",
    bar: "bar"
})
```

---

https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBDb21wIGZyb20gJy4vQ29tcC52dWUnXG5jb25zdCBtc2cgPSByZWYoJ0hlbGxvIFdvcmxkIScpXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aDE+e3sgbXNnIH19PC9oMT5cbiAgPGNvbXAgZm9vPVwiZm9vXCIgYmFyPVwiYmFyXCIgLz5cbjwvdGVtcGxhdGU+IiwiaW1wb3J0LW1hcC5qc29uIjoie1xuICBcImltcG9ydHNcIjoge1xuICAgIFwidnVlXCI6IFwiaHR0cHM6Ly9zZmMudnVlanMub3JnL3Z1ZS5ydW50aW1lLmVzbS1icm93c2VyLmpzXCJcbiAgfVxufSIsIkNvbXAudnVlIjoiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuICAgIHt7JGF0dHJzLmZvb319IHt7YmFyfX1cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cD5cbmRlZmluZVByb3BzKHtcbiAgYmFyOiBTdHJpbmdcbn0pXG48L3NjcmlwdD4ifQ==