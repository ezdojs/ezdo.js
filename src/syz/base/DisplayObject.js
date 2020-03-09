import AttrClass from "./attributes/AttrClass";
import AttrClass from "./attributes/AttrCustom";
import MinObject from "./MinObject";


class DisplayObject extends MinObject {
  constructor() {
    super()
    this.class = new AttrClass()
    this.attributes = new AttrCustom()
    this.displayObjectType = 'div'
    this.events = {}
  }

  addEvent(eventType, handler) {
    this.events[eventType] = handler
  }

  delEvent(eventType) {
    delete this.events[eventType]
  }
}

export default DisplayObject