## 如果让你从零开始写一个vue路由，说说你的思路

### 思路分析：

首先思考vue路由要解决的问题：用户点击跳转链接内容切换，页面不刷新。

- 借助hash或者history api实现url跳转页面不刷新
- 同时监听hashchange事件或者popstate事件处理跳转
- 根据hash值或者state值从routes表中匹配对应component并渲染之


---

### 回答范例：

一个SPA应用的路由需要解决的问题是**页面跳转内容改变同时不刷新**，同时路由还需要以插件形式存在，所以：

1. 首先我会定义一个`createRouter`函数，返回路由器实例，实例内部做几件事：
   - 保存用户传入的配置项
   - 监听hash或者popstate事件
   - 回调里根据path匹配对应路由
2. 将router定义成一个Vue插件，即实现install方法，内部做两件事：
   - 实现两个全局组件：router-link和router-view，分别实现页面跳转和内容显示
   - 定义两个全局变量：\$route和$router，组件内可以访问当前路由和路由器实例


---

### 知其所以然：

- createRouter如何创建实例

https://github1s.com/vuejs/router/blob/HEAD/src/router.ts#L355-L356

- 事件监听

https://github1s.com/vuejs/router/blob/HEAD/src/history/html5.ts#L314-L315
RouterView

- 页面跳转RouterLink

https://github1s.com/vuejs/router/blob/HEAD/src/RouterLink.ts#L184-L185

- 内容显示RouterView

https://github1s.com/vuejs/router/blob/HEAD/src/RouterView.ts#L43-L44