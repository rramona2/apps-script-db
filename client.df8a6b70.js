webpackJsonp([2],[,,,,,,,function(t,e,n){"use strict";var a=n(27),r=n(31),s=n(35);e.a={components:{UrlInput:a.a,DataList:r.a,AppName:s.a}}},function(t,e,n){"use strict";var a=n(9),r=n(29),s=n(6);n.n(s);e.a={data:function(){return{url:this.$store.state.url}},methods:{update:function(t){var e=this;this.$store.commit("UPDATE_URL",{url:t}),this.$store.dispatch("GET_DATA").catch(function(){e.$store.commit("STOP_LOADING"),e.$store.commit("UPDATE_DATA",{data:[]}),alert("Not a database url!")})},copy:function(t){var e=location,n=e.protocol,a=e.hostname,s=e.port,i=e.pathname,o=[n,"//",a];80!==s&&(o=o.concat([":",s])),o=o.concat([i],"?url=",encodeURIComponent(t));var c=o.join("");Object(r.a)(c)?alert(this.$t("copy.success")):prompt(this.$t("copy.failed"),c)}},components:{XInput:a.a}}},function(t,e,n){"use strict";var a=n(10),r=n(28),s=n(1),i=s(a.a,r.a,!1,null,null,null);i.options.__file="src\\components\\XInput.vue",e.a=i.exports},function(t,e,n){"use strict";e.a={props:{value:{type:String,required:!0}},data:function(){return{text:this.value}},watch:{text:function(t){this.$emit("input",t)}}}},function(t,e,n){"use strict";var a=n(32);e.a={computed:{data:function(){return this.$store.state.data}},methods:{add:function(){var t=prompt("key:");if(t){this.$store.state.data.filter(function(e){return e.key===t}).length>0?alert('Key "'+t+'" already exists.'):this.$store.dispatch("SET_VALUE",{key:t,value:""})}}},components:{KeyValue:a.a}}},function(t,e,n){"use strict";var a=n(9);e.a={props:{data:{type:Object,required:!0}},data:function(){return{k:this.data.key,v:this.data.value}},methods:{update:function(){this.k&&this.v&&this.v!==this.data.value&&this.$store.dispatch("SET_VALUE",{key:this.k,value:this.v})},del:function(){this.k&&this.$store.dispatch("DEL_VALUE",{key:this.k})}},components:{XInput:a.a}}},function(t,e,n){"use strict";var a=n(37);e.a={components:{Loading:a.a}}},,,,,,,function(t,e){t.exports={appname:"Apps Script DB",editor:"Editor",load:"Load",add:"Add",update:"Update",delete:"Delete",dburl:"Database Url",copy:{success:"Copied!",failed:"Copy failed! Please copy the following url."}}},function(t,e,n){t.exports=n(22)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(23),r=(n.n(a),n(2)),s=n(25),i=n(26),o=n(42),c=n(73);Object(c.b)(navigator.language).then(function(t){return console.log("Language loaded: "+t)}),s.a.url&&o.a.commit("UPDATE_URL",{url:s.a.url}),o.a.state.url&&o.a.dispatch("GET_DATA").catch(function(){o.a.commit("STOP_LOADING"),o.a.commit("UPDATE_DATA",{data:[]}),alert("Not a database url!")}),console.log(s.a),new r.a({el:"#app",render:function(t){return t(i.a)},store:o.a,i18n:c.a})},,,function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=Object.assign.apply(Object,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(location.search.replace(/^\?/,"").split("&").map(function(t){return t.split("=")}).map(function(t){return a({},t[0],decodeURIComponent(t[1]))})))},function(t,e,n){"use strict";var a=n(7),r=n(41),s=n(1),i=s(a.a,r.a,!1,null,null,null);i.options.__file="src\\components\\App.vue",e.a=i.exports},function(t,e,n){"use strict";var a=n(8),r=n(30),s=n(1),i=s(a.a,r.a,!1,null,null,null);i.options.__file="src\\components\\UrlInput.vue",e.a=i.exports},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[t._t("prepend")],2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("enter")},input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[t._t("append")],2)])},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();var n=void 0;try{n=document.execCommand("copy")}catch(t){n=!1}return document.body.removeChild(e),n}e.a=a},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-input",{on:{enter:function(e){t.update(t.url)}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[n("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},on:{click:function(e){t.copy(t.url)}},slot:"prepend"},[t._v(t._s(t.$t("dburl")))]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{slot:"append"},on:{click:function(e){t.update(t.url)}},slot:"append"},[t._v(t._s(t.$t("load")))])])],1)},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=n(11),r=n(34),s=n(1),i=s(a.a,r.a,!1,null,null,null);i.options.__file="src\\components\\DataList.vue",e.a=i.exports},function(t,e,n){"use strict";var a=n(12),r=n(33),s=n(1),i=s(a.a,r.a,!1,null,null,null);i.options.__file="src\\components\\KeyValue.vue",e.a=i.exports},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("x-input",{on:{enter:t.update},model:{value:t.v,callback:function(e){t.v=e},expression:"v"}},[n("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.k))]),t._v(" "),n("template",{slot:"append"},[n("button",{staticClass:"btn btn-primary",on:{click:t.update}},[t._v(t._s(t.$t("update")))]),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:t.del}},[t._v(t._s(t.$t("delete")))])])],2)],1)])},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._l(t.data,function(t,e){return n("key-value",{key:t.key,class:{"pt-2":e>0},attrs:{data:t}})}),t._v(" "),n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-primary w-100",on:{click:t.add}},[t._v(t._s(t.$t("add")))])])])],2)])},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){i||n(36)}var r=n(13),s=n(40),i=!1,o=n(1),c=a,u=o(r.a,s.a,!1,c,"data-v-d5cec328",null);u.options.__file="src\\components\\AppName.vue",e.a=u.exports},function(t,e){},function(t,e,n){"use strict";function a(t){s||n(38)}var r=n(39),s=!1,i=n(1),o=a,c=i(null,r.a,!0,o,null,null);c.options.__file="src\\components\\Loading.vue",e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=function(t,e){var n=e._c;return e.props.loading?n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),e._v(" "),n("div",{staticClass:"rect2"}),e._v(" "),n("div",{staticClass:"rect3"}),e._v(" "),n("div",{staticClass:"rect4"}),e._v(" "),n("div",{staticClass:"rect5"})]):e._e()},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("h1",{staticClass:"pr-2 block-item"},[n("a",{attrs:{href:"https://github.com/maple3142/apps-script-db",target:"_blank"}},[t._v(t._s(t.$t("appname")))]),t._v(" "+t._s(t.$t("editor")))]),t._v(" "),n("div",{staticClass:"block-item"},[n("loading",{attrs:{loading:t.$store.state.loading}})],1)])},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("app-name")],1)]),t._v(" "),n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("url-input")],1)]),t._v(" "),n("div",{staticClass:"row pt-2"},[n("div",{staticClass:"col-12"},[n("data-list")],1)])])},r=[];a._withStripped=!0;var s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(r,s){try{var i=e[r](s),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}var r=n(14),s=n.n(r),i=n(2),o=n(45),c=n(46),u=n.n(c),l=n(47),p=n.n(l);i.a.use(o.a);var d=new o.a.Store({state:{url:"",data:[],loading:!1},mutations:{UPDATE_URL:function(t,e){var n=e.url;t.url=n},UPDATE_DATA:function(t,e){var n=e.data;return t.data=n},START_LOADING:function(t){return t.loading=!0},STOP_LOADING:function(t){return t.loading=!1}},actions:{GET_DATA:function(){function t(t){return e.apply(this,arguments)}var e=a(s.a.mark(function t(e){var n,a,r=e.commit,i=e.state;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i.url){t.next=2;break}return t.abrupt("return");case 2:return n=new p.a(i.url),r("START_LOADING"),t.t0=JSON,t.next=7,n.get("*");case 7:t.t1=t.sent,a=t.t0.parse.call(t.t0,t.t1),r("UPDATE_DATA",{data:Object.keys(a).map(function(t){return{key:t,value:a[t]}})}),r("STOP_LOADING");case 11:case"end":return t.stop()}},t,this)}));return t}(),SET_VALUE:function(){function t(t,n){return e.apply(this,arguments)}var e=a(s.a.mark(function t(e,n){var a,r=e.commit,i=e.dispatch,o=e.state,c=n.key,u=n.value;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o.url){t.next=2;break}return t.abrupt("return");case 2:return a=new p.a(o.url),r("START_LOADING"),t.next=6,a.set(c,u);case 6:r("STOP_LOADING"),i("GET_DATA");case 8:case"end":return t.stop()}},t,this)}));return t}(),DEL_VALUE:function(){function t(t,n){return e.apply(this,arguments)}var e=a(s.a.mark(function t(e,n){var a,r=e.commit,i=e.dispatch,o=e.state,c=n.key;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o.url){t.next=2;break}return t.abrupt("return");case 2:return a=new p.a(o.url),r("START_LOADING"),t.next=6,a.del(c);case 6:r("STOP_LOADING"),i("GET_DATA");case 8:case"end":return t.stop()}},t,this)}));return t}()},plugins:[u()({namespace:"store",keys:["url"]})]});e.a=d},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(r,s){try{var i=e[r](s),o=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}n.d(e,"a",function(){return l}),n.d(e,"b",function(){return d});var r=n(14),s=n.n(r),i=n(2),o=n(74),c=n(20),u=n.n(c);i.a.use(o.a);var l=new o.a({locale:navigator.language,fallbackLocale:"en",messages:{en:u.a}}),p=["en","zh-tw"],d=function(){var t=a(s.a.mark(function t(e){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=e.toLowerCase(),p.includes(e)){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n(75)("./"+e+".json");case 5:return a=t.sent,l.setLocaleMessage(e,a),l.locale=e,document.querySelector("html").setAttribute("lang",e),t.abrupt("return",e);case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},,function(t,e,n){function a(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./en.json":[20],"./zh-tw.json":[76,0]};a.keys=function(){return Object.keys(r)},a.id=75,t.exports=a}],[21]);
//# sourceMappingURL=client.df8a6b70.js.map