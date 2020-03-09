import DisplayObject from "../base/DisplayObject";

class Node extends DisplayObject {
  constructor(tag) {
    super()
    this.tag = tag || 'div'
  }

  set tag() {
    this.displayObjectType = tag
  }
}

export default Node