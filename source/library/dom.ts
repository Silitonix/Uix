export class DOM<K extends keyof HTMLElementTagNameMap>
{
  private element: HTMLElementTagNameMap[ K ];
  get style()
  {
    return this.element.style;
  }

  get id(): string { return this.element.id; };
  set id(id: string) { this.element.id = id; };

  get className(): string { return this.element.className; };
  set className(className: string) { this.element.className = className; };

  insertAdjacentElement(position: InsertPosition, element: HTMLElement)
  {
    this.element.insertAdjacentElement(position, element);
  }

  hook(root: HTMLElement | DOM<any>, position: InsertPosition = "beforeend")
  {
    root.insertAdjacentElement(position, this.element);
  }

  render(template: string, data?: object)
  {
    this.element.innerHTML = template;
  }

  constructor (tagName: K, className?: string)
  {
    this.element = document.createElement(tagName);
    if (className) {
      this.className = className;
    }
  }
}