const template = document.createElement("template");
template.innerHTML = `
<style>
  h3 {
    color: blue;
  }
</style>

<h1><slot name="message" /></h1>
<h3></h3>
`;


class UserCard extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM
    this.attachShadow({mode: "open"});
    
    // Attach the template above to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // Inject some content from the props that we passed in
    this.shadowRoot.querySelector("h3")
    .innerText = this.getAttribute("name");
  }

}

window.customElements.define("user-card", UserCard);