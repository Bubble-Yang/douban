webpackJsonp([9],{74:function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dataobj:{type:Object}},data:function(){return{showsearch:!1}},methods:{show:function(){this.$router.push({path:"/movie"})},gosacshow:function(){var a=this.$refs.getvalue.value;this.$router.push({path:"searchshow",query:{q:a}}),this.$refs.getvalue.value=""}}}},87:function(a,e,t){e=a.exports=t(1)(),e.push([a.id,".searchpage[data-v-27da8048]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:50;width:100%;background-color:#fff}.searchpage .header[data-v-27da8048]{position:relative;padding:15px 18px 15px 60px;border-bottom:1px solid #f3f3f3}.searchpage .header input[data-v-27da8048]{width:100%;height:31px;padding:0 0 0 35px;margin:0;border:0;border-radius:3px;font-size:16px;background-color:#f3f3f3}.searchpage .header .sosuo[data-v-27da8048]{position:absolute;top:20px;left:68px;font-size:22px;color:#bbb}.searchpage .header .close[data-v-27da8048]{position:absolute;top:20px;left:15px;font-size:16px;color:#00b600}.searchpage .seacrchmenu .seacrchmenu-ul[data-v-27da8048]{display:flex;flex-wrap:wrap;border-bottom:1px solid #eee}.searchpage .seacrchmenu .seacrchmenu-ul .seacrchmenu-li[data-v-27da8048]{width:33.3333%}.searchpage .seacrchmenu .seacrchmenu-ul .seacrchmenu-li .text[data-v-27da8048]{display:block;text-align:center;padding:20px}.searchpage .seacrchmenu .seacrchmenu-ul .seacrchmenu-li .text p[data-v-27da8048]{font-size:24px}.searchpage .seacrchmenu .seacrchmenu-ul .seacrchmenu-li .text span[data-v-27da8048]{font-size:12px;color:#999}.searchpage .seacrchbtm[data-v-27da8048]{display:flex;flex-wrap:wrap}.searchpage .seacrchbtm .goto[data-v-27da8048]{display:inline-block;width:50%;height:40px;padding:10px 0;text-align:center;border-bottom:1px solid #eee;font-size:15px;color:#00b600}.searchpage .seacrchbtm .goto span[data-v-27da8048]{display:block;border-right:1px solid #eee}.searchpage .seacrchbtm .goto:nth-child(2n) span[data-v-27da8048]{border-right:none}.move-enter-active[data-v-27da8048],.move-leave-active[data-v-27da8048]{transition:all .2s linear;transform:translateZ(0)}.move-enter[data-v-27da8048],.move-leave-active[data-v-27da8048]{transform:translate3d(-100%,0,0)}",""])},125:function(a,e,t){t(147);var s=t(2)(t(74),t(130),"data-v-27da8048",null);a.exports=s.exports},130:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("transition",{attrs:{name:"move"}},[t("div",{staticClass:"searchpage"},[t("div",{staticClass:"header"},[t("input",{ref:"getvalue",attrs:{type:"text",placeholder:"影视 图书等"},on:{keyup:function(e){return"button"in e||!a._k(e.keyCode,"enter",13)?void a.gosacshow(e):null}}}),a._v(" "),t("span",{staticClass:"sosuo iconfont icon-sousuo"}),a._v(" "),t("span",{staticClass:"close",on:{click:a.show}},[a._v("关闭")])]),a._v(" "),t("div",{staticClass:"seacrchmenu"},[t("ul",{staticClass:"seacrchmenu-ul"},a._l(a.dataobj.menu,function(e){return t("li",{staticClass:"seacrchmenu-li"},[t("a",{staticClass:"text",attrs:{href:"#"}},[t("p",{style:{color:e.color}},[a._v(a._s(e.title))]),a._v(" "),t("span",[a._v(a._s(e.text))])])])}))]),a._v(" "),t("div",{staticClass:"seacrchbtm"},[t("a",{staticClass:"goto",attrs:{href:"#"}},[t("span",[a._v("注册账号")])]),a._v(" "),t("a",{staticClass:"goto",attrs:{href:"#"}},[t("span",[a._v("登陆豆瓣")])]),a._v(" "),t("a",{staticClass:"goto",attrs:{href:"#"}},[t("span",[a._v("使用桌面版")])]),a._v(" "),t("a",{staticClass:"goto",attrs:{href:"#"}},[t("span",[a._v("使用豆瓣App")])])])])])},staticRenderFns:[]}},147:function(a,e,t){var s=t(87);"string"==typeof s&&(s=[[a.id,s,""]]),s.locals&&(a.exports=s.locals);t(3)("98765a2c",s,!0)}});