## Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？

### 分析

综合实践题目，实际开发中经常需要面临权限管理的需求，考查实际应用能力。

权限管理一般需求是两个：页面权限和按钮权限，从这两个方面论述即可。

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h0wjzib4x1j217k0so76x.jpg" style="zoom: 0.3; margin: auto">


---

### 思路

1. 权限管理需求分析：页面和按钮权限
2. 权限管理的实现方案：分后端方案和前端方案阐述
3. 说说各自的优缺点

---

### 回答范例

1. 权限管理一般需求是**页面权限**和**按钮权限**的管理

2. 具体实现的时候分后端和前端两种方案：

   前端方案会**把所有路由信息在前端配置**，通过路由守卫要求用户登录，用户**登录后根据角色过滤出路由表**。比如我会配置一个`asyncRoutes`数组，需要认证的页面在其路由的`meta`中添加一个`roles`字段，等获取用户角色之后取两者的交集，若结果不为空则说明可以访问。此过滤过程结束，剩下的路由就是该用户能访问的页面，**最后通过`router.addRoutes(accessRoutes)`方式动态添加路由**即可。

   后端方案会**把所有页面路由信息存在数据库**中，用户登录的时候根据其角色**查询得到其能访问的所有页面路由信息**返回给前端，前端**再通过`addRoutes`动态添加路由**信息

   按钮权限的控制通常会**实现一个指令**，例如`v-permission`，**将按钮要求角色通过值传给v-permission指令**，在指令的`moutned`钩子中可以**判断当前用户角色和按钮是否存在交集**，有则保留按钮，无则移除按钮。

3. 纯前端方案的优点是实现简单，不需要额外权限管理页面，但是维护起来问题比较大，有新的页面和角色需求就要修改前端代码重新打包部署；服务端方案就不存在这个问题，通过专门的角色和权限管理页面，配置页面和按钮权限信息到数据库，应用每次登陆时获取的都是最新的路由信息，可谓一劳永逸！

---

### 知其所以然

路由守卫

https://github1s.com/PanJiaChen/vue-element-admin/blob/HEAD/src/permission.js#L13-L14

路由生成

https://github1s.com/PanJiaChen/vue-element-admin/blob/HEAD/src/store/modules/permission.js#L50-L51

动态追加路由

https://github1s.com/PanJiaChen/vue-element-admin/blob/HEAD/src/permission.js#L43-L44

---

### 可能的追问

1. 类似`Tabs`这类组件能不能使用`v-permission`指令实现按钮权限控制？

   ```html
   <el-tabs> 
     <el-tab-pane label="⽤户管理" name="first">⽤户管理</el-tab-pane> 
   	<el-tab-pane label="⻆⾊管理" name="third">⻆⾊管理</el-tab-pane>
   </el-tabs>
   ```

---

2. 服务端返回的路由信息如何添加到路由器中？

   ```js
   // 前端组件名和组件映射表
   const map = {
     //xx: require('@/views/xx.vue').default // 同步的⽅式
     xx: () => import('@/views/xx.vue') // 异步的⽅式
   }
   // 服务端返回的asyncRoutes
   const asyncRoutes = [
     { path: '/xx', component: 'xx',... }
   ]
   // 遍历asyncRoutes，将component替换为map[component]
   function mapComponent(asyncRoutes) {
     asyncRoutes.forEach(route => {
       route.component = map[route.component];
       if(route.children) {
         route.children.map(child => mapComponent(child))
       }
   	})
   }
   mapComponent(asyncRoutes)
   ```
