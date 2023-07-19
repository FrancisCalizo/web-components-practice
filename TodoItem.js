const todoItemTemplate = document.createElement("template")
todoItemTemplate.innerHTML = `
  <style>
    label {
      color: red;
      display: block;
    }
    
    .description {
      font-size: 14px;
      font-weight: lighter;
      color: #000;
    }
  </style>
  
  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="description">
      <slot name="description"></slot>
    </span>
  </label>
`
// HTML provides a <slot> element as a placeholder inside a <template> that,
// if provided a name, creates a "named slot". A named slot can be used 
// to customize content within a web component. 
// The <slot> element gives us a way to control where the children of a 
// custom element should be inserted within its shadow tree.
// Basically it's a placeholder for content

class TodoItem extends HTMLElement {
  constructor() {
    // Make sure we call our HTMLElement constructor
    super()

    // Create shadow DOM for component
    const shadow = this.attachShadow({ mode: "open" })
    shadow.append(todoItemTemplate.content.cloneNode(true))
    this.checkbox = shadow.querySelector("input")
  }

  static get observedAttributes() {
    return ['checked']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') this.updateChecked(newValue)
  }

  updateChecked(value) {
    this.checkbox.checked = value != null && value !== "false"
  }
}

// Register the element with the DOM
// Note: this must have at least one hyphen to denote that it is a custom element
customElements.define("todo-item", TodoItem)