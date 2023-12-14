import { DOM } from "../library/dom";
import { Container } from "./container";

export class Output extends Container
{
  canvas: DOM<"canvas">;
  constructor ()
  {
    super("output");
    this.canvas = new DOM("canvas");
    this.canvas.hook(this);
  }
}