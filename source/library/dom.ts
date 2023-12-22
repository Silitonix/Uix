export class DOM<K extends keyof HTMLElementTagNameMap>
{
  private _id: number = Date.now();
  private element: HTMLElementTagNameMap[ K ];
  set value(str){
    if(Object.hasOwn(this.element,"value")) this.element.value = str;
    this.element.textContent = str;
  }

  get value(){
    if(Object.hasOwn(this.element,"value")) return this.element.value;
    return this.element.textContent;
  }

  get style()
  {
    return this.element.style;
  }
  get id() { return this._id; }
  get className(): string { return this.element.className; }
  set className(className: string) { this.element.className = className; }

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
    this.element.id = this.id.toString();
  }
}