## 25-你了解哪些Vue性能优化方法？

### 分析

这是一道综合实践题目，写过一定数量的代码之后小伙伴们自然会开始关注一些优化方法，答得越多肯定实践经验也越丰富，是很好的题目。

### 答题思路：

根据题目描述，这里主要探讨Vue代码层面的优化

---

### 回答范例

- 我这里主要从Vue代码编写层面说一些优化手段，例如：代码分割、服务端渲染、组件缓存、长列表优化等

- 最常见的路由懒加载：有效拆分App尺寸，访问时才异步加载

  ```js
  const router = createRouter({
    routes: [
      // 借助webpack的import()实现异步组件
      { path: '/foo', component: () => import('./Foo.vue') }
    ]
  })
  ```


---

- `keep-alive`缓存页面：避免重复创建组件实例，且能保留缓存组件状态

  ```vue
  <router-view v-slot="{ Component }">
  	<keep-alive>
    	<component :is="Component"></component>
    </keep-alive>
  </router-view>
  ```


---

- 使用`v-show`复用DOM：避免重复创建组件

  ```vue
  <template>
    <div class="cell">
      <!-- 这种情况用v-show复用DOM，比v-if效果好 -->
      <div v-show="value" class="on">
        <Heavy :n="10000"/>
      </div>
      <section v-show="!value" class="off">
        <Heavy :n="10000"/>
      </section>
    </div>
  </template>
  ```


---

- `v-for` 遍历避免同时使用 `v-if`：实际上在Vue3中已经是个错误写法

  ```vue
  <template>
      <ul>
        <li
          v-for="user in activeUsers"
          <!-- 避免同时使用，vue3中会报错 -->
          <!-- v-if="user.isActive" -->
          :key="user.id">
          {{ user.name }}
        </li>
      </ul>
  </template>
  <script>
    export default {
      computed: {
        activeUsers: function () {
          return this.users.filter(user => user.isActive)
        }
      }
    }
  </script>
  ```


---

- v-once和v-memo：不再变化的数据使用`v-once`

  ```vue
  <!-- single element -->
  <span v-once>This will never change: {{msg}}</span>
  <!-- the element have children -->
  <div v-once>
    <h1>comment</h1>
    <p>{{msg}}</p>
  </div>
  <!-- component -->
  <my-component v-once :comment="msg"></my-component>
  <!-- `v-for` directive -->
  <ul>
    <li v-for="i in list" v-once>{{i}}</li>
  </ul>
  ```

  按条件跳过更新时使用`v-momo`：下面这个列表只会更新选中状态变化项

  ```vue
  <div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
    <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
    <p>...more child nodes</p>
  </div>
  ```

  > https://vuejs.org/api/built-in-directives.html#v-memo


---

- 长列表性能优化：如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容

  ```html
  <recycle-scroller
    class="items"
    :items="items"
    :item-size="24"
  >
    <template v-slot="{ item }">
      <FetchItemView
        :item="item"
        @vote="voteItem(item)"
      />
    </template>
  </recycle-scroller>
  ```

  > 一些开源库：
  >
  > - [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)
  > - [vue-virtual-scroll-grid](https://github.com/rocwang/vue-virtual-scroll-grid)


---

- 事件的销毁：Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。 

  ```js
  export default {
    created() {
      this.timer = setInterval(this.refresh, 2000)
    },
    beforeUnmount() {
      clearInterval(this.timer)
    }
  }
  ```


---

- 图片懒加载

  对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。

  ```html
  <img v-lazy="/static/img/1.png">
  ```

  > 参考项目：[vue-lazyload](https://github.com/hilongjw/vue-lazyload)


---

- 第三方插件按需引入

  像`element-plus`这样的第三方组件库可以按需引入避免体积太大。

  ```js
  import { createApp } from 'vue';
  import { Button, Select } from 'element-plus';
  
  const app = createApp()
  app.use(Button)
  app.use(Select)
  ```


---

- 子组件分割策略：较重的状态组件适合拆分

  ```vue
  <template>
    <div>
      <ChildComp/>
    </div>
  </template>
  
  <script>
  export default {
    components: {
      ChildComp: {
        methods: {
          heavy () { /* 耗时任务 */ }
        },
        render (h) {
          return h('div', this.heavy())
        }
      }
    }
  }
  </script>
  ```

  但同时也不宜过度拆分组件，尤其是为了所谓组件抽象将一些不需要渲染的组件特意抽出来，组件实例消耗远大于纯dom节点。参考：https://vuejs.org/guide/best-practices/performance.html#avoid-unnecessary-component-abstractions


---

- 服务端渲染/静态网站生成：SSR/SSG

  如果SPA应用有首屏渲染慢的问题，可以考虑SSR、SSG方案优化。参考[SSR Guide](https://vuejs.org/guide/scaling-up/ssr.html) 