(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{332:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("之前在服务器使用 git clone 拷贝 github 的项目时一直使用的是 https 协议，因为每次使用 git 协议时均会报错。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Bad owner or permissions on ~/.ssh/config\n")])])]),a("p",[s._v("一开始认为是缺乏权限，那就使用 sudo 命令，这会调用 root 对应的目录，不符合需求。后来突然想起 "),a("code",[s._v(".ssh")]),s._v(" 文件夹未做权限设置，首先可以直接去查看 "),a("code",[s._v(".ssh")]),s._v(" 目录的权限 "),a("code",[s._v("ls .ssh -al")])]),s._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方案一")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 600 ~/.ssh/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 方案二")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$USER")]),s._v(" ~/.ssh/config\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);