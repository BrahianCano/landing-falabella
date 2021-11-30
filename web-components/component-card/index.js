class ComponentCard extends HTMLElement {
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
        <link href="./web-components/component-card/styleguide.css" rel="stylesheet">  
      
        <div class="content-belleza__card">
        <div class="content-belleza__cardHead">
          <img
            src="${this.state.img}"
            alt="${this.state.name}"
          />
        </div>
        <div class="content-belleza__cardBody">
          <h4>${this.state.name}</h4>
          <a href="#!">Ver todo ></a>
        </div>
      </div>`;
    }
  }
  window.customElements.define("fblla-card", ComponentCard);
  