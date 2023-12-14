import { Container } from "./container";

export class Property extends Container
{
  connect(o:object){
    console.log(Object.keys(o));
  }
  constructor ()
  {
    super("property");
  }
}
