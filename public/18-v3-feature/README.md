根据尤大的PPT总结，Vue3.0改进主要在以下几点：

- 更快
  - 虚拟DOM重写
  - 优化slots的生成
  - 静态树提升
  - 静态属性提升
  - 基于Proxy的响应式系统
- 更小：通过摇树优化核心库体积
- 更容易维护：TypeScript + 模块化
- 更加友好
  - 跨平台：编译器核心和运行时核心与平台无关，使得Vue更容易与任何平台（Web、Android、iOS）一起使用
- 更容易使用
  - 改进的TypeScript支持，编辑器能提供强有力的类型检查和错误及警告
  - 更好的调试支持
  - 独立的响应化模块
  - Composition API



**虚拟 DOM 重写**

期待更多的编译时提示来减少运行时开销，使用更有效的代码来创建虚拟节点。

组件快速路径+单个调用+子节点类型检测

- 跳过不必要的条件分支
- JS引擎更容易优化

![640?wx_fmt=jpeg](assets/p)

**优化slots生成**

vue3中可以单独重新渲染父级和子级

- 确保实例正确的跟踪依赖关系
- 避免不必要的父子组件重新渲染

![slots](assets/p-1580269316077)

**静态树提升(Static Tree Hoisting)**

使用静态树提升，这意味着 Vue 3 的编译器将能够检测到什么是静态的，然后将其提升，从而降低了渲染成本。

- 跳过修补整棵树，从而降低渲染成本
- 即使多次出现也能正常工作

![静态树](assets/p-1580270373258)

**静态属性提升**
使用静态属性提升，Vue 3打补丁时将跳过这些属性不会改变的节点。

![640?wx_fmt=jpeg](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/CBxTibNZG9mESf7ibHl49KfUPBiaQOPJJGWKhWhkyQ4u7nz0jtRAGrnxicILB75Bm6EPe5sqW9kco0Lec4rS3LpdEw/640?wx_fmt=jpeg)

**基于 Proxy 的数据响应式**

Vue 2的响应式系统使用 Object.defineProperty 的getter 和 setter。Vue 3 将使用 ES2015 Proxy 作为其观察机制，这将会带来如下变化：

- 组件实例初始化的速度提高100％
- 使用Proxy节省以前一半的内存开销，加快速度，但是存在低浏览器版本的不兼容
- 为了继续支持 IE11，Vue 3 将发布一个支持旧观察者机制和新 Proxy 版本的构建

![640?wx_fmt=jpeg](https://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_jpg/CBxTibNZG9mHicMDLNs5SFibPBYNT2NYw9ibFTibpT36mRWyaK9icvKoIewaUqIBZ74e3fXg9S742rD9rLK4pic9SCshQ/640?wx_fmt=jpeg)



**高可维护性**

Vue 3 将带来更可维护的源代码。它不仅会使用 TypeScript，而且许多包被解耦，更加模块化。

![image-20200129121322729](assets/image-20200129121322729.png)



 

