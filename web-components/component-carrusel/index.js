class ComponentCarrusel extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadow.innerHTML = `
        <link href="./web-components/component-carrusel/styleguide.css" rel="stylesheet">  
      
        <div id="carrusel">
          <a href="#" class="left-arrow"><img src="images/left-arrow.png" /></a>
          <a href="#" class="right-arrow"><img src="images/right-arrow.png" /></a>
          <div class="carrusel">
              <div id="product_0">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/blt8690be2f5a9ffa34/618ea55c704cf46e6bba5c7d/PC6_J11_tecnologia_navidad.png" width="195" />
              </div>
              <div id="product_1">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/blt1227495693a8cf39/618ea55c3b08dd14d79a8469/PC4_J11_tecnologia_navidad.png" width="195" />
              </div>
              <div id="product_2">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/bltf9602ad08c75699e/619d11152dc01977975bbad3/PC3_J11_tecnologia_navidad.png" width="195" />
              </div>
              <div id="product_3">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/blta4d57551414eacb6/618ea55c00783f138785e606/PC2_J11_tecnologia_navidad.png" width="195" />
              </div>
              <div id="product_4">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/blt9435b9f18f2b155d/618ea55cd380f814d61f03b7/PC1_J11_tecnologia_navidad.png" width="195" />
              </div>
              <div id="product_5">
                  <img src="https://images.contentstack.io/v3/assets/blt088e6fffbba20f16/blt8690be2f5a9ffa34/618ea55c704cf46e6bba5c7d/PC6_J11_tecnologia_navidad.png" width="195 />
              </div>
          </div>
      </div>`;
    }
  }
  window.customElements.define("electro-carrusel", ComponentCarrusel);
  