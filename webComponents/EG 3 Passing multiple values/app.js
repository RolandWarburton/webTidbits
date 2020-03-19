// create a new div element in the DOM with its own styles
const template = document.createElement("template");

// the template is just a frame. the all its tags are empty
// content will be injected in later
template.innerHTML = `
<style>
h3 {
	color: blue;
}
</style>

<div class="user-card">
  <img />
  <h3></h3>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
  // Call the constructor of HTMLElement too
  super();

	// Create a shadow DOM
  this.attachShadow({mode: "open"});
  
  // Attach the template above to the shadow DOM
  this.shadowRoot.appendChild(template.content.cloneNode(true));
  
  // Inject some content from the props that we passed in
  this.shadowRoot.querySelector("h3")
  .innerText = this.getAttribute("name");
  
  // Inject some content for an image
  this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

}

window.customElements.define("user-card", UserCard);
