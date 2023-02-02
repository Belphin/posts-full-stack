(()=>{"use strict";var e,r={958:(e,r,t)=>{var n=t(294),o=t(745),i=t(113);const l=function(e){var r=e.post;return n.createElement("div",null,r.title)};var u=t(378),a=(0,u.createApi)({reducerPath:"postAPI",baseQuery:(0,u.fetchBaseQuery)({baseUrl:"http://localhost:5000/api"}),endpoints:function(e){return{fetchAllPosts:e.query({query:function(e){var r=e.limit,t=void 0===r?5:r,n=e.page;return{url:"/posts",params:{limit:t,page:void 0===n?1:n}}}})}}});const c=function(){var e=a.useFetchAllPostsQuery({limit:5,page:1}),r=e.data,t=e.error,o=e.isLoading;return n.createElement("div",null,o&&n.createElement("div",null,"Loading..."),t&&n.createElement("div",null,"Error"),null==r?void 0:r.posts.map((function(e){return n.createElement(l,{key:e._id,post:e})})))};var f=t(791),s=t(268);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var p,v,y,m=(0,f.UY)((p={},v=a.reducerPath,y=a.reducer,(v=function(e){var r=function(e,r){if("object"!==d(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(r)?r:String(r)}(v))in p?Object.defineProperty(p,v,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[v]=y,p)),b=o.createRoot(document.getElementById("root")),g=(0,s.configureStore)({reducer:m,middleware:function(e){return e().concat(a.middleware)}});b.render(n.createElement(i.Provider,{store:g},n.createElement(c,null)))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var l=1/0;for(f=0;f<e.length;f++){for(var[t,o,i]=e[f],u=!0,a=0;a<t.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](t[a])))?t.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(r=c)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,o,i]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[l,u,a]=t,c=0;if(l.some((r=>0!==e[r]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var f=a(n)}for(r&&r(t);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},t=self.webpackChunkclient=self.webpackChunkclient||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[735],(()=>n(958)));o=n.O(o)})();
//# sourceMappingURL=main.a6f7d78ca043c3c25adf.js.map