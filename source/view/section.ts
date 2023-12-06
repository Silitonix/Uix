import { DOM } from "../library/dom";

export class Section extends DOM<"section">
{
  constructor (name: string)
  {
    super("section",name);
  }
}