/*! For license information please see main.1d9a1b96dbe7fa591a44.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n={5065:(t,e,r)=>{var n=r(7294),o=r(745),i=r(9250),a=r(6914),l=r(7378),c=(0,l.createApi)({reducerPath:"postAPI",baseQuery:(0,l.fetchBaseQuery)({baseUrl:"http://localhost:5000/api"}),tagTypes:["Post"],endpoints:function(t){return{fetchAllPosts:t.query({query:function(t){var e=t.limit,r=void 0===e?9:e,n=t.page;return{url:"/posts",params:{limit:r,page:void 0===n?1:n}}},providesTags:function(t){return["Post"]}}),fetchOnePost:t.query({query:function(t){return{url:"/posts/".concat(t)}},providesTags:function(t){return["Post"]}}),createPost:t.mutation({query:function(t){return{url:"/posts",method:"POST",body:t}},invalidatesTags:["Post"]}),updatePost:t.mutation({query:function(t){return{url:"/posts",method:"PUT",body:t}},invalidatesTags:["Post"]}),deletePost:t.mutation({query:function(t){return{url:"/posts/".concat(t._id),method:"DELETE"}},invalidatesTags:["Post"]})}}}),u=r(724),s=r(1723),f=r(3379),p=r.n(f),y=r(7795),d=r.n(y),m=r(569),h=r.n(m),v=r(3565),b=r.n(v),g=r(9216),A=r.n(g),w=r(4589),C=r.n(w),x=r(9980),E={};E.styleTagTransform=C(),E.setAttributes=b(),E.insert=h().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=A(),p()(x.Z,E);const O=x.Z&&x.Z.locals?x.Z.locals:void 0;function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const k=function(t){var e,r,o=t.onClick,i=t.closeModal,l=(e=(0,n.useState)({title:"",body:""}),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],u=l[1];return n.createElement("div",{className:O.wrapper,onClick:function(){return i()}},n.createElement("form",{className:O.modal,onClick:function(t){return t.stopPropagation()}},n.createElement(s.Z,{onChange:function(t){return u((function(e){return P(P({},e),{},{title:t.target.value})}))},value:c.title,label:"Title",variant:"outlined",sx:{width:"70%"}}),n.createElement(s.Z,{onChange:function(t){return u((function(e){return P(P({},e),{},{body:t.target.value})}))},value:c.body,label:"Body",variant:"outlined",sx:{width:"70%"}}),n.createElement(a.Z,{variant:"contained",color:"success",size:"large",onClick:function(){o(c.title,c.body),u({title:"",body:""}),i()}},"Create post")))};function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var L=r(4102),I=r(6492),M=r(4161),N=r(5725),D=r(5295),G=r(2643),F=r(2658),U=r(9161);function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const q=function(t){var e,r,o=t.post,l=(0,i.s0)(),u=(e=c.useDeletePostMutation(),r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return n.createElement(N.ZP,{item:!0,xs:12,md:6,lg:4},n.createElement(D.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}},n.createElement(G.Z,null,n.createElement(F.Z,{variant:"h6",component:"h1"},o.title),n.createElement(F.Z,null,o.body.length>35?o.body.slice(0,35)+"...":o.body)),n.createElement(U.Z,null,n.createElement(a.Z,{size:"small",onClick:function(){return l("/posts/".concat(o._id))}},"Learn More"),n.createElement(a.Z,{size:"small",color:"error",onClick:function(){return function(t){u(t)}(o)}},"Delete"))))},X=function(t){return n.createElement(N.ZP,{container:!0,spacing:2},t.posts.map((function(t){return n.createElement(q,{key:t._id,post:t})})))};function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function R(){R=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),l=new O(o||[]);return n(a,"_invoke",{value:w(t,r,l)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function y(){}function d(){}var m={};c(m,i,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==e&&r.call(v,i)&&(m=v);var b=d.prototype=p.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function o(n,i,a,l){var c=s(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==Q(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,l)}),(function(t){o("throw",t,a,l)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,l)}))}l(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=C(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function C(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=c(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(A.prototype),c(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new A(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,l,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function $(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Y=[{patch:"*",element:function(){var t=V((0,n.useState)(1),2),e=t[0],r=t[1],o=c.useFetchAllPostsQuery({limit:9,page:e}),i=o.data,l=(o.error,o.isLoading,V(c.useCreatePostMutation(),1)[0]),u=function(){var t,e=(t=R().mark((function t(e,r){return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({title:e,body:r});case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){$(i,n,o,a,l,"next",t)}function l(t){$(i,n,o,a,l,"throw",t)}a(void 0)}))});return function(t,r){return e.apply(this,arguments)}}(),s=V((0,n.useState)(!1),2),f=s[0],p=s[1];return n.createElement(n.Fragment,null,n.createElement(L.Z,{sx:{mt:2}},n.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.createElement(a.Z,{variant:"contained",color:"success",onClick:function(){return p(!0)},sx:{mb:2}},"New post"),n.createElement(M.Z,null,n.createElement(I.Z,{count:null!=i&&i.maxCount?Math.ceil((null==i?void 0:i.maxCount)/9):0,page:e,variant:"text",shape:"rounded",color:"primary",onChange:function(t,e){r(e)},size:"large"}))),(null==i?void 0:i.posts)&&n.createElement(X,{posts:i.posts})),f&&n.createElement(k,{onClick:u,closeModal:function(){return p(!1)}}),n.createElement("br",null))}},{patch:"/posts/:id",element:function(){var t=(0,i.s0)(),e=(0,i.UO)().id,r=Z((0,n.useState)(!1),2),o=r[0],l=r[1],s=c.useFetchOnePostQuery(e),f=s.data,p=(s.error,s.isLoading,Z(c.useUpdatePostMutation(),1)[0]);return n.createElement("div",{className:"post"},n.createElement("div",{className:"post__buttons"},n.createElement(a.Z,{sx:{width:"15%"},variant:"contained",onClick:function(){return t("/")}},n.createElement(u.Z,null),"Back"),n.createElement(a.Z,{sx:{width:"15%"},variant:"outlined",onClick:function(){return l(!0)}},"Update")),n.createElement("h1",{className:"post__title"},null==f?void 0:f.title),n.createElement("p",{className:"post__body"},null==f?void 0:f.body),o&&n.createElement(k,{onClick:function(t,r){return p({_id:e,title:t,body:r})},closeModal:function(){return l(!1)}}))}}];const J=function(){return n.createElement(i.Z5,null,Y.map((function(t){return n.createElement(i.AW,{key:t.patch,path:t.patch,element:n.createElement(t.element,null)})})))};var K=r(3720),H=r(4386);const tt=function(){return n.createElement(K.Z,{position:"static"},n.createElement(H.Z,null,n.createElement(F.Z,{sx:{flexGrow:1},variant:"h6",component:"h1"},"Posts")))};var et=r(9087),rt={};rt.styleTagTransform=C(),rt.setAttributes=b(),rt.insert=h().bind(null,"head"),rt.domAPI=d(),rt.insertStyleElement=A(),p()(et.Z,rt),et.Z&&et.Z.locals&&et.Z.locals;const nt=function(){return n.createElement(n.Fragment,null,n.createElement(tt,null),n.createElement(J,null))};var ot=r(6706),it=r(9655),at=r(4791),lt=r(4268);function ct(t){return ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(t)}var ut,st,ft,pt=(0,at.UY)((ut={},st=c.reducerPath,ft=c.reducer,(st=function(t){var e=function(t,e){if("object"!==ct(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==ct(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===ct(e)?e:String(e)}(st))in ut?Object.defineProperty(ut,st,{value:ft,enumerable:!0,configurable:!0,writable:!0}):ut[st]=ft,ut)),yt=r(9617),dt=r(5974),mt=o.createRoot(document.getElementById("root")),ht=(0,lt.configureStore)({reducer:pt,middleware:function(t){return t().concat(c.middleware)}}),vt=(0,yt.Z)({palette:{primary:{main:"#0288D1"},secondary:{main:"#EA5044"}}});mt.render(n.createElement(dt.Z,{theme:vt},n.createElement(ot.Provider,{store:ht},n.createElement(it.VK,null,n.createElement(nt,null)))))},9087:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(7537),o=r.n(n),i=r(3645),a=r.n(i)()(o());a.push([t.id,"html {\r\n\toverflow-x: hidden;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n.post__buttons {\r\n\tmargin-top: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.post {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 90vw;\r\n\tmargin: 0 auto;\r\n}\r\n.post__title {\r\n\talign-self: center;\r\n}\r\n","",{version:3,sources:["webpack://./src/App.css"],names:[],mappings:"AAAA;CACC,kBAAkB;AACnB;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,cAAc;AACf;AACA;CACC,kBAAkB;AACnB",sourcesContent:["html {\r\n\toverflow-x: hidden;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n.post__buttons {\r\n\tmargin-top: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.post {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 90vw;\r\n\tmargin: 0 auto;\r\n}\r\n.post__title {\r\n\talign-self: center;\r\n}\r\n"],sourceRoot:""}]);const l=a},9980:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(7537),o=r.n(n),i=r(3645),a=r.n(i)()(o());a.push([t.id,".ymiGe72rtaD79ZDXunz_ {\r\n\tposition: fixed;\r\n\tbackground-color: rgba(0, 0, 0, 0.8);\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tleft: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.hTXcZevGyyI0AcvprXVJ {\r\n\tbackground-color: #e7e7e7;\r\n\tborder-radius: 40px;\r\n\tmin-height: 300px;\r\n\tmin-width: 400px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbox-sizing: border-box;\r\n\tpadding: 40px 0;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/Modal/Modal.module.css"],names:[],mappings:"AAAA;CACC,eAAe;CACf,oCAAoC;CACpC,MAAM;CACN,SAAS;CACT,QAAQ;CACR,OAAO;CACP,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,sBAAsB;CACtB,eAAe;CACf,6BAA6B;CAC7B,mBAAmB;AACpB",sourcesContent:[".wrapper {\r\n\tposition: fixed;\r\n\tbackground-color: rgba(0, 0, 0, 0.8);\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tleft: 0;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.modal {\r\n\tbackground-color: #e7e7e7;\r\n\tborder-radius: 40px;\r\n\tmin-height: 300px;\r\n\tmin-width: 400px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tbox-sizing: border-box;\r\n\tpadding: 40px 0;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n"],sourceRoot:""}]),a.locals={wrapper:"ymiGe72rtaD79ZDXunz_",modal:"hTXcZevGyyI0AcvprXVJ"};const l=a}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,exports:{}};return n[t].call(r.exports,r,r.exports,i),r.exports}i.m=n,t=[],i.O=(e,r,n,o)=>{if(!r){var a=1/0;for(s=0;s<t.length;s++){for(var[r,n,o]=t[s],l=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](r[c])))?r.splice(c--,1):(l=!1,o<a&&(a=o));if(l){t.splice(s--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,n,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},r=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);i.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var l=2&n&&t;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,i.d(o,a),o},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};i.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[a,l,c]=r,u=0;if(a.some((e=>0!==t[e]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(c)var s=c(i)}for(e&&e(r);u<a.length;u++)o=a[u],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(s)},r=self.webpackChunkclient=self.webpackChunkclient||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),i.nc=void 0;var a=i.O(void 0,[935],(()=>i(5065)));a=i.O(a)})();
//# sourceMappingURL=main.1d9a1b96dbe7fa591a44.js.map