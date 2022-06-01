## vue中组件之间的通信方式？

题目分析：vue是组件化开发框架，所以对于vue应用来说组件间的数据通信非常重要。此题主要考查大家vue基本功，对于vue基础api运用熟练度。另外一些边界知识如provide/inject/$attrs/$listeners则体现了面试者的知识面。


### 思路分析：总分

1. 总述知道的所有方式
2. 按组件关系阐述使用场景


### 回答范例：

1. 组件通信方式大体有以下8种：

- props
- $emit/$on
- $children/$parent
- $attrs/$listeners
- ref
- $root
- eventbus
- vuex



2. 根据组件之间关系讨论组件通信最为清晰有效

- 父子组件

  - `props`
  - `$emit`/`$on`
  - `$parent` / `$children`
  - `ref` 
  - `$attrs` / `$listeners`
- 兄弟组件

  - `$parent`
  - `eventbus`

  - `vuex`

- 跨层级关系

  - `provide`/`inject`
  - `$root`
  - `eventbus`
  - `vuex`



