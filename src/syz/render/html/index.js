import Parse from './Parse'
import Static from '../../base/static'
class HtmlRender {
  constructor() {
    this.parse = new Parse()
    this.binder = Static.binder()
  }

  initView(cmt, selector) {
    let container = document.querySelector(selector)
    this.addMinObject(container, cmt.target)
    return container.innerHTML
  }

  update(cmts) {
    
    for(var uni in cmts) {
      let cmt = cmts[uni]
      if(cmt.ctrl === 'add') {
        let container = this.binder[cmt.target.parent.uniqueId].element
        this.addMinObject(container, cmt.target)
      }else if(cmt.ctrl === 'del') {
        this.parse.deleteByminObject(cmt.target)
      }else if(cmt.ctrl === 'cls') {
        this.parse.clearChildren(cmt.target)
      }else {
        this.parse.updateByminObject(cmt.target)
        
      }
    }
  }

  addMinObject(container, minObject) {
    if(container) {
      let view = this.parse.minObjectToFragment(minObject)
      container.appendChild(view)
      view = null
    }
  }
}

export default new HtmlRender()