class EzText {
    constructor() {
        this.el = new Text()
        this._isVdom = false
    }
    set text(value) {
        if(this.el.data != value) {
            this.el.data = value
        }
    }
    get text() {
        return this.el.data
    }
}

export default EzText