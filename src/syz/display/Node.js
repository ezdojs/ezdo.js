import DisplayObject from "../base/DisplayObject";

class Node extends DisplayObject {
  constructor(tag) {
    super()
    this.tag = tag || 'p'
  }

  set tag(tag) {
    this.displayObjectType = tag
  }
}

export default Node