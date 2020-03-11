import DisplayObjectContainer from "../base/DisplayObjectContainer";

class Container extends DisplayObjectContainer {
  constructor(tag) {
    super()
    this.tag = tag || 'div'
  }

  set tag(tag) {
    this.displayObjectType = tag
  }
}

export default Container