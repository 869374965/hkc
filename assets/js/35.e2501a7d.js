(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{520:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"location-路径映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-路径映射"}},[t._v("#")]),t._v(" location 路径映射")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" @ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" uri "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 表示精确匹配，如果找到，立即停止搜索并立即处理此请求。\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" 表示执行一个正则匹配，区分大小写匹配\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 表示执行一个正则匹配，不区分大小写匹配\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" 区分大小写不匹配\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 不区分大小写不匹配\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" 即表示只匹配普通字符（空格）。使用前缀匹配，"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("表示“非”，即不查询正则表达式。如果匹配成功，则不再匹配其他 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v("。\n\n@ 指定一个命名的 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v("，一般只用于内部重定向请求。例如 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v("\n\nuri 是待匹配的请求字符串，可以不包含正则表达式，也可以包含正则表达式；\n\n优先级和示例：\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("不加"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"proxy-pass-转发地址问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass-转发地址问题"}},[t._v("#")]),t._v(" proxy_pass 转发地址问题")]),t._v(" "),a("p",[t._v("首先 nginx.conf 配置文件中涉及转发地址相关的有两处配置 location 和 proxy_pass")]),t._v(" "),a("ol",[a("li",[t._v("若 location 和 proxy_pass 都"),a("strong",[t._v("带/")]),t._v("，那么真实地址"),a("strong",[t._v("不会追加")]),t._v(" location 的内容")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("访问"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("若 location 和 proxy_pass 都"),a("strong",[t._v("不带/")]),t._v("，那么真实地址"),a("strong",[t._v("会追加")]),t._v(" location 的内容")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("访问"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("若 location"),a("strong",[t._v("带/")]),t._v(" ，proxy_pass "),a("strong",[t._v("不带/")]),t._v("，那么真实地址"),a("strong",[t._v("会追加")]),t._v(" location 的内容")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("访问"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("若 location"),a("strong",[t._v("不带/")]),t._v(" ，proxy_pass "),a("strong",[t._v("带/")]),t._v("，那么真实地址"),a("strong",[t._v("不会追加")]),t._v(" location 的内容")])]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("访问"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("upload\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("注意此时的地址会存在两个"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n")])])]),a("h2",{attrs:{id:"其他常用指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他常用指令"}},[t._v("#")]),t._v(" 其他常用指令")]),t._v(" "),a("h3",{attrs:{id:"return-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-指令"}},[t._v("#")]),t._v(" return 指令")]),t._v(" "),a("p",[t._v("返回 http 状态码和可选的第二个参数可以是重定向的 URL")]),t._v(" "),a("h3",{attrs:{id:"rewrite-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-指令"}},[t._v("#")]),t._v(" rewrite 指令")]),t._v(" "),a("p",[t._v("重写 URI 请求 rewrite，通过使用 rewrite 指令在请求处理期间多次修改请求 URI，该指令具有一个可选参数和两个必需参数。")]),t._v(" "),a("p",[t._v("第一个(必需)参数是请求 URI 必须匹配的正则表达式。")]),t._v(" "),a("p",[t._v("第二个参数是用于替换匹配 URI 的 URI。")]),t._v(" "),a("p",[t._v("可选的第三个参数重写策略")]),t._v(" "),a("p",[t._v("last 重写后的 URL 发起新请求，再次进入 server 段，重试 location 的中的匹配；")]),t._v(" "),a("p",[t._v("break 直接使用重写后的 URL ，不再匹配其它 location 中语句；")]),t._v(" "),a("p",[t._v("redirect 返回 302 临时重定向；")]),t._v(" "),a("p",[t._v("permanent 返回 301 永久重定向；")]),t._v(" "),a("h3",{attrs:{id:"error-page-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-page-指令"}},[t._v("#")]),t._v(" error_page 指令")]),t._v(" "),a("p",[t._v("使用 error_page 指令，您可以配置 NGINX 返回自定义页面以及错误代码，替换响应中的其他错误代码，或将浏览器重定向到其他 URI。在以下示例中，error_page 指令指定要返回 404 页面错误代码的页面(/404.html)。")]),t._v(" "),a("h3",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),a("p",[t._v("访问日志：需要开启压缩 gzip on; 否则不生成日志文件，打开 log_format、access_log 注释")]),t._v(" "),a("h3",{attrs:{id:"deny-、allow-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deny-、allow-指令"}},[t._v("#")]),t._v(" deny 、allow 指令")]),t._v(" "),a("h3",{attrs:{id:"内置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[t._v("#")]),t._v(" 内置变量")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("nginx的配置文件中可以使用的内置变量以美元符$开始。其中，大部分预定义的变量的值由客户端发送携带。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$args")]),t._v(" ："),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这个变量等于请求行中的参数，同$query_string")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$content_length")]),t._v(" ：请求头中的Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("length字段。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$content_type")]),t._v(" ：请求头中的Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type字段。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),t._v(" ：当前请求在"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("指令中指定的值。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v(" ：请求行的主机名，为空则为请求头字段 Host 中的主机名，再为空则与请求匹配的"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" ：客户端agent信息\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_cookie")]),t._v(" ：客户端cookie信息\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$limit_rate")]),t._v(" ：这个变量可以限制连接速率。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" ：客户端请求的动作，通常为GET或POST。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" ：客户端的IP地址。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_port")]),t._v(" ：客户端的端口。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ：已经经过"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Auth")]),t._v(" Basic Module验证的用户名。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),t._v(" ：当前请求的文件路径，由"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("或"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v("指令与URI请求生成。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),t._v(" ："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HTTP")]),t._v("方法（如"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v("，"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),t._v("）。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_protocol")]),t._v(" ：请求使用的协议，通常是"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("或"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_addr")]),t._v(" ：服务器地址，在完成一次系统调用后可以确定这个值。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),t._v(" ：服务器名称。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_port")]),t._v(" ：请求到达服务器的端口号。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),t._v(" ：包含请求参数的原始URI，不包含主机名，如：”"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("baz”。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" ：不带请求参数的当前URI，"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("不包含主机名，如”"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html”。\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_uri")]),t._v(" ：与"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("相同\n")])])]),t._v(" "),a("comment"),t._v(" "),a("comment"),t._v(" "),a("comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);