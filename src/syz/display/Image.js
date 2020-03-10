import DisplayObject from "../base/DisplayObject";

class Image extends DisplayObject {
    
    constructor() {
        super()
        this.displayObjectType = 'img'
    }

    set src(path) {
        this.attributes.add('src', '//www.baidu.com/img/bd_logo1.png?qua=high')
        this.commit(this, 'mod')
    }

    get src() {
        return this.attributes.src
    }
}

export default Image