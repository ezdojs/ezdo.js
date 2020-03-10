import AttrClass from "./attributes/AttrClass";
import AttrCustom from "./attributes/AttrCustom";
import MinObject from "./MinObject";


class DisplayObject extends MinObject {
  constructor() {
    super()
    this.class = new AttrClass(this)
    this.attributes = new AttrCustom(this)
    this.displayObjectType = 'div'
    this.events = {}
  }

  addEvent(eventType, handler, caller) {
    this.events[eventType] = handler.bind(caller)
    this.commit(this, 'mod')
  }

  delEvent(eventType) {
    delete this.events[eventType]
    this.commit(this, 'mod')
  }
}

export default DisplayObject