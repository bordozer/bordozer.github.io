!function(t){function e(e){for(var r,c,i=e[0],f=e[1],a=e[2],p=0,s=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(t[r]=f[r]);for(l&&l(e);s.length;)s.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var f=n[i];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={2:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=f;u.push([11,0]),n()}({11:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(0),o=n.n(r);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,r,u,s=(e=y,function(){var t,n=p(e);if(l()){var r=p(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function y(){return c(this,y),s.apply(this,arguments)}return n=y,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 text-center text-muted"},o.a.createElement("h3",null,"Main page"))))}}])&&i(n.prototype,r),u&&i(n,u),y}(r.Component)}});