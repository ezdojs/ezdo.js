import Parse from './Parse'
class HtmlRender {
  constructor() {
    this.parse = new Parse()
    this.binder = {}
    this.parse.binder = binder
  }

  initView(cmt, selector) {
    let container = document.querySelector(selector)
    addMinObject(container)
  }

  update(cmts) {
    for(var uni in cmts) {
      let cmt = cmts[uni]
      if(cmt.ctrl === 'add') {
        let container = this.binder[cmt.target.parent.uniqueId].element
        addMinObject(container)
      }else if(cmt.ctrl === 'del') {
        this.parse.deleteByminObject(cmt.target)
      }else {
        this.parse.updateByminObject(cmt.target)
      }
    }
  }

  addMinObject() {
    if(container) {
      let view = this.parse.minObjectToFragment(minObject)
      container.appendChild(view)
      view = null
    }
  }
}

export default new HtmlRender()