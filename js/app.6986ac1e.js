(function(t){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i={app:0},r=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0164c72d":"54d08785","chunk-2b0d6efe":"882309b5","chunk-2d0cfdfd":"5a83ce14"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2b0d6efe":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0164c72d":"31d6cfe0","chunk-2b0d6efe":"e1a27d5a","chunk-2d0cfdfd":"31d6cfe0"}[t]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===o||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],d.parentNode.removeChild(d),n(r)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Vue2_dev/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0690":function(t,e,n){"use strict";var o=n("fa7a"),a=n.n(o);a.a},"37d9":function(t,e,n){},"3e8e":function(t,e,n){},"4e62":function(t,e,n){"use strict";var o=n("37d9"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Top",{staticClass:"top"}),n("div",{staticClass:"main"},[n("Nav",{staticClass:"nav"}),n("router-view",{staticClass:"page"})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{nav_close:t.isCollapse}},[n("div",{staticClass:"nav_toggle",on:{click:t.collapse}},[n("i",{staticClass:"iconfont icon-toggle"})]),n("el-menu",{staticClass:"menu",staticStyle:{border:"0"},attrs:{"default-active":t.nav_active,router:!0,collapse:t.isCollapse,"collapse-transition":!1,"background-color":"#555","text-color":"#fff","active-text-color":"#409eff"}},[t._l(t.nav_list,(function(e,o){return[e.children&&e.children.length>0?n("el-submenu",{key:o,attrs:{index:e.path}},[n("template",{slot:"title"},[e.meta.icon?n("i",{class:["iconfont",e.meta.icon]}):t._e(),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])]),t._l(e.children,(function(e,o){return n("el-menu-item",{key:o,attrs:{index:e.path,route:e.path}},[t._v(t._s(e.meta.title))])}))],2):["**"!==e.path?n("el-menu-item",{key:o,attrs:{index:e.path,route:e.path}},[e.meta.icon?n("i",{class:["iconfont",e.meta.icon]}):t._e(),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])]):t._e()]]}))],2)],1)},c=[],s={name:"Nav",data:function(){return{isCollapse:!1}},created:function(){},computed:{nav_active:function(){return this.$store.getters["nav/get_navActive"]},nav_list:function(){return this.$store.getters["nav/get_navList"]}},methods:{collapse:function(){this.isCollapse=!this.isCollapse}}},l=s,u=(n("4e62"),n("2877")),f=Object(u["a"])(l,r,c,!1,null,"3378abbe",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top_content"},[n("div",{staticClass:"top_left"},[t._v("VUE")]),n("div",{staticClass:"top_right"},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                    WSQ "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.dropdownMenu,(function(e,o){return n("el-dropdown-item",{key:o,attrs:{icon:e.icon}},[t._v(t._s(e.title))])})),1)],1)],1)])])},v=[],m={name:"Top",data:function(){return{dropdownMenu:[{title:"个人主页",link:"",icon:""},{title:"系统设置",link:"",icon:""},{title:"退出",link:"",icon:""}]}}},h=m,g=(n("829d"),n("0690"),Object(u["a"])(h,p,v,!1,null,"61d5aa8b",null)),_=g.exports,b={name:"App",components:{Top:_,Nav:d}},y=b,k=(n("5c0b"),Object(u["a"])(y,a,i,!1,null,null,null)),w=k.exports,L=n("2f62"),C={namespaced:!0,state:{login:!1,userName:"未登录",token:""},getters:{getLogin:function(t){return t.login},getUserName:function(t){return t.userName},getToken:function(t){return t.token}},mutations:{setLogin:function(t,e){t.login=e},setUserName:function(t,e){t.userName=e},setToken:function(t,e){t.Token=e}}},T=C,x=n("8c4f"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],O={name:"home",created:function(){}},j=O,P=(n("7945"),Object(u["a"])(j,A,E,!1,null,"53c9acb0",null)),N=P.exports;o["default"].use(x["a"]);var S="",M=[{path:"".concat(S,"/"),name:"home",component:N,meta:{title:"首页",icon:"icon-home"}},{path:"".concat(S,"/modbus"),name:"Modbus",component:function(){return n.e("chunk-0164c72d").then(n.bind(null,"240d"))},meta:{title:"Modbus",icon:"icon-iot"}},{path:"".concat(S,"/pagemaking"),name:"PageMaking",component:function(){return n.e("chunk-2d0cfdfd").then(n.bind(null,"6629"))},meta:{title:"自定义表单",icon:"icon-biaodan"},children:[{path:"".concat(S,"/pagemaking/makingpage"),name:"MakingPage",component:function(){return n.e("chunk-2b0d6efe").then(n.bind(null,"459a"))},meta:{title:"生成页面"}}]},{path:"**",redirect:"".concat(S,"/")}],K=function(){return new x["a"]({mode:"hash",routes:M})},$=K();var U=$,B={namespaced:!0,state:{navList:M,navActive:""},getters:{get_navList:function(t){return t.navList},get_navActive:function(t){return t.navActive}},mutations:{set_navList:function(t,e){t.navList=M.concat(e)},set_navActive:function(t,e){t.navActive=e.navActive}}},V=B,q=(n("20d6"),n("7514"),{namespaced:!0,state:{toolsList:[],activeToolsKey:""},getters:{get_toolsList:function(t){return t.toolsList},get_activeToolsKey:function(t){return t.activeToolsKey},get_activeTools:function(t){for(var e=null,n=0;n<t.toolsList.length;n++)if(t.toolsList[n].key==t.activeToolsKey?e=t.toolsList[n]:"cols"in t.toolsList[n]&&(e=t.toolsList[n].cols.find((function(e){return e.key==t.activeToolsKey}))||null),null!==e)break;return e}},mutations:{set_toolsList:function(t,e){t.toolsList=e},update_toolsList:function(t,e){var n=t.toolsList.findIndex((function(t){return t.key==e.key}));t.toolsList.splice(n,1,e)},add_toolsList:function(t,e){t.toolsList.push(e)},set_activeToolsKey:function(t,e){t.activeToolsKey=e}},actions:{}}),D=q;o["default"].use(L["a"]);var I=new L["a"].Store({modules:{user:T,nav:V,toolsPage:D}});U.beforeEach((function(t,e,n){I.commit({type:"nav/set_navActive",navActive:t.fullPath}),window.document.title=t.meta.title,n()}));n("3e8e");var J=n("5c96"),F=n.n(J),H=(n("0fae"),n("998c")),Q=n.n(H);n("6e2e");o["default"].use(F.a),o["default"].use(Q.a),o["default"].config.productionTip=!1,new o["default"]({router:U,store:I,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e332"),a=n.n(o);a.a},"733a":function(t,e,n){},7945:function(t,e,n){"use strict";var o=n("910f"),a=n.n(o);a.a},"829d":function(t,e,n){"use strict";var o=n("733a"),a=n.n(o);a.a},"910f":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e332:function(t,e,n){},fa7a:function(t,e,n){}});
//# sourceMappingURL=app.6986ac1e.js.map