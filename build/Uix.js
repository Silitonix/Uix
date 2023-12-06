// source/library/dom.ts
class DOM {
  element;
  get style() {
    return this.element.style;
  }
  get id() {
    return this.element.id;
  }
  set id(id) {
    this.element.id = id;
  }
  constructor(tagName, className) {
    this.element = document.createElement(tagName);
    this.element.className = className ?? "";
  }
}

// source/view/section.ts
class Section extends DOM {
  constructor(name) {
    super("section", name);
  }
}

// source/view/view.ts
class View {
  constructor(root) {
    const prop = new Section("propery");
    prop.element.innerHTML = "Hello world";
    prop.style.background = "red";
    root.appendChild(prop.element);
  }
}

// source/Uix.ts
new View(document.body);
