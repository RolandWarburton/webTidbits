// create a new div element in the DOM with its own styles
const template = document.createElement("template");
// the template is just a frame. the h3 tag stays empty
// content in the h3 is injected in the UserCard class
template.innerHTMl = `
<style>
  h3 {
    color: blue;
  }
</style>

<div class="myClass">
    <h3></h3>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    // call the constructor of HTMLElement too
    super();
    
    // Create a shadow DOM
    this.attachShadow({mode: "open"});
    
    // Attach the template above to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // Inject some content from the props that we passed in
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
}

window.customElements.define("user-card", UserCard);