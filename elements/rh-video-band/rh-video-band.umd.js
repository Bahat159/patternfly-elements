!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.umd.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.umd.js"));else{t(e.rhelementUmd),e.rhVideoBand={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),r(t,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<slot></slot>"}},{key:"templateUrl",get:function(){return"rh-video-band.html"}},{key:"styleUrl",get:function(){return"rh-video-band.scss"}}],[{key:"tag",get:function(){return"rh-video-band"}}]),t}();n.default.create(o)});