!function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],f=0,h=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);h.length;)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([13,0]),n()}({13:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ae}));var r=n(0),o=n.n(r),a=n(9),i=n.n(a),l=["A","B","C","D","E","F","G","H","I","J","K","L"],s=function(e){for(var t=[],n=e-1;n>=0;n--){t[n]=[];for(var r=e-1;r>=0;r--)t[n][r]={id:l[r]+(n+1),x:r,y:n,xLabel:l[r],yLabel:n+1,ship:null,isHit:!1,isShipNeighbor:!1,isKilledShipNeighborCell:!1}}return t},c=function(e){return e.filter((function(e){return e.damage<e.size})).sort((function(e,t){return t.size-e.size}))[0]},u=function(e){return e.filter((function(e){return e.damage<e.size})).length},f=function(e){return e[Math.floor(Math.random()*e.length)]},h=function(e,t){for(var n=[],r=0;r<e.length;r++)for(var o=0;o<e.length;o++){var a=e[r][o];t(a)&&n.push(a)}return n},p=function(e){for(var t=0,n=0;n<e.length;n++)for(var r=0;r<e.length;r++){var o=e[n][r];y(o)||t++}return t},y=function(e){return e&&!e.isHit&&!e.isKilledShipNeighborCell},m=function(e){return h(e,y)},d=function(e){return f(h(e,y))},b=n(5);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(r,e);var t,n=(t=r,function(){var e,n=C(t);if(w()){var r=C(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),x(E(t=n.call(this,e)),"_collectArrayRooms",(function(e,n,r,o){for(var a=[],i=0;i<=e.length-n;i++){var l=e.slice(i,i+n);if(l.length<n)break;for(var s=!0,c=0;c<l.length-1;c++)if(o(l,c)){s=!1;break}s&&(a.push({roomId:r+"_"+l.map((function(e){return e.id})).join("-"),roomCells:l}),i+=t.state.step-1)}return a})),x(E(t),"_getVFreeRooms",(function(e,n,r){var o=[],a=h(e,r),i=b.a.groupBy(a,(function(e){return e.x}));return Object.keys(i).forEach((function(e){var r=i[e],a=t._collectArrayRooms(r,n,"V",(function(e,t){return e[t].y+1!==e[t+1].y}));a.length>0&&(o=o.concat(a))})),o})),x(E(t),"_getHFreeRooms",(function(e,n,r){var o=[],a=h(e,r),i=b.a.groupBy(a,(function(e){return e.y}));return Object.keys(i).forEach((function(e){var r=i[e],a=t._collectArrayRooms(r,n,"H",(function(e,t){return e[t].x+1!==e[t+1].x}));a.length>0&&(o=o.concat(a))})),o})),x(E(t),"collectRooms",(function(e,n,r){var o=t._getHFreeRooms(e,n,r),a=t._getVFreeRooms(e,n,r);o.concat(a);return{hFreeRooms:o,vFreeRooms:a}})),t.state={step:e},t}return r}(r.Component);function O(e){return!e.ship&&!e.isShipNeighbor}function R(e,t,n){P(e,t).forEach((function(e){e[n]=!0}))}var P=function(e,t){for(var n=[],r=t.y-1;r<=t.y+1;r++)if(e[r])for(var o=t.x-1;o<=t.x+1;o++){var a=e[r][o];a&&!a.ship&&n.push(a)}return n},N=function(e,t){for(var n=[],r=0;r<t.length;r++)for(var o=0;o<t.length;o++){var a=t[r][o];a.ship&&a.ship.id===e.id&&n.push(a)}n.forEach((function(e){R(t,e,"isKilledShipNeighborCell")}))};function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){var n=[];return e[t.y-1]&&e[t.y][t.x]&&n.push(e[t.y-1][t.x]),e[t.y+1]&&e[t.y][t.x]&&n.push(e[t.y+1][t.x]),e[t.y]&&e[t.y][t.x-1]&&n.push(e[t.y][t.x-1]),e[t.y]&&e[t.y][t.x+1]&&n.push(e[t.y][t.x+1]),n.filter((function(e){return y(e)}))}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(r,e);var t,n=(t=r,function(){var e,n=H(t);if(z()){var r=H(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return k(this,e)});function r(){var e;j(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return M(A(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){if(1===t.length)return D(e,t[0]);var n=t[0],r=t[t.length-1];if(n.x===r.x){var o=t.sort((function(e,t){return e.y-t.y}));n=o[0],r=o[o.length-1];var a=[];return e[n.y-1]&&a.push(e[n.y-1][n.x]),e[r.y+1]&&a.push(e[r.y+1][r.x]),a.filter((function(e){return y(e)}))}var i=t.sort((function(e,t){return e.x-t.x}));return n=i[0],r=i[i.length-1],[e[n.y][n.x-1],e[r.y][r.x+1]].filter((function(e){return y(e)}))})),e}return r}(r.Component);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(r,e);var t,n=(t=r,function(){var e,n=J(t);if(G()){var r=J(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return K(this,e)});function r(){var e;W(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return V(Y(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e){return m(e)})),e}return r}(r.Component);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(r,e);var t,n=(t=r,function(){var e,n=te(t);if(ee()){var r=te(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Z(this,e)});function r(){var e;Q(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return ne($(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){var n=c(t).size,r=new _(n).collectRooms(e,n,(function(e){return!e.isHit&&!e.isKilledShipNeighborCell})),o=r.hFreeRooms,a=r.vFreeRooms,i=o.concat(a).flatMap((function(e){var t=e.roomCells;if(Math.floor(t.length/n)>1){for(var r=[],o=n-1;o<t.length;o+=n)r.push(t[o]);return r}return t[Math.floor(t.length/2)]})),l=[];return i.forEach((function(e){0===l.filter((function(t){return t.x===e.x&&t.y===e.y})).length&&l.push(e)})),l})),e}return r}(r.Component);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?se(e):t}function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e){var t=e.flatMap((function(e){return e.roomCells})),n={};return t.forEach((function(t){var r=0;e.forEach((function(e){e.roomCells.forEach((function(e){e.id===t.id&&r++}))})),n[t.id]={id:t.id,count:r,cell:t},r=0})),n}function pe(e){var t=[],n=0;return Object.keys(e).forEach((function(r){e[r].count===n&&t.push(e[r].cell),e[r].count>n&&(n=e[r].count,(t=[]).push(e[r].cell))})),t}var ye=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(r,e);var t,n=(t=r,function(){var e,n=ue(t);if(ce()){var r=ue(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return le(this,e)});function r(){var e;ae(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return fe(se(e=n.call.apply(n,[this].concat(o))),"getCells",(function(e,t){var n=c(t).size,r=new _(1).collectRooms(e,n,(function(e){return!e.isHit&&!e.isKilledShipNeighborCell})),o=r.hFreeRooms,a=r.vFreeRooms;return pe(he(o.concat(a)))})),e}return r}(r.Component);function me(e,t){return(new re).getCells(e,t)}function de(e,t){return(new ye).getCells(e,t)}var be=function(e,t,n,r){if(n.length>0)return f((new F).getCells(e,n));if(p(e)<10)return d(e);if(1===c(t).size)return d(e);var o=[];return 1===r&&(o=function(e){return(new q).getCells(e)}(e)),2===r&&(o=me(e,t)),3===r&&0===(o=de(e,t)).length&&(o=me(e,t)),0===o.length&&(o=d(e)),f(o)};function ve(e){return e.highlightBattleArea?"bg-success":"bg-secondary"}function ge(e,t){var n=[],r=t.isPlayer,o=!t.isPlayer,a=t.stage,i=t.lastShot,l=i&&e.x===i.x&&e.y===i.y;(null===t.stage||o&&"STEP_READY_TO_START"===a)&&(n.push("cell-disabled"),n.push("fa fa-anchor")),o&&"STEP_FINAL"===a&&e.ship&&!e.isHit&&(n.push("cell-ship"),n.push("fa fa-smile-o")),r&&e.ship&&!e.isHit&&(n.push("cell-ship"),n.push("fa fa-anchor")),e.ship&&e.isHit&&e.ship.damage<e.ship.size&&(n.push("cell-ship-wounded"),n.push("fa fa-times")),e.ship&&e.isHit&&e.ship.damage===e.ship.size&&(n.push("cell-ship-killed"),n.push("fa fa-times")),e.ship||e.isHit||!e.isKilledShipNeighborCell||n.push("cell-not-hittable"),l||e.ship||!e.isHit||(n.push("cell-missed-hit"),n.push("cell-not-hittable"),n.push("fa fa-circle-o")),l&&(n.push("text-primary"),n.push("fa fa-crosshairs")),l&&!e.ship&&n.push("cell-not-hittable");var s=t.recommendedShots.shoots,c=t.recommendedShots.strategy;return s.filter((function(t){return t.x===e.x&&t.y===e.y})).length>0&&(n.push("cell-recommended-shot"),"level3"===c&&n.push("fa fa-bullseye"),"level2"===c&&n.push("fa fa-dot-circle-o")),n}function Se(e,t,n,r){var a=function(e,t){var n=ve(t),r=[];return r.push(o.a.createElement("div",{key:"hh-"+e,className:"col-sm-1 text-center align-middle text-light bg-secondary border border-secondary cell-base battle-field-border "+n},e)),r}(t[0].yLabel,r),i=[];return i.push(o.a.createElement("div",{key:"line-"+e,className:"row"},a,function(e,t,n,r){var a=this,i=[];return t.forEach((function(t){i.push(o.a.createElement("div",{key:e+"_"+t.x+"-"+t.y,className:"col-sm-1 text-center align-middle cell-base cell-text "+ge(t,r).join(" "),onClick:n.bind(a,t),title:t.xLabel+""+t.yLabel+(r.isPlayer&&t.ship?" - "+t.ship.name:"")}))})),i}(e,t,n,r),a)),i}function Ee(e,t,n){var r=[];return r.push(o.a.createElement("div",{key:"h-"+e,className:"row"},function(e,t){var n=[],r=ve(t);return n.push(o.a.createElement("div",{key:"v-left",className:"col-sm-1 border border-secondary cell-base "+r})),e.forEach((function(e){n.push(o.a.createElement("div",{key:"v-"+e.x,className:"col-sm-1 text-center text-light bg-secondary cell-base battle-field-border "+r},e.xLabel))})),n.push(o.a.createElement("div",{key:"v-right",className:"col-sm-1 bg-secondary border border-secondary cell-base "+r})),n}(t[0],n))),r}var we=function(e){for(var t=e.cells,n=e.onCellClick,r=e.options,a=[],i=t.length-1;i>=0;i--)a.push(Se(i,t[i],n,r));return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},Ee("top",t,r),a,Ee("bottom",t,r)))},Ce=function(e){var t=e.level,n=e.showShootHints,r=e.onDifficultyChange,a=e.onShowShootHintsChange;return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-muted"},"HINTS")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-success"},"EASY")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-warning"},"MEDIUM")),o.a.createElement("div",{className:"col-sm-3 text-center small"},o.a.createElement("span",{className:"text-danger"},"HARD"))),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-3 small"},o.a.createElement("input",{type:"checkbox",name:"showShootHints",className:"form-control",checked:n,value:"true",onChange:a})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"1",checked:1===t,onChange:r.bind(void 0,1)})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"2",checked:2===t,onChange:r.bind(void 0,2)})),o.a.createElement("div",{className:"col-sm-3 text-center"},o.a.createElement("input",{type:"radio",name:"difficulty",className:"form-control",value:"3",checked:3===t,onChange:r.bind(void 0,3)}))))};var xe=function(e){var t=e.ships,n=e.isPlayer;if(!t||0===t.length)return"";var r=function(e){return e.sort((function(e,t){return t.size-e.size}))[0]}(t),a=[];return t.forEach((function(e){a.push(o.a.createElement("div",{key:"ship-stat-line-"+e.id,className:"row mt-10"},o.a.createElement("div",{key:"ship-stat-col-"+e.id,className:"col-sm-12"},function(e,t,n){for(var r=[],a=1;a<=t;a++){var i=a<=e.size,l=e.damage===e.size;r.push(o.a.createElement("div",{key:"ship-stat-line-cell-"+e.id+"-"+a+"-"+(n?"-player":"-enemy"),className:"stat-cell"+(i?" stat-cell-ship":"")+(i&&l?" stat-cell-ship-killed":"")+(n?" pull-right":""),title:e.name}," "))}return r}(e,r.size,n))))})),o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-12 text-center"},n?"Player":"Enemy")),a)};var _e=function(e){var t=e.logs;return o.a.createElement("div",null,function(e){var t=[],n=0;return e.sort((function(e,t){return t.time-e.time})).forEach((function(e){t.push(o.a.createElement("div",{key:"log-row-"+n,className:"row"},o.a.createElement("div",{key:"log-row-col-"+n,className:"col-sm-12 small text-muted"},e.text))),n++})),t}(t))};function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ne(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?Le(e):t}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function je(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(y,e);var t,n,r,a,l=(t=y,function(){var e,n=Te(t);if(je()){var r=Te(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Ne(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),ke(Le(t=l.call(this,e)),"playerCellSetup",(function(e){})),ke(Le(t),"startBattle",(function(){var e=t.randomizeBattleFieldWithShips(),n=Math.floor(Math.random()*Math.floor(2));t.state.logs.push(t.createLogRecord("The battle has began! The first move: "+(0===n?"player":"enemy")+". Kill'em all under Jolly Roger!")),1===n&&t.enemyMove(),t.setState({enemyCells:e.cells,enemyShips:e.ships,step:"STEP_BATTLE",currentMove:0===n?"player":"enemy",logs:t.state.logs})})),ke(Le(t),"playerShot",(function(e){if("enemy"!==t.state.currentMove){var n=t.state.step,r=t.state.enemyLastShot,o=t.state.enemyCells,a=t.state.enemyShips,l=o[e.y][e.x];if(l.isHit)return t.state.logs.push(t.createLogRecord("Cell "+e.xLabel+e.yLabel+" has already been hit. Chose another one.")),void t.setState({logs:t.state.logs});if(l.isKilledShipNeighborCell)return t.state.logs.push(t.createLogRecord("Cell "+e.xLabel+e.yLabel+" is a neighbor of killed ship. Chose another one.")),void t.setState({logs:t.state.logs});l.isHit=!0;var s=t.state.enemyWoundedShipCells,c=l.ship;c||(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - missed")),t.enemyMove()),c&&(c.damage++,c.damage===c.size?(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - killed "+"#".repeat(c.size))),N(c,o),s=[]):(t.state.logs.push(t.createLogRecord("Player: "+e.xLabel+e.yLabel+" - damaged")),s.push(l)),0===u(a)&&(i.a.fire("You have won","You're just lucky. You will have no chance next time","success"),t.state.logs.push(t.createLogRecord("Player won")),n="STEP_FINAL")),t.setState({enemyCells:t.state.enemyCells,playerLastShot:e,enemyLastShot:r,enemyWoundedShipCells:s,currentMove:c?"player":"enemy",logs:t.state.logs,step:n})}})),ke(Le(t),"enemyShot",(function(){var e=t.state.playerCells,n=t.state.playerShips,r=t.state.playerWoundedShipCells,o=!1,a=be(e,n,r,t.state.difficultyLevel);a.isHit=!0;var l=a.ship;l&&(l.damage++,l.damage===l.size?(r=[],t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - killed "+"#".repeat(l.size))),N(l,e),0===u(n)&&(i.a.fire("Enemy has won!","You are loser. Live with this.","error"),o=!0)):(r.push(a),t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - damaged"))),o?t.state.logs.push(t.createLogRecord("Enemy won")):t.enemyMove()),l||t.state.logs.push(t.createLogRecord("Enemy: "+a.xLabel+a.yLabel+" - missed")),t.setState({step:o?"STEP_FINAL":t.state.step,enemyLastShot:a,currentMove:l?"enemy":"player",playerWoundedShipCells:r})})),ke(Le(t),"enemyMove",(function(){window.setTimeout((function(){return t.enemyShot()}),500)})),ke(Le(t),"randomizeBattleFieldWithShips",(function(){return function(e){var t=[{id:11,name:"Aquila (patrol boat)",size:1,cells:[],damage:0},{id:12,name:"Tornado (patrol boat)",size:1,cells:[],damage:0},{id:13,name:"Pegasus (patrol boat)",size:1,cells:[],damage:0},{id:14,name:"Hercules (patrol boat)",size:1,cells:[],damage:0},{id:21,name:"Annapolis (destroyer)",size:2,cells:[],damage:0},{id:22,name:"St Francis (destroyer)",size:2,cells:[],damage:0},{id:31,name:"Aaron Ward (destroyer)",size:2,cells:[],damage:0},{id:32,name:"Hobart (cruiser)",size:3,cells:[],damage:0},{id:33,name:"Canberra (cruiser)",size:3,cells:[],damage:0},{id:41,name:"Missouri (battleship)",size:4,cells:[],damage:0}];return t.reverse().forEach((function(t){var n,r=t.size;if(r>1){var o=new _(1).collectRooms(e,r,O),a=o.hFreeRooms.concat(o.vFreeRooms);n=f(a)}else n={roomCells:[f(h(e,O))]};n.roomCells.forEach((function(e){e.ship=t})),n.roomCells.forEach((function(t){R(e,t,"isShipNeighbor")}))})),{cells:e,ships:t}}(s(10))})),ke(Le(t),"onNewGameClick",(function(){t.setState(t.getInitialState());var e=t.randomizeBattleFieldWithShips();t.setState({playerCells:e.cells,playerShips:e.ships,step:"STEP_READY_TO_START",logs:[t.createLogRecord("New game is initialized. Click START button when ready.")]})})),ke(Le(t),"getInitialState",(function(){return{playerCells:s(10),playerShips:[],playerLastShot:null,playerWoundedShipCells:[],enemyCells:s(10),enemyShips:[],enemyLastShot:null,enemyWoundedShipCells:[],step:null,currentMove:null,isReadyToStart:!1,difficultyLevel:t.state?t.state.difficultyLevel:3,showShootHints:!t.state||t.state.showShootHints,logs:[]}})),ke(Le(t),"createLogRecord",(function(e){return{time:new Date,text:e}})),ke(Le(t),"onDifficultyLevelChanged",(function(e){t.setState({difficultyLevel:e})})),ke(Le(t),"onShowShootHintsChange",(function(e){var n=e.target.checked;t.setState({showShootHints:n})})),t.state=t.getInitialState(),t}return n=y,(r=[{key:"componentDidMount",value:function(){window.addEventListener("load",this.onNewGameClick)}},{key:"render",value:function(){var e={isPlayer:!0,stage:this.state.step,lastShot:this.state.enemyLastShot,currentMove:this.state.currentMove,highlightBattleArea:"STEP_BATTLE"===this.state.step&&"enemy"===this.state.currentMove,recommendedShots:{shoots:[],strategy:null}},t=this.state.showShootHints&&"STEP_BATTLE"===this.state.step?function(e,t,n,r){if(n.length>0)return{shoots:(new F).getCells(e,n),strategy:"level3"};if(p(e)<10)return{shoots:[],strategy:"no-strategy-for-first-shoots"};if(1===c(t).size)return{shoots:[],strategy:"single-ship-no-strategy"};if(1===r)return{shoots:[],strategy:"level1"};if(2===r)return{shoots:me(e,t),strategy:"level2"};if(3===r){var o=de(e,t);return o.length>0?{shoots:o,strategy:"level3"}:{shoots:me(e,t),strategy:"level2"}}return{shoots:[],strategy:"no-strategy-stub"}}(this.state.enemyCells,this.state.enemyShips,this.state.enemyWoundedShipCells,this.state.difficultyLevel):{shoots:[],strategy:"hits-are-disabled"},n={isPlayer:!1,stage:this.state.step,lastShot:this.state.playerLastShot,recommendedShots:t,highlightBattleArea:"STEP_BATTLE"===this.state.step&&"player"===this.state.currentMove,currentMove:this.state.currentMove};return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-1"},o.a.createElement(xe,{ships:this.state.playerShips,isPlayer:!0})),o.a.createElement("div",{className:"col-sm-5"+(e.highlightBattleArea?"":" disabledArea"),disabled:e.highlightBattleArea},o.a.createElement(we,{cells:this.state.playerCells,options:e,onCellClick:this.playerCellSetup})),o.a.createElement("div",{className:"col-sm-5"+(n.highlightBattleArea?"":" disabledArea"),disabled:n.highlightBattleArea},o.a.createElement(we,{cells:this.state.enemyCells,options:n,onCellClick:this.playerShot})),o.a.createElement("div",{className:"col-sm-1"},o.a.createElement(xe,{ships:this.state.enemyShips,isPlayer:!1}))),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement(Ce,{level:this.state.difficultyLevel,showShootHints:this.state.showShootHints,onDifficultyChange:this.onDifficultyLevelChanged,onShowShootHintsChange:this.onShowShootHintsChange})),o.a.createElement("div",{className:"col-sm-4 text-center btn-lg"},o.a.createElement("button",{className:"bg-primary button-rounded",onClick:this.onNewGameClick},"New game"),o.a.createElement("button",{className:"bg-primary button-rounded",onClick:this.startBattle,disabled:"STEP_READY_TO_START"!==this.state.step},"Start")),o.a.createElement("div",{className:"col-sm-4"})),o.a.createElement("div",{className:"row mt-10"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement(_e,{logs:this.state.logs}))))}}])&&Re(n.prototype,r),a&&Re(n,a),y}(r.Component)}});