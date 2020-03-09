import DisplayObject from "../base/DisplayObject";

class Text extends DisplayObject {
  constructor(data) {
    super()
    this.displayObjectType = 'text'
    this.data = data || ''
  }
}

export default Text