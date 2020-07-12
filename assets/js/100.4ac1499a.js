(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{561:function(s,a,t){"use strict";t.r(a);var e=t(33),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("alias 可用于设置指令的别名，固化则需要存放于 "),t("code",[s._v("~/.bashrc")]),s._v(" 或 "),t("code",[s._v("~/.zshrc")]),s._v(" 中。")]),s._v(" "),t("blockquote",[t("p",[s._v("有的时候命令历史提示会更好用，也就是需要更加了解 "),t("code",[s._v("zsh")]),s._v(" 的生态。")])]),s._v(" "),t("h2",{attrs:{id:"常用规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用规则"}},[s._v("#")]),s._v(" 常用规则")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pg")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ps aux | grep "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" random-str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"base64 /dev/urandom | tr -d '/+' | dd bs=32 count=1 2>/dev/null && echo "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"curl -s myip.ipip.net | grep -oE '"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v("([0-9]{1,3}\\.){3}[0-9]{1,3}"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v("'\"")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置代理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gfw")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export ALL_PROXY=socks5://127.0.0.1:1080 && curl ipinfo.io"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ugfw")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unset ALL_PROXY"')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);