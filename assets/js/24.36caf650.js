(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{509:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("首先说一下作用：Git 中的 tag 指向一次 commit 的 id，通常用来给开发分支做一个标记，如标记一个版本号。")]),t._v(" "),s("p",[t._v("下面就说一下具体的用法：")]),t._v(" "),s("h2",{attrs:{id:"添加标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加标签"}},[t._v("#")]),t._v(" 添加标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('git tag -a version -m "note"\n\ngit tag 是打标签的命令，-a 是添加标签，其后要跟新标签号，-m 及后面的字符串是对该标签的注释。\n')])])]),s("h2",{attrs:{id:"提交标签到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交标签到远程仓库"}},[t._v("#")]),t._v(" 提交标签到远程仓库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git push origin --tags\n\n就像git push origin master 把本地修改提交到远程仓库一样，--tags可以把本地的打的标签全部提交到远程仓库。\n")])])]),s("h2",{attrs:{id:"删除标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除标签"}},[t._v("#")]),t._v(" 删除标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git tag -d version\n\n-d 表示删除，后面跟要删除的tag名字\n")])])]),s("h2",{attrs:{id:"删除远程标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除远程标签"}},[t._v("#")]),t._v(" 删除远程标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git push origin :refs/tags/version\n\n就像git push origin :branch_1 可以删除远程仓库的分支branch_1一样， 冒号前为空表示删除远程仓库的tag。\n")])])]),s("h2",{attrs:{id:"查看标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看标签"}},[t._v("#")]),t._v(" 查看标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("git tag 或者 git tag -l\n另外，git tag -l -n 还可以查看备注\n")])])]),t._v(" "),s("comment"),t._v(" "),s("comment"),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);