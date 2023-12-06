import { Property } from "./property";

export class View
{
  constructor (root: HTMLElement)
  {
    const prop = new Property();
    prop.hook(root);
  }
}