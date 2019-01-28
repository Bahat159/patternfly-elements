!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("../pfelement/pfelement.umd")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd"],t):e.PfeAccordion=t(e.PFElement)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),c=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in a)return a.value;var i=a.get;return void 0!==i?i.call(r):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function a(){return Math.random().toString(36).substr(2,9)}Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var r=arguments[1],a=0;a<n;){var o=t[a];if(e.call(r,o,a,t))return a;a++}return-1}});var t=function(e){function a(){return o(this,a),s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,a))}return l(a,n),i(a,[{key:"html",get:function(){return"<style>:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0; }</style>\n<slot></slot>"}},{key:"styleUrl",get:function(){return"pfe-accordion.scss"}},{key:"templateUrl",get:function(){return"pfe-accordion.html"}}],[{key:"tag",get:function(){return"pfe-accordion"}},{key:"observedAttributes",get:function(){return["theme","color"]}},{key:"cascadingAttributes",get:function(){return{color:"pfe-accordion-header"}}}]),i(a,[{key:"connectedCallback",value:function(){c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.setAttribute("role","presentation"),this.setAttribute("defined",""),this.addEventListener(a.tag+":change",this._changeHandler),this.addEventListener("keydown",this._keydownHandler),Promise.all([customElements.whenDefined(f.tag),customElements.whenDefined(r.tag)]).then(this._linkPanels())}},{key:"disconnectedCallback",value:function(){this.removeEventListener(a.tag+":change",this._changeHandler),this.removeEventListener("keydown",this._keydownHandler)}},{key:"attributeChangedCallback",value:function(e,t,n){if(c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"attributeChangedCallback",this).call(this,e,t,n),"color"===e){var r=this.querySelectorAll(f.tag);"striped"===n?[].concat(d(r)).forEach(function(e,t){var n=t%2?"even":"odd";e.classList.add(n)}):[].concat(d(r)).forEach(function(e,t){e.classList.remove("even","odd")})}}},{key:"toggle",value:function(e){var t=this._allHeaders(),n=this._allPanels(),r=t[e],a=n[e];r&&a&&(r.expanded?(this._collapseHeader(r),this._collapsePanel(a)):(this._expandHeader(r),this._expandPanel(a)))}},{key:"expand",value:function(e){var t=this._allHeaders(),n=this._allPanels(),r=t[e],a=n[e];r&&a&&(this._expandHeader(r),this._expandPanel(a))}},{key:"expandAll",value:function(){var t=this,e=this._allHeaders(),n=this._allPanels();e.forEach(function(e){return t._expandHeader(e)}),n.forEach(function(e){return t._expandPanel(e)})}},{key:"collapse",value:function(e){var t=this._allHeaders(),n=this._allPanels(),r=t[e],a=n[e];r&&a&&(this._collapseHeader(r),this._collapsePanel(a))}},{key:"collapseAll",value:function(){var t=this,e=this._allHeaders(),n=this._allPanels();e.forEach(function(e){return t._collapseHeader(e)}),n.forEach(function(e){return t._collapsePanel(e)})}},{key:"_linkPanels",value:function(){var n=this;this._allHeaders().forEach(function(e){var t=n._panelForHeader(e);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}},{key:"_changeHandler",value:function(e){if(!this.classList.contains("animating")){var t=e.target,n=e.target.nextElementSibling;e.detail.expanded?(this._expandHeader(t),this._expandPanel(n)):(this._collapseHeader(t),this._collapsePanel(n))}}},{key:"_toggle",value:function(e,t){}},{key:"_expandHeader",value:function(e){e.expanded=!0}},{key:"_expandPanel",value:function(e){if(!e.expanded){e.expanded=!0;var t=e.getBoundingClientRect().height;this._animate(e,0,t)}}},{key:"_collapseHeader",value:function(e){e.expanded=!1}},{key:"_collapsePanel",value:function(e){if(e.expanded){var t=e.getBoundingClientRect().height;e.expanded=!1,this._animate(e,t,0)}}},{key:"_animate",value:function(e,t,n){var r=this;e.classList.add("animating"),e.style.height=t+"px",requestAnimationFrame(function(){requestAnimationFrame(function(){e.style.height=n+"px",e.classList.add("animating"),e.addEventListener("transitionend",r._transitionEndHandler)})})}},{key:"_keydownHandler",value:function(e){var t=e.target;if(this._isHeader(t)){var n=void 0;switch(e.key){case"ArrowDown":case"Down":case"ArrowRight":case"Right":n=this._nextHeader();break;case"ArrowUp":case"Up":case"ArrowLeft":case"Left":n=this._previousHeader();break;case"Home":n=this._firstHeader();break;case"End":n=this._lastHeader();break;default:return}n.shadowRoot.querySelector("button").focus()}}},{key:"_transitionEndHandler",value:function(e){e.target.style.height="",e.target.classList.remove("animating"),e.target.removeEventListener("transitionend",this._transitionEndHandler)}},{key:"_allHeaders",value:function(){return[].concat(d(this.querySelectorAll(f.tag)))}},{key:"_allPanels",value:function(){return[].concat(d(this.querySelectorAll(r.tag)))}},{key:"_panelForHeader",value:function(e){var t=e.nextElementSibling;if(t.tagName.toLowerCase()===r.tag)return t;console.error(a.tag+": Sibling element to a header needs to be a panel")}},{key:"_previousHeader",value:function(){var e=this._allHeaders(),t=e.findIndex(function(e){return e===document.activeElement})-1;return e[(t+e.length)%e.length]}},{key:"_nextHeader",value:function(){var e=this._allHeaders(),t=e.findIndex(function(e){return e===document.activeElement})+1;return e[t%e.length]}},{key:"_firstHeader",value:function(){return this._allHeaders()[0]}},{key:"_lastHeader",value:function(){var e=this._allHeaders();return e[e.length-1]}},{key:"_isHeader",value:function(e){return e.tagName.toLowerCase()===f.tag}}]),a}(),f=function(e){function r(){o(this,r);var e=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r));return e._clickHandler=e._clickHandler.bind(e),e}return l(r,n),i(r,[{key:"html",get:function(){return'<style>:host {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--lighter, #ececec);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--lighter--text, #333);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--lighter--link--focus, #003366);\n  display: block;\n  background: var(--pfe-accordion--main);\n  color: var(--pfe-accordion--aux); }\n  :host button {\n    padding: calc(var(--pfe-theme--container-spacer, 1rem) * 0.75);\n    margin: 0;\n    width: 100%;\n    height: auto;\n    border: 1px solid transparent;\n    font-family: inherit;\n    font-size: var(--pfe-theme--font-size, 16px);\n    line-height: 1.5;\n    text-align: left;\n    background: none;\n    cursor: pointer;\n    color: var(--pfe-accordion--aux); }\n    :host button:focus {\n      outline: 1px solid var(--pfe-accordion--focus); }\n    :host button::-moz-focus-inner {\n      border: 0; }\n    :host button[aria-expanded] {\n      position: relative;\n      display: block;\n      font-weight: normal;\n      padding-left: calc(var(--pfe-theme--container-spacer, 1rem) * 2.5); }\n    :host button[aria-expanded="false"]::before {\n      content: "";\n      position: absolute;\n      left: var(--pfe-theme--container-spacer, 1rem);\n      top: calc((var(--pfe-theme--container-spacer, 1rem) * 0.75) + 0.5935em);\n      display: block;\n      border-style: solid;\n      border-width: 0.15em 0.15em 0 0;\n      height: 0.313em;\n      width: 0.313em;\n      text-align: center;\n      transition: transform 0.15s;\n      transform: rotate(45deg); }\n    :host button[aria-expanded="true"]::before {\n      content: "";\n      position: absolute;\n      left: var(--pfe-theme--container-spacer, 1rem);\n      top: calc((var(--pfe-theme--container-spacer, 1rem) * 0.75) + 0.5935em);\n      display: block;\n      width: 0.313em;\n      height: 0.313em;\n      border-style: solid;\n      border-width: 0.15em 0.15em 0 0;\n      text-align: center;\n      transition: all 0.15s;\n      transform: rotate(135deg); }\n\n:host(.animating) {\n  transition: transform 0.3s var(--pfe-theme--animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946)); }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1px; }\n\n:host([color="lightest"]),\n:host([color="striped"].even) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--lightest, #fff);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--lightest--text, #333);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--lightest--link--focus, #003366); }\n  :host([color="lightest"]) button[aria-expanded="true"],\n  :host([color="striped"].even) button[aria-expanded="true"] {\n    border-top-color: var(--pfe-theme--color--surface--border--lightest, #ececec);\n    border-left-color: var(--pfe-theme--color--surface--border--lightest, #ececec);\n    border-right-color: var(--pfe-theme--color--surface--border--lightest, #ececec); }\n\n:host([color="base"]) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--base, #dfdfdf);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--base--text, #333);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--base--link--focus, #00305b); }\n\n:host([color="dark"]) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--darker, #464646);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--darker--text, #fff);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--darkest, #131313);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--darkest--text, #fff);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--accent, #fe460d);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--accent--text, #fff);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([color="complement"]) {\n  --pfe-accordion--main:         var(--pfe-theme--color--surface--complement, #0477a4);\n  --pfe-accordion--aux:          var(--pfe-theme--color--surface--complement--text, #fff);\n  --pfe-accordion--focus:        var(--pfe-theme--color--surface--complement--link--focus, #cce6ff); }</style>\n<button aria-expanded="false" role="tab"></button>'}},{key:"styleUrl",get:function(){return"pfe-accordion-header.scss"}},{key:"templateUrl",get:function(){return"pfe-accordion-header.html"}}],[{key:"tag",get:function(){return"pfe-accordion-header"}},{key:"observedAttributes",get:function(){return["aria-expanded"]}}]),i(r,[{key:"connectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.hasAttribute("role")||this.setAttribute("role","header"),this.id||(this.id=r.tag+"-"+a()),this.button=this.shadowRoot.querySelector("button");var e=this.children[0],t=!1;if(e){switch(e.tagName){case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":t=!0}var n=document.createElement(e.tagName);this.button.innerText=e.innerText,n.appendChild(this.button),this.shadowRoot.appendChild(n)}else this.button.innerText=this.textContent.trim();t||console.warn(r.tag+": The first child in the light DOM must be a Header level tag (h1, h2, h3, h4, h5, or h6)"),this.addEventListener("click",this._clickHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._clickHandler)}},{key:"_clickHandler",value:function(e){this.dispatchEvent(new CustomEvent(t.tag+":change",{detail:{expanded:!this.expanded},bubbles:!0}))}},{key:"expanded",get:function(){return this.hasAttribute("aria-expanded")},set:function(e){(e=Boolean(e))?(this.setAttribute("aria-expanded",!0),this.button.setAttribute("aria-expanded",!0)):(this.removeAttribute("aria-expanded"),this.button.setAttribute("aria-expanded",!1))}}]),r}(),r=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t))}return l(t,n),i(t,[{key:"html",get:function(){return'<style>:host {\n  display: none;\n  overflow: hidden;\n  background: var(--pfe-theme--color--surface--lightest, #fff);\n  will-change: height; }\n\n:host([expanded]) {\n  display: block;\n  position: relative; }\n\n:host(.animating) {\n  display: block;\n  transition: height 0.3s ease-in-out; }\n\n.container {\n  margin: 0 1px;\n  border: 1px solid var(--pfe-theme--color--surface--border--lightest, #ececec);\n  border-top: none;\n  padding: var(--pfe-theme--container-spacer, 1rem); }</style>\n<div tabindex="-1" role="tabpanel">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>'}},{key:"styleUrl",get:function(){return"pfe-accordion-panel.scss"}},{key:"templateUrl",get:function(){return"pfe-accordion-panel.html"}}],[{key:"tag",get:function(){return"pfe-accordion-panel"}}]),i(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasAttribute("role")||this.setAttribute("role","region"),this.id||(this.id=t.tag+"-"+a())}},{key:"expanded",get:function(){return this.hasAttribute("expanded")},set:function(e){Boolean(e)?this.setAttribute("expanded",""):this.removeAttribute("expanded")}}]),t}();return n.create(f),n.create(r),n.create(t),t});
//# sourceMappingURL=pfe-accordion.umd.js.map
