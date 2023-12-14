import { Hierachy } from "./hirerachy";
import { Property } from "./property";
import { Output } from "./output";
import { Container } from "./container";

export class View
{
  constructor (root: HTMLElement)
  {
    const sectionLeft = new Container("section-left");
    const sectionCenter = new Container("section-right");
    const sectionRight = new Container("section-right");

    const hierachy = new Hierachy();
    const property = new Property();
    const output = new Output();


    hierachy.hook(sectionLeft);
    output.hook(sectionCenter);
    property.hook(sectionRight);

    sectionLeft.hook(root);
    sectionCenter.hook(root);
    sectionRight.hook(root);

    property.connect(new Container("test"));
  }
}