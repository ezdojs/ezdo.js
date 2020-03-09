import DisplayObject from './DisplayObject'

class DisplayObjectContainer extends DisplayObject {
  constructor() {
    super()

    this.children = []
  }

  add(displayObject) {
    this.children.push(displayObject)
    displayObject.parent = this
  }

  del(displayObject) {
    let index = this.children.findIndex(child => displayObject.uniqueId === child.uniqueId)
    if(index > -1) {
      this.children.splice(index, 1)
    }
  }

  delAll() {
    this.children.length = 0
  }
}

export default DisplayObjectContainer