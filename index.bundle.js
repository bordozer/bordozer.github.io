!function(e){function t(t){for(var r,l,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={3:0,1:0,2:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;a.push([51,0]),n()}({10:function(e,t,n){e.exports=n.p+"images/b6ec19dba5f6c2dce085b0369d5a4186-about.png"},12:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(0),o=n.n(r),a=n(10),l=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,e);var t,n,r,a,i=(t=m,function(){var e,n=h(t);if(p()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function m(){return c(this,m),i.apply(this,arguments)}return n=m,(r=[{key:"componentDidMount",value:function(){document.getElementById("about-img").src=l.a}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-12 text-center"},o.a.createElement("h4",null,"About Battleship game project"))),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-1"}),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("p",null,"My first ReactJS application. ",o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/bordozer/sea-battle",target:"_blank"},"The source code on GitHub"),"."),o.a.createElement("p",null,o.a.createElement("small",null,"Battleship (also Battleships or Sea Battle) is a strategy type guessing game for two players. It is played on ruled grids on which each player's fleet of ships are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling \"shots\" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.",o.a.createElement("br",null),o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Battleship_(game)",target:"_blank"},"See more on WIKI"))),o.a.createElement("p",{className:"text-center"},o.a.createElement("img",{id:"about-img",alt:"Help",width:"1000px"}))),o.a.createElement("div",{className:"col-sm-1"})))}}])&&s(n.prototype,r),a&&s(n,a),m}(r.Component)},13:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ae}));var r=n(0),o=n.n(r),a=n(9),l=n.n(a),i=["A","B","C","D","E","F","G","H","I","J","K","L"],c=function(e){for(var t=[],n=e-1;n>=0;n--){t[n]=[];for(var r=e-1;r>=0;r--)t[n][r]={id:i[r]+(n+1),x:r,y:n,xLabel:i[r],yLabel:n+1,ship:null,isHit:!1,isShipNeighbor:!1,isKilledShipNeighborCell:!1}}return t},s=function(e){return e.filter((function(e){return e.damage<e.size})).sort((function(e,t){return t.size-e.size}))[0]},u=function(e){return e.filter((function(e){return e.damage<e.size})).length},f=function(e){return e[Math.floor(Math.random()*e.length)]},p=function(e,t){for(var n=[],r=0;r<e.length;r++)for(var o=0;o<e.length;o++){var a=e[r][o];t(a)&&n.push(a)}return n},h=function(e){for(var t=0,n=0;n<e.length;n++)for(var r=0;r<e.length;r++){var o=e[n][r];m(o)||t++}return t},m=function(e){return e&&!e.isHit&&!e.isKilledShipNeighborCell},y=function(e){return p(e,m)},d=function(e){return f(p(e,m))},b=n(5);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(r,e);var t,n=(t=r,function(){var e,n=x(t);if(w()){var r=x(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return E(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),O(S(t=n.call(this,e)),"_collectArrayRooms",(function(e,n,r,o){for(var a=[],l=0;l<=e.length-n;l++){var i=e.slice(l,l+n);if(i.length<n)break;for(var c=!0,s=0;s<i.length-1;s++)if(o(i,s)){c=!1;break}c&&(a.push({roomId:r+"_"+i.map((function(e){return e.id})).join("-"),roomCells:i}),l+=t.state.step-1)}return a})),O(S(t),"_getVFreeRooms",(function(e,n,r){var o=[],a=p(e,r),l=b.a.groupBy(a,(function(e){return e.x}));return Object.keys(l).forEach((function(e){var r=l[e],a=t._collectArrayRooms(r,n,"V",(function(e,t){return e[t].y+1!==e[t+1].y}));a.length>0&&(o=o.concat(a))})),o})),O(S(t),"_getHFreeRooms",(function(e,n,r){var o=[],a=p(e,r),l=b.a.groupBy(a,(function(e){return e.y}));return Object.keys(l).forEach((function(e){var r=l[e],a=t._collectArrayRooms(r,n,"H",(function(e,t){return e[t].x+1!==e[t+1].x}));a.length>0&&(o=o.concat(a))})),o})),O(S(t),"collectRooms",(function(e,n,r){var o=t._getHFreeRooms(e,n,r),a=t._getVFreeRooms(e,n,r);o.concat(a);return{hFreeRooms:o,vFreeRooms:a}})),t.state={step:e},t}return r}(r.Component);function R(e){return!e.ship&&!e.isShipNeighbor}function C(e,t,n){N(e,t).forEach((function(e){e[n]=!0}))}var N=function(e,t){for(var n=[],r=t.y-1;r<=t.y+1;r++)if(e[r])for(var o=t.x-1;o<=t.x+1;o++){var a=e[r][o];a&&!a.ship&&n.push(a)}return n},P=function(e,t){for(var n=[],r=0;r<t.length;r++)for(var o=0;o<t.length;o++){var a=t[r][o];a.ship&&a.ship.id===e.id&&n.push(a)}n.forEach((function(e){C(t,e,"isKilledShipNeighborCell")}))};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){var n=[];return e[t.y-1]&&e[t.y][t.x]&&n.push(e[t.y-1][t.x]),e[t.y+1]&&e[t.y][t.x]&&n.push(e[t.y+1][t.x]),e[t.y]&&e[t.y][t.x-1]&&n.push(e[t.y][t.x-1]),e[t.y]&&e[t.y][t.x+1]&&n.push(e[t.y][t.x+1]),n.filter((function(e){return m(e)}))}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(r,e);var t,n=(t=r,function(){var e,n=H(t);if(z()){var r=H(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return L(this,e)});function r(){var e;k(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return M(A(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){if(1===t.length)return D(e,t[0]);var n=t[0],r=t[t.length-1];if(n.x===r.x){var o=t.sort((function(e,t){return e.y-t.y}));n=o[0],r=o[o.length-1];var a=[];return e[n.y-1]&&a.push(e[n.y-1][n.x]),e[r.y+1]&&a.push(e[r.y+1][r.x]),a.filter((function(e){return m(e)}))}var l=t.sort((function(e,t){return e.x-t.x}));return n=l[0],r=l[l.length-1],[e[n.y][n.x-1],e[r.y][r.x+1]].filter((function(e){return m(e)}))})),e}return r}(r.Component);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(r,e);var t,n=(t=r,function(){var e,n=J(t);if(G()){var r=J(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return W(this,e)});function r(){var e;I(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return U(Y(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e){return y(e)})),e}return r}(r.Component);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(r,e);var t,n=(t=r,function(){var e,n=te(t);if(ee()){var r=te(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Z(this,e)});function r(){var e;Q(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return ne($(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){var n=s(t).size,r=new _(n).collectRooms(e,n,(function(e){return!e.isHit&&!e.isKilledShipNeighborCell})),o=r.hFreeRooms,a=r.vFreeRooms,l=o.concat(a).flatMap((function(e){var t=e.roomCells;if(Math.floor(t.length/n)>1){for(var r=[],o=n-1;o<t.length;o+=n)r.push(t[o]);return r}return t[Math.floor(t.length/2)]})),i=[];return l.forEach((function(e){0===i.filter((function(t){return t.x===e.x&&t.y===e.y})).length&&i.push(e)})),i})),e}return r}(r.Component);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?ce(e):t}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){var t=e.flatMap((function(e){return e.roomCells})),n={};return t.forEach((function(t){var r=0;e.forEach((function(e){e.roomCells.forEach((function(e){e.id===t.id&&r++}))})),n[t.id]={id:t.id,count:r,cell:t},r=0})),n}function he(e){var t=[],n=0;return Object.keys(e).forEach((function(r){e[r].count===n&&t.push(e[r].cell),e[r].count>n&&(n=e[r].count,(t=[]).push(e[r].cell))})),t}var me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(r,e);var t,n=(t=r,function(){var e,n=ue(t);if(se()){var r=ue(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return ie(this,e)});function r(){var e;ae(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return fe(ce(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){var n=s(t).size,r=new _(1).collectRooms(e,n,(function(e){return!e.isHit&&!e.isKilledShipNeighborCell})),o=r.hFreeRooms,a=r.vFreeRooms;return he(pe(o.concat(a)))})),e}return r}(r.Component);function ye(e,t){return(new re).getCells(e,t)}function de(e,t){return(new me).getCells(e,t)}var be=function(e,t,n,r){if(n.length>0)return f((new B).getCells(e,n));if(h(e)<10)return d(e);if(1===s(t).size)return d(e);var o=[];return 1===r&&(o=function(e){return(new V).getCells(e)}(e)),2===r&&(o=ye(e,t)),3===r&&0===(o=de(e,t)).length&&(o=ye(e,t)),0===o.length&&(o=d(e)),f(o)};function ge(e){return e.highlightBattleArea?"bg-success":"bg-secondary"}function ve(e,t){var n=[],r=t.isPlayer,o=!t.isPlayer,a=t.stage,l=t.lastShot,i=l&&e.x===l.x&&e.y===l.y;(null===t.stage||o&&"STEP_READY_TO_START"===a)&&(n.push("cell-disabled"),n.push("fa fa-anchor")),o&&"STEP_FINAL"===a&&e.ship&&!e.isHit&&(n.push("cell-ship"),n.push("fa fa-smile-o")),r&&e.ship&&!e.isHit&&(n.push("cell-ship"),n.push("fa fa-anchor")),e.ship&&e.isHit&&e.ship.damage<e.ship.size&&(n.push("cell-ship-wounded"),n.push("fa fa-times")),e.ship&&e.isHit&&e.ship.damage===e.ship.size&&(n.push("cell-ship-killed"),n.push("fa fa-times")),e.ship||e.isHit||!e.isKilledShipNeighborCell||n.push("cell-not-hittable"),i||e.ship||!e.isHit||(n.push("cell-missed-hit"),n.push("cell-not-hittable"),n.push("fa fa-circle-o")),i&&(n.push("text-primary"),n.push("fa fa-crosshairs")),i&&!e.ship&&n.push("cell-not-hittable");var c=t.recommendedShots.shots,s=t.recommendedShots.strategy;return c.filter((function(t){return t.x===e.x&&t.y===e.y})).length>0&&(n.push("cell-recommended-shot"),"level3"===s&&n.push("fa fa-bullseye"),"level2"===s&&n.push("fa fa-dot-circle-o")),n}function Ee(e,t,n,r){var a=function(e,t){var n=ge(t),r=[];return r.push(o.a.createElement("div",{key:"hh-"+e,className:"col-sm-1 text-center align-middle text-light bg-secondary border border-secondary cell-base battle-field-border "+n},e)),r}(t[0].yLabel,r),l=[];return l.push(o.a.createElement("div",{key:"line-"+e,className:"row"},a,function(e,t,n,r){var a=this,l=[];return t.forEach((function(t){l.push(o.a.createElement("div",{key:e+"_"+t.x+"-"+t.y,className:"col-sm-1 text-center align-middle cell-base cell-text "+ve(t,r).join(" "),onClick:n.bind(a,t),title:t.xLabel+""+t.yLabel+(r.isPlayer&&t.ship?" - "+t.ship.name:"")}))})),l}(e,t,n,r),a)),l}function Se(e,t,n){var r=[];return r.push(o.a.createElement("div",{key:"h-"+e,className:"row"},function(e,t){var n=[],r=ge(t);return n.push(o.a.createElement("div",{key:"v-left",className:"col-sm-1 border border-secondary cell-base "+r})),e.forEach((function(e){n.push(o.a.createElement("div",{key:"v-"+e.x,className:"col-sm-1 text-center text-light bg-secondary cell-base battle-field-border "+r},e.xLabel))})),n.push(o.a.createElement("div",{key:"v-right",className:"col-sm-1 bg-secondary border border-secondary cell-base "+r})),n}(t[0],n))),r}var we=function(e){for(var t=e.cells,n=e.onCellClick,r=e.options,a=[],l=t.length-1;l>=0;l--)a.push(Ee(l,t[l],n,r));return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},Se("top",t,r),a,Se("bottom",t,r)))},xe=function(e){var t=e.difficulty,n=e.showShotHints,r=e.onDifficultyChange,a=e.onShowShotHintsChange;return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-muted"},"HINTS")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-success"},"EASY")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-warning"},"MEDIUM")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-danger"},"HARD"))),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-3 small"},o.a.createElement("input",{type:"checkbox",name:"showShotHints",className:"form-control",checked:n,value:"true",onChange:a})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"1",checked:1===t,onChange:r.bind(void 0,1)})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"2",checked:2===t,onChange:r.bind(void 0,2)})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"3",checked:3===t,onChange:r.bind(void 0,3)}))))};var Oe=function(e){var t=e.ships,n=e.isPlayer,r=e.winner;if(!t||0===t.length)return"";var a=function(e){return e.sort((function(e,t){return t.size-e.size}))[0]}(t),l=[];t.forEach((function(e){l.push(o.a.createElement("div",{key:"ship-stat-line-"+e.id,className:"row mt-10"},o.a.createElement("div",{key:"ship-stat-col-"+e.id,className:"col-sm-12"},function(e,t,n){for(var r=[],a=1;a<=t;a++){var l=a<=e.size,i=e.damage===e.size;r.push(o.a.createElement("div",{key:"ship-stat-line-cell-"+e.id+"-"+a+"-"+(n?"-player":"-enemy"),className:"stat-cell"+(l?" stat-cell-ship":"")+(l&&i?" stat-cell-ship-killed":"")+(n?" pull-right":""),title:e.name}," "))}return r}(e,a.size,n))))}));var i=r&&(n&&"enemy"===r||!n&&"player"===r);return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-12 text-center"+(i?" looser text-warning":"")},n?"Player":"Enemy")),l)};var _e=function(e){var t=e.logs;return o.a.createElement("div",null,function(e){var t=[],n=0;return e.sort((function(e,t){return t.time-e.time})).forEach((function(e){t.push(o.a.createElement("div",{key:"log-row-"+n,className:"row"},o.a.createElement("div",{key:"log-row-col-"+n,className:"col-sm-12 small text-muted"},e.text))),n++})),t}(t))};function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pe(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?je(e):t}function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(m,e);var t,n,r,a,i=(t=m,function(){var e,n=Te(t);if(ke()){var r=Te(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Pe(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),Le(je(t=i.call(this,e)),"playerCellSetup",(function(e){})),Le(je(t),"startBattle",(function(){var e=Math.floor(Math.random()*Math.floor(2)),n=[t.createLogRecord("The battle has began! The first move: "+(0===e?"player":"enemy"))];1===e&&t.enemyMove();var r=t.randomizeBattleFieldWithShips();t.setState({enemy:{cells:r.cells,ships:r.ships,lastShot:null,damagedShipCells:[]},gameplay:{step:"STEP_BATTLE",currentMove:0===e?"player":"enemy",winner:null},logs:n})})),Le(je(t),"playerShot",(function(e){if("enemy"!==t.state.gameplay.currentMove){var n=t.state.enemy.cells,r=t.state.enemy.ships,o=!1,a=n[e.y][e.x];if(a.isHit)return t.state.logs.push(t.createLogRecord("Cell "+e.xLabel+e.yLabel+" has already been hit. Chose another one.")),void t.setState({logs:t.state.logs});if(a.isKilledShipNeighborCell)return t.state.logs.push(t.createLogRecord("Cell "+e.xLabel+e.yLabel+" is a neighbor of killed ship. Chose another one.")),void t.setState({logs:t.state.logs});a.isHit=!0;var i=t.state.enemy.damagedShipCells,c=a.ship;c||(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - missed")),t.enemyMove()),c&&(c.damage++,c.damage===c.size?(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - killed "+"#".repeat(c.size))),P(c,n),i=[]):(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - damaged")),i.push(a)),(o=0===u(r))&&(l.a.fire("You have won","You're just lucky. You will have no chance next time","success"),t.state.logs.push(t.createLogRecord("Player won")))),t.setState({player:{cells:t.state.player.cells,ships:t.state.player.ships,lastShot:e,damagedShipCells:t.state.player.damagedShipCells},enemy:{cells:t.state.enemy.cells,ships:t.state.enemy.ships,lastShot:t.state.enemy.lastShot,damagedShipCells:i},gameplay:{step:o?"STEP_FINAL":t.state.gameplay.step,currentMove:o?null:c?"player":"enemy",winner:o?"player":null}})}})),Le(je(t),"enemyShot",(function(){var e=t.state.player.cells,n=t.state.player.ships,r=t.state.player.damagedShipCells,o=!1,a=be(e,n,r,t.state.config.difficulty);a.isHit=!0;var i=a.ship;i&&(i.damage++,i.damage===i.size?(r=[],t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - killed "+"#".repeat(i.size))),P(i,e),(o=0===u(n))&&l.a.fire("Enemy has won!","You are loser. Live with this.","error")):(r.push(a),t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - damaged"))),o?t.state.logs.push(t.createLogRecord("Enemy won")):t.enemyMove()),i||t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - missed")),t.setState({player:{cells:t.state.player.cells,ships:t.state.player.ships,lastShot:t.state.player.lastShot,damagedShipCells:r},enemy:{cells:t.state.enemy.cells,ships:t.state.enemy.ships,lastShot:a,damagedShipCells:t.state.enemy.damagedShipCells},gameplay:{step:o?"STEP_FINAL":t.state.gameplay.step,currentMove:o?null:i?"enemy":"player",winner:o?"enemy":null}})})),Le(je(t),"enemyMove",(function(){window.setTimeout((function(){return t.enemyShot()}),500)})),Le(je(t),"randomizeBattleFieldWithShips",(function(){return function(e){var t=[{id:11,name:"Aquila (patrol boat)",size:1,cells:[],damage:0},{id:12,name:"Tornado (patrol boat)",size:1,cells:[],damage:0},{id:13,name:"Pegasus (patrol boat)",size:1,cells:[],damage:0},{id:14,name:"Hercules (patrol boat)",size:1,cells:[],damage:0},{id:21,name:"Annapolis (destroyer)",size:2,cells:[],damage:0},{id:22,name:"St Francis (destroyer)",size:2,cells:[],damage:0},{id:31,name:"Aaron Ward (destroyer)",size:2,cells:[],damage:0},{id:32,name:"Hobart (cruiser)",size:3,cells:[],damage:0},{id:33,name:"Canberra (cruiser)",size:3,cells:[],damage:0},{id:41,name:"Missouri (battleship)",size:4,cells:[],damage:0}];return t.reverse().forEach((function(t){var n,r=t.size;if(r>1){var o=new _(1).collectRooms(e,r,R),a=o.hFreeRooms.concat(o.vFreeRooms);n=f(a)}else n={roomCells:[f(p(e,R))]};n.roomCells.forEach((function(e){e.ship=t})),n.roomCells.forEach((function(t){C(e,t,"isShipNeighbor")}))})),{cells:e,ships:t}}(c(10))})),Le(je(t),"onNewGameClick",(function(){t.setState((function(e){return t.getInitialState(e)}))})),Le(je(t),"getInitialState",(function(e){var n=t.randomizeBattleFieldWithShips();return{player:{cells:n.cells,ships:n.ships,lastShot:null,damagedShipCells:[]},enemy:{cells:c(10),ships:[],lastShot:null,damagedShipCells:[]},config:{showShotHints:!e||e.config.showShotHints,difficulty:e?e.config.difficulty:3},gameplay:{step:"STEP_READY_TO_START",currentMove:null,winner:null},logs:[t.createLogRecord("New game is initialized. Click START button when ready.")]}})),Le(je(t),"createLogRecord",(function(e){return{time:new Date,text:e}})),Le(je(t),"onDifficultyChange",(function(e){t.setState({config:{showShotHints:t.state.config.showShotHints,difficulty:e}})})),Le(je(t),"onShowShotHintsChange",(function(e){var n=e.target.checked;t.setState({config:{showShotHints:n,difficulty:t.state.config.difficulty}})})),t.state=t.getInitialState(null),t}return n=m,(r=[{key:"componentDidMount",value:function(){window.addEventListener("load",this.onNewGameClick)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.gameplay.step,t=this.state.gameplay.currentMove,n=this.state.config.difficulty,r={isPlayer:!0,stage:e,lastShot:this.state.enemy.lastShot,currentMove:t,highlightBattleArea:"STEP_BATTLE"===e&&"enemy"===t,recommendedShots:{shots:[],strategy:null}},a=this.state.config.showShotHints&&"STEP_BATTLE"===e?function(e,t,n,r){if(n.length>0)return{shots:(new B).getCells(e,n),strategy:"level3"};if(1===r)return{shots:[],strategy:"level1"};if(h(e)<10)return{shots:[],strategy:"no-strategy-for-first-shots"};if(1===s(t).size)return{shots:[],strategy:"single-ship-no-strategy"};if(2===r)return{shots:ye(e,t),strategy:"level2"};if(3===r){var o=de(e,t);return o.length>0?{shots:o,strategy:"level3"}:{shots:ye(e,t),strategy:"level2"}}return{shots:[],strategy:"no-strategy-stub"}}(this.state.enemy.cells,this.state.enemy.ships,this.state.enemy.damagedShipCells,n):{shots:[],strategy:"hits-are-disabled"},l={isPlayer:!1,stage:e,lastShot:this.state.player.lastShot,recommendedShots:a,highlightBattleArea:"STEP_BATTLE"===e&&"player"===t,currentMove:t};return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-1"},o.a.createElement(Oe,{ships:this.state.player.ships,isPlayer:!0,winner:this.state.gameplay.winner})),o.a.createElement("div",{className:"col-sm-5"+(r.highlightBattleArea?"":" disabledArea"),disabled:r.highlightBattleArea},o.a.createElement(we,{cells:this.state.player.cells,options:r,onCellClick:this.playerCellSetup})),o.a.createElement("div",{className:"col-sm-5"+(l.highlightBattleArea?"":" disabledArea"),disabled:l.highlightBattleArea},o.a.createElement(we,{cells:this.state.enemy.cells,options:l,onCellClick:this.playerShot})),o.a.createElement("div",{className:"col-sm-1"},o.a.createElement(Oe,{ships:this.state.enemy.ships,isPlayer:!1,winner:this.state.gameplay.winner}))),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement(xe,{difficulty:n,showShotHints:this.state.config.showShotHints,onDifficultyChange:this.onDifficultyChange,onShowShotHintsChange:this.onShowShotHintsChange})),o.a.createElement("div",{className:"col-sm-4 text-center btn-lg"},o.a.createElement("button",{className:"bg-primary button-rounded",onClick:this.onNewGameClick},"New game"),o.a.createElement("button",{className:"bg-primary button-rounded",onClick:this.startBattle,disabled:"STEP_READY_TO_START"!==this.state.gameplay.step},"Start")),o.a.createElement("div",{className:"col-sm-4"})),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement(_e,{logs:this.state.logs}))))}}])&&Ce(n.prototype,r),a&&Ce(n,a),m}(r.Component)},49:function(e,t,n){var r=n(21),o=n(50);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},l=(r(o,a),o.locals?o.locals:{});e.exports=l},50:function(e,t,n){(t=n(22)(!1)).push([e.i,"body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.mt-10 {\n    margin-top: 10px !important;\n}\n\n.mb-10 {\n    margin-bottom: 10px !important;\n}\n\n.cell-text {\n    padding-top: 12px;\n}\n.battle-field-border {\n    padding-top: 6px;\n}\n\n.cell-base {\n    color: silver;\n    background-color: azure;\n    font-size: 20px;\n    border: 1px solid silver;\n    border-radius: 4px;\n    min-width: 30px;\n    height: 40px;\n}\n\n.cell-ship {\n    color: yellow;\n    background-color: cadetblue;\n    box-shadow: 2px 2px grey;\n}\n\n.cell-ship-wounded {\n    color: white;\n    background-color: coral;\n}\n\n.cell-ship-killed {\n    color: white;\n    background-color: crimson;\n}\n\n.cell-missed-hit {\n    color: darkseagreen;\n}\n\n.cell-disabled {\n    background-color: ghostwhite;\n}\n\n.cell-not-hittable {\n    background-color: #dfefef;\n}\n\n.cell-recommended-shot {\n    color: #c1e8e8;\n}\n\n.stat-cell {\n    width: 16px;\n    height: 16px;\n    border-bottom-color: black;\n    float: left;\n    margin: 1px;\n}\n\n.stat-cell-ship {\n    background-color: cadetblue;\n}\n\n.stat-cell-ship-killed {\n    background-color: crimson;\n}\n\n.disabledArea {\n    pointer-events: none;\n    opacity: 0.70;\n}\n\n.button-rounded {\n    border-radius: 7px;\n    width: 150px;\n}\n\n.looser{\n    text-decoration: line-through;\n}\n",""]),e.exports=t},51:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(23),l=n.n(a),i=n(15),c=n(6),s=n(13),u=n(12);function f(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"row bg-light"},o.a.createElement("div",{className:"col-sm-6 text-center"},o.a.createElement(p,{activeOnlyWhenExact:!0,to:"/",label:"Battleship game"})),o.a.createElement("div",{className:"col-sm-6 text-center"},o.a.createElement(p,{activeOnlyWhenExact:!0,to:"/about",label:"About"}))),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/"},o.a.createElement(s.default,null)),o.a.createElement(c.a,{exact:!0,path:"/about"},o.a.createElement(u.default,null)))))}function p(e){var t=e.label,n=e.to,r=e.activeOnlyWhenExact,a=Object(c.f)({path:n,exact:r});return o.a.createElement("div",null,o.a.createElement(i.b,{to:n,style:{textDecoration:"none"},className:a?"active text-danger":"text-dark"},t))}n(47),n(49);n(34),l.a.render(o.a.createElement(f,null),document.getElementById("js-page-context"))}});