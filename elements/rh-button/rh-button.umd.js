!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],t):e.RhButton=t(e.RHElement)}(this,function(r){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),e=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.tag));return console.log("creating rh-button"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r),o(t,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline-block; }\n\n:host button {\n  padding: 0 var(--rhe-theme--spacer, 1rem);\n  font-size: var(--rhe-theme--FontSize, 16px);\n  line-height: var(--rhe-theme--spacer--lg, 2rem);\n  border: 1px solid transparent;\n  cursor: pointer;\n  border-radius: var(--rhe-theme--button-border--BorderRadius, 2px);\n  background: var(--rh-button--theme--default-color--Background, #e7e7e7);\n  color: var(--rh-button--theme--default-color--Color, #333); }\n\n:host button:hover {\n  background: var(--rh-button--theme--default-color--hover--Background, #bebebe);\n  color: var(--rh-button--theme--default-color--hover--Color, #333); }\n\n:host(.primary) button {\n  background: var(--rh-button--theme--primary-color--Background, #0076e0);\n  color: var(--rh-button--theme--primary-color--Color, #fff); }\n\n:host(.primary) button:hover {\n  background: var(--rh-button--theme--primary-color--hover--Background, #004080);\n  color: var(--rh-button--theme--primary-color--hover--Color, #fff); }\n</style>\n<button><slot></slot></button>"}},{key:"styleUrl",get:function(){return"rh-button.scss"}},{key:"templateUrl",get:function(){return"rh-button.html"}}],[{key:"tag",get:function(){return"rh-button"}}]),t}();return r.create(e),e});
//# sourceMappingURL=rh-button.umd.js.map