import { DOM } from "../library/dom";

export class Container extends DOM<"section">
{
  Add(element){

  }
  constructor (name: string)
  {
    super("section",name);
  }
}