class ComponentCategory extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.state = {
      name: "",
      img: "",
    };
  }

  static get observedAttributes() {
    return ["name", "img"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    this.state = { ...this.state, [prop]: newVal };
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <link href="./web-components/component-category/styleguide.css" rel="stylesheet">  
    
      <div class="category-card">
        <div class="category-card__img">
          <a href="#${this.state.name}">
            <img
              src="${this.state.img}"
              alt="${this.state.name}"
            />
          </a>
        </div>
        <div class="category-card__text">
          <h3>${this.state.name} ></h3>
        </div>
      </div>`;
  }
}
window.customElements.define("fblla-category", ComponentCategory);
