(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{522:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("1.什么是 vue 生命周期？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("vue 每个组件都是独立的，每个组件都有一个属于它的生命周期，从一个组件**创建、数据初始化、挂载、更新、销毁**，这就是一个组件所谓的生命周期。在组件中具体的方法有:\n\n- beforeCreate\n- Created\n- beforeMount\n- mounted\n- BeforeUpdate\n- updated\n- BeforeDestory\n- Destroyed\n")])])]),s("p",[t._v("2.vue 生命周期的作用是什么?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("提供代码执行时不同时间的钩子函数，便于进行对应节点的逻辑处理\n")])])]),s("p",[t._v("3.第一次页面加载会触发哪几个钩子？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("beforeCreate, created, beforeMount, mounted\n")])])]),s("p",[t._v("4.created 和 mounted 的区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("created：是在模板渲染成 HTML 前调用的，此时 data 已经准备完毕，el 仍是 undefined，因为没有渲染成 HTML，所以不能操作 dom 节点，它主要用来初始化一些数据；\n\nmounted：是在模板渲染成 HTML 之后调用的，此时 data，el 都已准备好，可以操作 html 的 dom 节点，可以通过 id 什么的来查找页面元素，也可以加载一些组件什么的；\n")])])]),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("p",[t._v("1.mvvm 框架是什么")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("model、view、viewmodel，即模型-视图-视图模型\n")])])]),s("p",[t._v("2.vue-router 是什么?它有哪些组件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("router-link\n\nrouter-view\n\nkeep-alive\n")])])]),s("p",[t._v("3.active-class 是哪个组件的属性？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("router-link\n")])])]),s("p",[t._v("4.怎么定义 vue-router 的动态路由? 怎么获取传过来的值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("在 router 目录下的 index.js 文件中，对 path 属性加上/:id。\n\n使用 router 对象的 params.id 例如 : this.\\$route.params.id\n")])])]),s("p",[t._v("5.vue-router 有哪几种导航钩子?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- 前置守卫：beforeEach\n- 后置钩子：afterEach\n- 单独路由独享钩子：beforeEnter\n- 组件内的钩子：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave\n")])])]),s("p",[t._v("6.route 和 router 的区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("router 是 VueRouter 的一个对象，通过 Vue.use(VueRouter)和 VueRouter 构造函数得到一个 router 的实例对象，这个对象是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。\n\nroute 是一个跳转的路由对象，每一个路由都会有一个 route 对象，是一个局部的对象，可以获取对应的 name,path,params,query 等\n")])])]),s("p",[t._v("7.vue-router 响应路由参数的变化\n8.vue-router 传参\n9.vue-router 的模式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- hash 模式\n\n使用 URL 的 hash 来模拟一个完整的 URL,于是当 URL 改变的时候,页面不会重新加载,也就是单页应用了,当#后面的 hash 发生变化,不会导致浏览器向服务器发出请求,浏览器不发出请求就不会刷新页面,并且会触发 hashChange 这个事件,通过监听 hash 值的变化来实现更新页面部分内容的操作\n\n- history 模式\n\n主要使用 HTML5 的 pushState()和 replaceState()这两个 api 来实现的,pushState()可以改变 url 地址且不会发送请求,replaceState()可以读取历史记录栈,还可以对浏览器记录进行修改\n")])])]),s("ol",{attrs:{start:"10"}},[s("li",[s("p",[s("strong",[t._v("vue-router 的路由懒加载")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//import")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Two'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//require")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"常见面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题"}},[t._v("#")]),t._v(" 常见面试题")]),t._v(" "),s("p",[t._v("1.vue 优点")]),t._v(" "),s("p",[t._v("轻量、易上手、组件化、MVVM、性能好")]),t._v(" "),s("p",[t._v("2.vue 父组件向子组件传递数据？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("props\n")])])]),s("p",[t._v("3.子组件像父组件传递事件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$emit()\n")])])]),s("p",[t._v("4.v-show 和 v-if 指令的共同点和不同点")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("共同点：都能控制元素的显示和隐藏。\n\n不同点：实现本质⽅法不同，v-show 本质就是通过控制 css 中的 display 设置为 none，控制隐藏，只会编译⼀次；v-if 是动态的向 DOM 树内添加或者删除 DOM 元素，若初始值为 false，就不会编译了。⽽且 v-if 不停的销毁和创建⽐较消耗性能。\n\n总结：如果要频繁切换某节点，使⽤ v-show(切换开销⽐较⼩，初始开销较⼤)。如果不需要频繁切换某节点使⽤ v-if（初始渲染开销较⼩，切换开销⽐较⼤）。\n")])])]),s("p",[t._v("5.如何让 CSS 只在当前组件中起作用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("scoped\n")])])]),s("p",[t._v("6.的作用是什么?")]),t._v(" "),s("p",[t._v("7.如何获取 dom")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("$refs\n")])])]),s("p",[t._v("8.说出几种 vue 当中的指令和它的用法？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("v-if：判断是否隐藏\n\nv-for：数据循环\n\nv-bind:class：绑定一个属性\n\nv-model:实现数据双向绑定\n")])])]),s("p",[t._v("9.vue-loader 是什么？使用它的用途有哪些？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("解析和转换.vue文件。提取出其中的逻辑代码 script,样式代码style,以及HTML 模板template,再分别把他们交给对应的loader去处理\n用途：js可以写es6,style样式可以写scss或less、template可以加jade等\n")])])]),s("p",[t._v("10.为什么使用 key")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("key的作用就是为了快速的找到新节点对应的旧节点。key是给每一个vnode唯一的id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。\n")])])]),s("p",[t._v("11.axios 及安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中\n\n特性：\n从浏览器中创建 XMLHttpRequests\n从 node.js 创建 http 请求\n支持 Promise API\n拦截请求和响应\n转换请求数据和响应数据\n取消请求\n自动转换 JSON 数据\n客户端支持防御 XSRF\n")])])]),s("p",[t._v("12.axios 解决跨域")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("【vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js】\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    devServer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/")]),t._v("\n                target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许跨域")]),t._v("\n                changeOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                ws"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                pathRewrite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("13.v-model 的使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//v-model本质上是一个语法糖。如下代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本质上是")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v(" @input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test = $event.target.value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//其中@input是对<input>输入事件的一个监听:value="test"是将监听事件中的数据放入到input，下面代码是v-model的一个简单的例子。在这边需要强调一点，v-model不仅可以给input赋值还可以获取input中的数据，而且数据的获取是实时的，因为语法糖中是用@input对输入框进行监听的。')]),t._v("\n")])])]),s("p",[t._v("14.scss 的安装以及使用")]),t._v(" "),s("p",[t._v("15.请说出 vue.cli 项目中 src 目录每个文件夹和文件的用法？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置;view视图；app.vue是一个应用主组件；main.js是入口文件\n")])])]),s("p",[t._v("16.分别简述 computed 和 watch 的使用场景")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('computed：通过属性计算而得来的属性\n\n    1、computed 内部的函数在调用时不加()。\n\n    2、computed 是依赖 vm 中 data 的属性变化而变化的，也就是说，当 data 中的属性发生改变的时候，当前函数才会执行，data 中的属性没有改变的时候，当前函数不会执行。\n\n    3、computed 中的函数必须用 return 返回。\n\n    4、在 computed 中不要对 data 中的属性进行赋值操作。如果对 data 中的属性进行赋值操作了，就是 data 中的属性发生改变，从而触发 computed 中的函数，形成死循环了。\n\n    5、当 computed 中的函数所依赖的属性没有发生改变，那么调用当前函数的时候会从缓存中读取。\n\n    使用场景：当一个值受多个属性影响的时候------------购物车商品结算\n\nwatch：属性监听\n\n    1、watch 中的函数名称必须要和 data 中的属性名一致，因为 watch 是依赖 data 中的属性，当 data 中的属性发生改变的时候，watch 中的函数就会执行。\n\n    2、watch 中的函数有两个参数，前者是 newVal，后者是 oldVal。\n\n    3、watch 中的函数是不需要调用的。\n\n    4、watch 只会监听数据的值是否发生改变，而不会去监听数据的地址是否发生改变。也就是说，watch 想要监听引用类型数据的变化，需要进行深度监听。"obj.name"(){}------如果 obj 的属性太多，这种方法的效率很低，obj:{handler(newVal){},deep:true}------用 handler+deep 的方式进行深度监听。\n\n    5、特殊情况下，watch 无法监听到数组的变化，特殊情况就是说更改数组中的数据时，数组已经更改，但是视图没有更新。更改数组必须要用 splice()或者$set。this.arr.splice(0,1,100)-----修改arr中第0项开始的1个数据为100，this.$set(this.arr,0,100)-----修改 arr 第 0 项值为 100。\n\n    6、immediate:true 页面首次加载的时候做一次监听。\n\n    使用场景：当一条数据的更改影响到多条数据的时候---------搜索框\n\n区别：\n\n　　1、功能上：computed是计算属性，watch是监听一个值的变化，然后执行对应的回调。\n\n　　2、是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。\n\n　　3、是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。\n')])])]),s("p",[t._v("17.v-on 可以监听多个方法吗")]),t._v(" "),s("p",[t._v("18.$nextTick 的使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。\n")])])]),s("p",[t._v("19.vue 组件中 data 为什么必须是一个函数")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("形成闭包，保护组件变量作用域\n")])])]),s("p",[t._v("20.vue 事件对象的使用")]),t._v(" "),s("p",[t._v("21 组件间的通信")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("props、emit、eventBus、vuex、注入\n")])])]),s("p",[t._v("22.渐进式框架的理解")]),t._v(" "),s("p",[t._v("23.Vue 中双向数据绑定是如何实现的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Vue 主要通过以下 4 个步骤来实现数据双向绑定的：\n\n实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。\n\n\n实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。\n\n\n实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。\n\n\n实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。\n")])])]),s("p",[t._v("24.单页面应用和多页面应用区别及优缺点")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("单页面的优点：\n\n1，用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小\n\n2，前后端分离\n\n3，页面效果会比较炫酷（比如切换页面内容时的专场动画）\n\n单页面缺点：\n\n1，不利于seo\n\n2，导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）\n\n3，初次加载时耗时多\n\n4，页面复杂度提高很多\n")])])]),s("p",[t._v("25.vue 中过滤器有什么作用及详解")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("{{ date | formatDate }}\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局函数")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formatDate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hour "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHours")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" minutes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" seconds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hour"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" : ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("minutes"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" : ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("seconds"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("26.v-if 和 v-for 的优先级")]),t._v(" "),s("p",[t._v("27.assets 和 static 的区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("assets和static两个都是用于存放静态资源文件。\n\n放在static中的文件不会进行构建编译处理，也就不会压缩体积，在打包时效率会更高，但体积更大在服务器中就会占据更大的空间\n\n放在assets中的文件会进行压缩体积、代码格式化，压缩后会放置在static中一同上传服务器。\n\n因此建议样式文件放在assets中进行打包，引入的第三方文件放到static中，因为引入的文件已经做过打包处理。\n")])])]),s("p",[t._v("28.列举常用的指令")]),t._v(" "),s("p",[t._v("29.vue 常用的修饰符")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v(".lazy\n在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在“change”时而非“input”时更新 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model.lazy")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n.number\n如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model.number")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n.trim\n如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model.trim")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("trim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{trim}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("getStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("获取"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("30.数组更新检测")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。\n")])])]),s("p",[t._v("31.Vue.set 视图更新")]),t._v(" "),s("p",[t._v("32.自定义指令详解")]),t._v(" "),s("p",[t._v("33.vue 的两个核心点")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("数据驱动、组件系统\n")])])]),s("p",[t._v("34.vue 和 jQuery 的区别")]),t._v(" "),s("p",[t._v("35 引进组件的步骤")]),t._v(" "),s("p",[t._v("36.Vue-cli 打包命令是什么？打包后悔导致路径问题，应该在哪里修改")]),t._v(" "),s("p",[t._v("37.三大框架的对比")]),t._v(" "),s("p",[t._v("38.跨组件双向数据绑定")]),t._v(" "),s("p",[t._v("39.delete 和 Vue.delete 删除数组的区别")]),t._v(" "),s("p",[t._v("40.SPA 首屏加载慢如何解决")]),t._v(" "),s("p",[t._v("41.Vue-router 跳转和 location.href 有什么区别")]),t._v(" "),s("p",[t._v("42.vue slot")]),t._v(" "),s("p",[t._v("43.你们 vue 项目是打包了一个 js 文件，一个 css 文件，还是有多个文件？")]),t._v(" "),s("p",[t._v("44.vue 遇到的坑，如何解决的？")]),t._v(" "),s("p",[t._v("45.Vue 里面 router-link 在电脑上有用，在安卓上没反应怎么解决？")]),t._v(" "),s("p",[t._v("46.Vue2 中注册在 router-link 上事件无效解决方法")]),t._v(" "),s("p",[t._v("47.RouterLink 在 IE 和 Firefox 中不起作用（路由不跳转）的问题")]),t._v(" "),s("p",[t._v("48.axios 的特点有哪些")]),t._v(" "),s("p",[t._v("49.请说下封装 vue 组件的过程？")]),t._v(" "),s("p",[t._v("50.vue 各种组件通信方法（父子 子父 兄弟 爷孙 毫无关系的组件）")]),t._v(" "),s("p",[t._v("51.params 和 query 的区别")]),t._v(" "),s("p",[t._v("52.vue mock 数据")]),t._v(" "),s("p",[t._v("53 vue 封装通用组件")]),t._v(" "),s("p",[t._v("54.vue 初始化页面闪动问题")]),t._v(" "),s("p",[t._v("55.vue 禁止弹窗后的屏幕滚动")]),t._v(" "),s("p",[t._v("56.vue 更新数组时触发视图更新的方法")]),t._v(" "),s("p",[t._v("57.vue 常用的 UI 组件库")]),t._v(" "),s("p",[t._v("58.vue 如何引进本地背景图片")]),t._v(" "),s("p",[t._v("59.vue 如何引进 sass")]),t._v(" "),s("p",[t._v("60.vue 修改打包后静态资源路径的修改")]),t._v(" "),s("h2",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),s("p",[t._v("1.vuex 是什么？怎么使用？哪种功能场景使用它？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("状态管理工具\n")])])]),s("p",[t._v("2.vuex 有哪几种属性")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("state getter mutation action\n")])])]),s("p",[t._v("3.不使用 Vuex 会带来什么问题")]),t._v(" "),s("p",[t._v("4.Vue.js 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 actions 中？")]),t._v(" "),s("p",[t._v("5.vuex 一个例子方法")]),t._v(" "),s("p",[t._v("6.Vuex 中如何异步修改状态")]),t._v(" "),s("p",[t._v("7.Vuex 中 actions 和 mutations 的区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("mutations必须是同步，修改state\n\nactions可以包含异步操作、\n")])])]),t._v(" "),s("comment"),t._v(" "),s("comment"),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);