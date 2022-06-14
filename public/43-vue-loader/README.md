## vue-loader是什么？它有什么作用？
### 分析

这是一道工具类的原理题目，相当有深度，具有不错的人才区分度。

### 体验

使用官方提供的SFC playground可以很好的体验vue-loader。

有了vue-loader加持，我们才可以以SFC的方式快速编写代码。

[https://sfc.vuejs.org](https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgbXNnID0gcmVmKCdIZWxsbyBXb3JsZCEnKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE+XG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCI+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==)

```TypeScript
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!',
    }
  },
}
</script>

<style>
.example {
  color: red;
}
</style>
```

### 思路

- `vue-loader`是什么东东
- `vue-loader`是做什么用的
- `vue-loader`何时生效
- `vue-loader`如何工作

### 回答范例

1. `vue-loader`是用于处理单文件组件（SFC，Single-File Component）的webpack loader
2. 因为有了`vue-loader`，我们就可以在项目中编写SFC格式的Vue组件，我们可以把代码分割为<template>、<script>和<style>，代码会异常清晰。结合其他loader我们还可以用Pug编写<template>，用SASS编写<style>，用TS编写<script>。我们的<style>还可以单独作用当前组件。
3. webpack打包时，会以loader的方式调用vue-loader
4. vue-loader被执行时，它会对SFC中的每个语言块用单独的loader链处理。最后将这些单独的块装配成最终的组件模块。

### 知其所以然

1. `vue-loader`会调用`@vue/compiler-sfc`模块解析SFC源码为一个描述符（Descriptor），然后为每个语言块生成import代码，返回的代码类似下面：

```TypeScript
// source.vue被vue-loader处理之后返回的代码

// import the <template> block
import render from 'source.vue?vue&type=template'
// import the <script> block
import script from 'source.vue?vue&type=script'
export * from 'source.vue?vue&type=script'
// import <style> blocks
import 'source.vue?vue&type=style&index=1'

script.render = render
export default script
```

1. 我们想要script块中的内容被作为js处理（当然如果是`<script lang="ts">`被作为ts处理），这样我们想要webpack把配置中跟.js匹配的规则都应用到形如`source.vue?vue&type=script`的这个请求上。例如我们对所有*.js配置了babel-loader，这个规则将被克隆并应用到所在Vue SFC的<script>块上。内部的请求比如：

```TypeScript
import script from 'source.vue?vue&type=script'
```

将被展开为：

```TypeScript
import script from 'babel-loader!vue-loader!source.vue?vue&type=script'
```

类似的，如果我们对.sass文件配置了style-loader + css-loader + sass-loader，下面的代码：

```TypeScript
<style scoped lang="scss">
```

vue-loader将会返回给我们下面请求：

```TypeScript
import 'source.vue?vue&type=style&index=1&scoped&lang=scss'
```

然后webpack会展开如下：

```TypeScript
import 'style-loader!css-loader!sass-loader!vue-loader!source.vue?vue&type=style&index=1&scoped&lang=scss'
```

1. 当处理展开请求时，vue-loader将被再次调用。这次，loader将会关注那些有查询串的请求，且仅针对特定块，它会选中特定块内部的内容并传递给后面匹配的loader。
2. 对于`<script>`块，处理到这就可以了，但是`<template>` 和 `<style>`还有一些额外任务要做，比如：

- 需要用Vue 模板编译器编译template，从而得到render函数
- 需要对`<style scoped>`中的CSS做后处理（post-process），该操作在css-loader之后但在style-loader之前

实现上这些附加的loader需要被注入到已经展开的loader链上，最终的请求会像下面这样：

```TypeScript
// <template lang="pug">
import 'vue-loader/template-loader!pug-loader!source.vue?vue&type=template'

// <style scoped lang="scss">
import 'style-loader!vue-loader/style-post-loader!css-loader!sass-loader!vue-loader!source.vue?vue&type=style&index=1&scoped&lang=scss'
```
