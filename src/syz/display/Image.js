import DisplayObject from "../base/DisplayObject";

class Image extends DisplayObject {
    
    constructor() {
        super()
        this.displayObjectType = 'img'
        this.imageSource = ''
    }

    set src(path) {
        this.imageSource = path
    }

    get src() {
        return this.imageSource
    }
}

export default Image