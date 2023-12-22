import { DOM } from "../library/dom";

export class Container extends DOM<"section">
{
  domTitle: DOM<"div">;
  domBody: DOM<"div">;

  set title(str: string)
  {
    if (str) {
      this.domTitle.value = str;
      this.domTitle.style.display = "block";
      return;
    }
    this.domTitle.style.display = "none";
  }

  get title()
  {
    return this.domTitle.value;
  }

  Add(element)
  {

  }

  constructor (name: string)
  {
    super("section", name);
    this.domTitle = new DOM("div", "section-title");
    this.domBody = new DOM("div", "section-body");

    this.domTitle.hook(this);
    this.domBody.hook(this);
  }
}