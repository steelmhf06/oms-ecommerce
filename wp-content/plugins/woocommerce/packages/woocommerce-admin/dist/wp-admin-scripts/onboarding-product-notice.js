this.wc=this.wc||{},this.wc.onboardingProductNotice=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=828)}({1:function(t,e){!function(){t.exports=this.wp.i18n}()},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return p})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return y})),n.d(e,"f",(function(){return m}));var r=n(54),o=n.n(r),u=n(1),i=["wcAdminSettings","preloadSettings"],c="object"===("undefined"==typeof wcSettings?"undefined":o()(wcSettings))?wcSettings:{},d=Object.keys(c).reduce((function(t,e){return i.includes(e)||(t[e]=c[e]),t}),{}),f=d.adminUrl,s=(d.countries,d.currency),a=d.locale,l=d.orderStatuses,p=(d.siteTitle,d.wcAssetUrl);function b(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(u.__)("Mutable settings should be accessed via data store."));var r=d.hasOwnProperty(t)?d[t]:e;return n(r,e)}function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(u.__)("Mutable settings should be mutated via data store."));d[t]=n(e)}function m(t){return(f||"")+t}},25:function(t,e){!function(){t.exports=this.wp.data}()},54:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},71:function(t,e,n){"use strict";function r(t){"complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t()}n.d(e,"a",(function(){return r}))},828:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(25),u=n(71),i=n(17);Object(u.a)((function(){Object(o.dispatch)("core/notices").createSuccessNotice(Object(r.__)("🎉 Congrats on adding your first product!",'woocommerce'),{id:"WOOCOMMERCE_ONBOARDING_PRODUCT_NOTICE",actions:[{url:Object(i.f)("admin.php?page=wc-admin"),label:Object(r.__)("Continue setup.",'woocommerce')}]})}))}});
