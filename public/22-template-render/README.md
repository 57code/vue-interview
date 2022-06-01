## 说说从 template 到 render 处理过程

### 分析

问我们template到render过程，其实是问vue`编译器`工作原理。



### 思路

1. 引入vue编译器概念
2. 说明编译器的必要性
3. 阐述编译器工作流程

---

### 回答范例

1. Vue中有个独特的编译器模块，称为“compiler”，它的主要作用是将用户编写的template编译为js中可执行的render函数。
2. 之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板。相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力。
3. 在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步成为transform，最后将前面得到的AST生成为JS代码，也就是render函数。

---

### 知其所以然

vue3编译过程窥探：

https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/compile.ts#L61-L62



测试，test-v3.html



### 可能的追问

1. Vue中编译器何时执行？
2. react有没有编译器？

