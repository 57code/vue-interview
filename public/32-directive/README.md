## 32-你写过自定义指令吗？使用场景有哪些？

### 分析

这是一道API题，我们可能写的自定义指令少，但是我们用的多呀，多举几个例子就行。

---

### 体验

定义一个包含类似组件生命周期钩子的对象，钩子函数会接收指令挂钩的dom元素：

```js
const focus = {
  mounted: (el) => el.focus()
}

export default {
  directives: {
    // enables v-focus in template
    focus
  }
}
<input v-focus />
```

```html
<input v-focus />
```

---

### 思路

1. 定义
2. 何时用
3. 如何用
4. 常用指令
5. vue3变化

---

### 回答范例

1. Vue有一组默认指令，比如`v-mode`l或`v-for`，同时Vue也允许用户注册自定义指令来扩展Vue能力
2. 自定义指令主要完成一些可复用低层级DOM操作
3. 使用自定义指令分为定义、注册和使用三步：
   - 定义自定义指令有两种方式：对象和函数形式，前者类似组件定义，有各种生命周期；后者只会在mounted和updated时执行
   - 注册自定义指令类似组件，可以使用app.directive()全局注册，使用{directives:{xxx}}局部注册
   - 使用时在注册名称前加上v-即可，比如v-focus
4. 我在项目中常用到一些自定义指令，例如：
   - 复制粘贴 v-copy
   - 长按 v-longpress
   - 防抖 v-debounce
   - 图片懒加载 v-lazy
   - 按钮权限 v-premission
   - 页面水印 v-waterMarker
   - 拖拽指令 v-draggable
5. vue3中指令定义发生了比较大的变化，主要是钩子的名称保持和组件一致，这样开发人员容易记忆，不易犯错。另外在v3.2之后，可以在setup中以一个小写v开头方便的定义自定义指令，更简单了！

---

### 知其所以然

编译后的自定义指令会被withDirective函数装饰，进一步处理生成的vnode，添加到特定属性中。

https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcblxuY29uc3QgbXNnID0gcmVmKCdIZWxsbyBXb3JsZCEnKVxuXG5jb25zdCB2Rm9jdXMgPSB7XG4gIG1vdW50ZWQoZWwpIHtcbiAgICAvLyDojrflj5ZpbnB1dO+8jOW5tuiwg+eUqOWFtmZvY3VzKCnmlrnms5VcbiAgICBlbC5mb2N1cygpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxoMT57eyBtc2cgfX08L2gxPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiIHYtZm9jdXM+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==