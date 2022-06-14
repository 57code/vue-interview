## 19-从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织

综合实践类题目，考查实战能力。没有什么绝对的正确答案，把平时工作的重点有条理的描述一下即可。



### 思路

1. 构建项目，创建项目基本结构
2. 引入必要的插件：
3. 代码规范：prettier，eslint
4. 提交规范：husky，lint-staged
5. 其他常用：svg-loader，vueuse，nprogress
6. 常见目录结构

---

### 回答范例

1. 从0创建一个项目我大致会做以下事情：项目构建、引入必要插件、代码规范、提交规范、常用库和组件

2. 目前vue3项目我会用vite或者create-vue创建项目

3. 接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios

4. 其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader

5. 下面是代码规范：结合prettier和eslint即可

6. 最后是提交规范，可以使用husky，lint-staged，commitlint

---

7. 目录结构我有如下习惯：
   `.vscode`：用来放项目中的 vscode 配置

   `plugins`：用来放 vite 插件的 plugin 配置

   `public`：用来放一些诸如 页头icon 之类的公共文件，会被打包到dist根目录下

   `src`：用来放项目代码文件

   `api`：用来放http的一些接口配置

   `assets`：用来放一些 CSS 之类的静态资源

   `components`：用来放项目通用组件

   `layout`：用来放项目的布局

   `router`：用来放项目的路由配置

   `store`：用来放状态管理Pinia的配置

   `utils`：用来放项目中的工具方法类

   `views`：用来放项目的页面文件

