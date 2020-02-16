import shortid from 'shortid'

class EzObj {
    constructor() {
        this._eid = shortid.generate()
        this._ename = 'ezobj'
        this._isVdom = true
    }
}

export default EzObj