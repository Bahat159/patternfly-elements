import RHElement from "../rhelement/rhelement.js";

/*
 * Copyright 2018 Red Hat, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class RhPagination extends RHElement {
  get html() {
    return `
<style>
:host {
  display: block; }

:host([hidden]) {
  display: none; }

:focus:not(:focus-visible) {
  outline: none; }

nav *, nav *::before, nav *::after {
  box-sizing: border-box; }

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: baseline; }
  nav ul li {
    margin: 1px;
    display: flex; }
    nav ul li > a {
      display: block;
      padding: 0 calc(var(--rh-theme--font-size, 16px) * 0.75);
      line-height: calc(var(--rh-theme--font-size, 16px) * 2.5);
      min-height: calc(var(--rh-theme--font-size, 16px) * 2.5);
      min-width: calc(var(--rh-theme--font-size, 16px) * 2.5);
      border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) transparent;
      background: var(--rh-theme--color--ui-subtle, #f3f3f3);
      color: var(--rh-theme--color--ui-subtle--text, #333);
      text-align: center;
      text-decoration: none;
      vertical-align: middle; }
      nav ul li > a:hover, nav ul li > a:focus, nav ul li > a:active {
        background: var(--rh-theme--color--ui-base, #0477a4);
        color: var(--rh-theme--color--ui-base--text, #fff); }
      nav ul li > a[aria-current] {
        background: var(--rh-theme--color--ui-complement, #464646);
        color: var(--rh-theme--color--ui-complement--text, #fff); }
    nav ul li#next {
      order: 10; }

#jump {
  margin: 0 var(--rh-theme--container-spacer, 1rem); }
  #jump a {
    color: var(--rh-theme--color--ui-link, #06c);
    text-decoration: none; }
    #jump a:hover {
      color: var(--rh-theme--color--ui-link--hover, #003366);
      text-decoration: underline; }
    #jump a:focus {
      color: var(--rh-theme--color--ui-link--focus, #003366);
      text-decoration: underline; }

#currentPageInput {
  margin-right: calc(var(--rh-theme--content-spacer, 1rem) * 0.5);
  padding: 0 calc(var(--rh-theme--font-size, 16px) * 0.75);
  line-height: calc(var(--rh-theme--font-size, 16px) * 2.5);
  min-height: calc(var(--rh-theme--font-size, 16px) * 2.5);
  border: var(--rh-theme--ui--border-width, 1px) var(--rh-theme--ui--border-style, solid) var(--rh-theme--color--surface--border, #dfdfdf);
  box-shadow: var(--rh-theme--box-shadow--input, inset 0 1px 1px 0 rgba(19, 19, 19, 0.1));
  width: 4em;
  font-size: inherit; }

:host([show-pages]) #jump {
  order: -1;
  margin-left: 0; }

:host([show-pages]) #next {
  order: initial; }
</style>
<nav>
  <ul id="list">
    <li id="jump" hidden>
      <form>
        <input type="number" name="" id="currentPageInput"> of <a href="#" id="total-pages"></a>
      </form>
    </li>
  </ul>
</nav>`;
  }

  static get tag() {
    return "rh-pagination";
  }

  get templateUrl() {
    return "rh-pagination.html";
  }

  get styleUrl() {
    return "rh-pagination.scss";
  }

  get currentPage() {
    return this.getAttribute("current-page");
  }

  set currentPage(val) {
    console.log(this);
    this.setAttribute("current-page", val);
  }

  static get observedAttributes() {
    return ["total-pages", "show-jump", "show-pages"];
  }

  constructor() {
    super(RhPagination.tag);

    this.jump = this.shadowRoot.querySelector("#jump");
    this.currentPageInput = this.shadowRoot.querySelector("#currentPageInput");
    this.list = this.shadowRoot.querySelector("#list");

    this._submitHandler = this._submitHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._copyNav();

    this.currentPageInput.value = this.currentPage;
    this.jump.addEventListener("submit", this._submitHandler);
  }

  disconnectedCallback() {
    this.jump.removeEventListener("submit", this._submitHandler);
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "total-pages" && this.hasAttribute("show-jump")) {
      this.shadowRoot.querySelector("#total-pages").textContent = newValue;
    }

    if (attr === "show-jump") {
      this.jump.hidden = false;
    }
  }

  _copyNav() {
    const previous = this.querySelector('a[control="previous"]');
    const next = this.querySelector('a[control="next"]');
    const liPrevious = document.createElement("li");
    const liNext = document.createElement("li");
    const liJump = this.shadowRoot.querySelector("#jump");

    liPrevious.setAttribute("id", "previous");
    liNext.setAttribute("id", "next");
    liPrevious.innerHTML = previous.outerHTML;
    liNext.innerHTML = next.outerHTML;
    this.list.insertBefore(liPrevious, liJump);
    this.list.insertBefore(liNext, liJump);
    // this.list.appendChild(liPrevious);
    // this.list.appendChild(liNext);

    if (this.hasAttribute("show-pages")) {
      this._buildPageNumbers();
    }
  }

  _buildPageNumbers() {
    const liNext = this.shadowRoot.querySelector("#next");
    const totalPages = this.getAttribute("total-pages");
    const currentPage = this.currentPage;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const liPageNum = document.createElement("li");
      const aPageNum = document.createElement("a");

      aPageNum.setAttribute("href", "#");
      aPageNum.textContent = pageNum;
      liPageNum.innerHTML = aPageNum.outerHTML;
      this.list.insertBefore(liPageNum, liNext);
    }

    this.list.children[currentPage]
      .querySelector("a")
      .setAttribute("aria-current", "page");
  }

  _submitHandler(event) {
    event.preventDefault();
    this.currentPage = this.currentPageInput.value;
  }
}

RHElement.create(RhPagination);

export default RhPagination;
//# sourceMappingURL=rh-pagination.js.map
