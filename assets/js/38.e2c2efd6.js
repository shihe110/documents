(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{340:function(a,s,t){"use strict";t.r(s);var _=t(28),v=Object(_.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("推荐先完成该目录下的前置任务：")]),a._v(" "),t("ol",[t("li",[a._v("增加用户")]),a._v(" "),t("li",[a._v("使用 RSA 登录服务器")])]),a._v(" "),t("p",[t("code",[a._v("scp")]),a._v(" 命令可以用于 Linux 下远程拷贝文件的命令，比较类似的是 "),t("code",[a._v("cp")]),a._v(" 和 "),t("code",[a._v("rsync")]),a._v(" 。相对而言 "),t("code",[a._v("cp")]),a._v(" 只能在本地进行拷贝，而且 "),t("code",[a._v("scp")]),a._v(" 传输是加密的；"),t("code",[a._v("rsync")]),a._v(" 虽然可以增量下载，速度快一些，还有更多的功能，但是 "),t("code",[a._v("scp")]),a._v(" 非常不占资源，"),t("code",[a._v("rsync")]),a._v(" 在小文件众多时会导致磁盘 "),t("code",[a._v("I/O")]),a._v(" 非常高。")]),a._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("参数"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"_1-选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-选项","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 选项")]),a._v(" "),t("ul",[t("li",[a._v("-1：使用 ssh 协议版本1；")]),a._v(" "),t("li",[a._v("-2：使用 ssh 协议版本2；")]),a._v(" "),t("li",[a._v("-4：使用 ipv4；")]),a._v(" "),t("li",[a._v("-6：使用 ipv6；")]),a._v(" "),t("li",[a._v("-B：以批处理模式运行；")]),a._v(" "),t("li",[a._v("-C：使用压缩；")]),a._v(" "),t("li",[a._v("-F：指定 ssh 配置文件；")]),a._v(" "),t("li",[a._v("-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如私钥），此参数直接传递给 ssh；")]),a._v(" "),t("li",[a._v("-l：指定宽带限制；")]),a._v(" "),t("li",[a._v("-o：指定使用的 ssh 选项；")]),a._v(" "),t("li",[a._v("-P：指定远程主机的端口号；")]),a._v(" "),t("li",[a._v("-p：保留文件的最后修改时间，最后访问时间和权限模式；")]),a._v(" "),t("li",[a._v("-q：不显示复制进度；")]),a._v(" "),t("li",[a._v("-r：以递归方式复制。")])]),a._v(" "),t("h3",{attrs:{id:"_2-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 参数")]),a._v(" "),t("ul",[t("li",[a._v("源文件：指定要复制的源文件。")]),a._v(" "),t("li",[a._v("目标文件：目标文件。格式为 "),t("code",[a._v("user@host:filename")]),a._v(" （文件名为目标文件的名称）。")])]),a._v(" "),t("h2",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),t("h3",{attrs:{id:"_1-上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 上传文件")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("密码形式上传文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r /home/shanyuhai/Download/test shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n")])])]),t("p",[a._v("接着输入密码即可")])]),a._v(" "),t("li",[t("p",[a._v("秘钥形式上传文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -i ~/.ssh/id_rsa_xxx hi.png shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_2-下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 下载文件")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("秘钥形式下载文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -i ~/.ssh/id_rsa_xxx shanyuhai@47.111.23.259:/home/shanyuhai/downloads/hi.png pictures\n")])])])])])])},[],!1,null,null,null);s.default=v.exports}}]);