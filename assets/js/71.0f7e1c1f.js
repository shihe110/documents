(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{307:function(a,t,s){"use strict";s.r(t);var r=s(24),e=Object(r.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"解决-manjaro-录屏闪烁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-manjaro-录屏闪烁","aria-hidden":"true"}},[a._v("#")]),a._v(" 解决 Manjaro 录屏闪烁")]),a._v(" "),s("h3",{attrs:{id:"_1-问题情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题情况","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 问题情况")]),a._v(" "),s("p",[a._v("在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。")]),a._v(" "),s("h3",{attrs:{id:"_2-解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 解决方案")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("步骤")]),a._v(" "),s("p",[s("code",[a._v("系统设置")]),a._v(" > "),s("code",[a._v("硬件")]),a._v(" > "),s("code",[a._v("显示和监控")]),a._v(" > "),s("code",[a._v("混成器")]),a._v(" > "),s("code",[a._v("避免撕裂(垂直同步)")]),a._v(" > "),s("code",[a._v("从不")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"/OS/manjaro/os_manjaro_5_20190218171136.png",alt:"录屏闪烁"}})]),a._v(" "),s("h2",{attrs:{id:"禁用笔记本键盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用笔记本键盘","aria-hidden":"true"}},[a._v("#")]),a._v(" 禁用笔记本键盘")]),a._v(" "),s("h3",{attrs:{id:"_1-问题情况-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题情况-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 问题情况")]),a._v(" "),s("p",[a._v("之前键盘进过水导致会启用按键失灵，所以需要禁用自带的键盘。")]),a._v(" "),s("h3",{attrs:{id:"_2-解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 解决方案")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("初级方案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# manjaro 下 xinput 被 xorg-xinput 替代")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S xorg-xinput\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看设备列表")]),a._v("\nxinput list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看笔记本键盘信息 ")]),a._v("\nxinput list-props "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'AT Translated Set 2 keyboard'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Device Enabled (147): 1 =》 `1` 表示维禁用")]),a._v("\nxinput set-prop "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Device Enabled'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 再次查看设备信息即可")]),a._v("\n")])])])]),a._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("终极方案")]),a._v(" "),s("p",[s("code",[a._v("关电源")]),a._v(" > "),s("code",[a._v("打开后盖")]),a._v(" > "),s("code",[a._v("拆除笔记本键盘排线")])])]),a._v(" "),s("h2",{attrs:{id:"修复文件夹名为英文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复文件夹名为英文","aria-hidden":"true"}},[a._v("#")]),a._v(" 修复文件夹名为英文")]),a._v(" "),s("h3",{attrs:{id:"_1-问题情况-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题情况-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 问题情况")]),a._v(" "),s("p",[a._v("将系统设置为中文后，用户目录下的文件夹也随之变为中文，在日常使用时就会造成频繁切换输入这就让人很烦了。而直接重命名会导致出现一些问题。")]),a._v(" "),s("h3",{attrs:{id:"_2-解决方案-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案-3","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 解决方案")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("初级方案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 找到 `～/.config/user-dirs.dis` 文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" ~/.config/user-dirs.dirs \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 接着将中文命名修改为新改的英文，并使其生效")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.config/user-dirs.dirs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. 然而这并没有结束，你还需要修改右侧图标的位置")]),a._v("\n右键 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 编辑 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 位置\n")])])])])])},[],!1,null,null,null);t.default=e.exports}}]);