import DisplayObjectContainer from "../base/DisplayObjectContainer";

class Link extends DisplayObjectContainer {

    constructor() {
        super()
        this.displayObjectType = 'a'
        this.linkPath = '#'
    }

    set href(path) {
      this.linkPath = path
    }

    get href() {
      return this.linkPath
    }
}

export default Link