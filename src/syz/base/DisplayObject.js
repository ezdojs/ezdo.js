import AttrClass from "./attributes/AttrClass";
import MinObject from "./MinObject";


class DisplayObject extends MinObject {
  constructor() {
    super()
    this.class = new AttrClass()
    this.displayObjectType = 'div'
  }
}

export default DisplayObject