(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(t,e,r){var map={"./accessories.md":[230,7],"./coffee.md":[231,8]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=228,t.exports=n},235:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(37),r(14),r(26),r(27),{layout:"guide",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,o=t.route,c=n.slug,e.next=4,r(228)("./".concat(c,".md"));case 4:return l=e.sent,e.abrupt("return",{attributes:l.attributes,html:l.html,currentUrl:o.path});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.attributes.title," | Nuxt.js PWA Coffee Shop")}}}),c=r(24),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-screen-2xl mx-auto px-10"},[r("h2",{staticClass:"text-2xl font-semibold font-mono mb-4"},[t._v(t._s(t.attributes.title))]),t._v(" "),r("div",{staticClass:"markdown",domProps:{innerHTML:t._s(t.html)}}),t._v(" "),r("div",{staticClass:"grid grid-cols-2 sm:grid-cols-3 gap-8"},t._l(t.attributes.products,(function(e,n){return r("article",{key:n},[r("img",{staticClass:"mx-auto",attrs:{src:"../"+e.image,alt:e.name}}),t._v(" "),r("p",{staticClass:"font-mono"},[t._v(t._s(e.name))]),t._v(" "),r("button",{staticClass:"buy-button snipcart-add-item mt-6 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold rounded-full shadow-offset hover:shadow-lg transition duration-300",attrs:{"data-item-id":e.sku,"data-item-name":e.name,"data-item-price":e.price,"data-item-image":e.image,"data-item-url":"https://snipcart-nuxtjs-pwa.netlify.com"+t.currentUrl}},[t._v(t._s("$"+e.price))])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);