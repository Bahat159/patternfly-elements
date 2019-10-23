import PFElement from "../pfelement/pfelement.js";

class PfeScrollspy extends PFElement {
  static get tag() {
    return "pfe-scrollspy";
  }

  get templateUrl() {
    return "pfe-scrollspy.html";
  }

  get styleUrl() {
    return "pfe-scrollspy.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  constructor(pfeClass) {
    super(pfeClass || PfeScrollspy);
    
  }

  connectedCallback() {
    super.connectedCallback();
  }

  
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

class PfeScrollspyNav extends PFElement {
  static get tag() {
    return "pfe-scrollspy-nav";
  }

  get templateUrl() {
    return "pfe-scrollspy-nav.html";
  }

  get styleUrl() {
    return "pfe-scrollspy-nav.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  constructor(pfeClass) {
    super(pfeClass || PfeScrollspyNav);

  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", function(e) {
      e.preventDefault();
      let el = document.getElementById(e.target.dataset.target);
      if(el) {
        el = el.offsetTop;
        let options = {
          top: el,
          left: 0,
          behavior: 'smooth'
        }
        window.scrollTo(options);
      }
    })
  }

  disconnectedCallback() {
    this.removeEventListener("click")
  }

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

class PfeScrollspyPanel extends PFElement {
  static get tag() {
    return "pfe-scrollspy-panel";
  }

  get templateUrl() {
    return "pfe-scrollspy-panel.html";
  }

  get styleUrl() {
    return "pfe-scrollspy-panel.scss";
  }

  // static get observedAttributes() {
  //   return [];
  // }

  constructor(pfeClass) {
    super(pfeClass || PfeScrollspyPanel);

    this._init = this._init.bind(this);
    this._slot = this.shadowRoot.querySelector("slot");
    this._slot.addEventListener("slotchange", this._init);
    this._scrollCallback = this._scrollCallback.bind(this);
  }  

  connectedCallback() {
    super.connectedCallback();
    this._init();
    
    window.addEventListener("scroll", this._scrollCallback);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll");
    this._slot.removeEventListener("slotchange", this._init);
  }

  // attributeChangedCallback(attr, oldValue, newValue) {}

_init() {
  this.scrollTarget = this.getAttribute('scrolltarget');
  this.scrollspyNav = document.querySelector(`#${this.scrollTarget}`);
  this.sections = this.querySelectorAll(".pfe-scrollspy-panel__section");
  if (this.scrollspyNav) {
    this.menu_links = this.scrollspyNav.querySelectorAll(".pfe-scrollspy-nav__item");
  }
  this.makeActive = (link) => {
    if (this.menu_links[link]) {
      this.menu_links[link].setAttribute("active", "");
      let activeLink = this.scrollspyNav.querySelector('[active]');
      this.dispatchEvent(
        new CustomEvent(`pfe-scrollspy-panel:active-nav-item`, {
          detail: {
            activeNavItem: activeLink
          },
          bubbles: true
        })
      );
    }
  }
  this.removeActive = (link) => {
    if (this.menu_links[link]) {
      this.menu_links[link].removeAttribute("active");
    }
  }
  this.removeAllActive = () => [...Array(this.sections.length).keys()].forEach((link) => this.removeActive(link));

  this.sectionMargin = 200;

  this.currentActive = 0;
}
  _scrollCallback() {
    let sections;
    let menu_links;
    let sectionMargin;
    
    if (!this.sections) {
      this.sections = this.querySelectorAll(".pfe-scrollspy-panel__section");
    } else {
      sections = this.sections;
    }
    if (!this.menu_links) {
      this.menu_links = this.scrollspyNav.querySelectorAll(".pfe-scrollspy-nav__item");
      menu_links = this.menu_links;
    }
    if (!this.sectionMargin) {
      sectionMargin = 200;
    } else {
      sectionMargin = this.sectionMargin;
    }
    const sectionArr = [...sections];
    const matches = sectionArr.filter(section => window.scrollY >= section.offsetTop - sectionMargin).reverse();
    const current = sectionArr.indexOf(matches[0]);
    if (current !== this.currentActive) {
      this.removeAllActive();
      this.currentActive = current;
      this.makeActive(current);
    }
  }
}

PFElement.create(PfeScrollspy);
PFElement.create(PfeScrollspyNav);
PFElement.create(PfeScrollspyPanel);

export { PfeScrollspy, PfeScrollspyNav, PfeScrollspyPanel };