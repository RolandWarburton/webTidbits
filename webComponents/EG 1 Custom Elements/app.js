// Define the component as a class called UserCard
class UserCard extends HTMLElement {
  constructor() {
    // call the constructor of HTMLElement too with super
    super();
    // do something with the props
    this.innerHTML = `Hello ${this.getAttribute("name")}`
  }
}

// Associate the class UserCard with the element name 
// that we want to use in the DOM, ("user-card")
window.customElements.define("user-card", UserCard)