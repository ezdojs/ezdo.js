import domevent from './../../events/domevent'
import Static from '../../base/static'
class Parse {
  constructor() {
    this.binder = Static.binder()
  }

  clearChildren() {
    let { element } = this.binder[minObject.uniqueId]
    if(element.children) {
        let unis = []
        element.children.forEach(childElement => {
          unis.push(childElement.uniqueId)
        })
        element.innerHTML = ''
        while(unis.length) {
          let uni = unis.shift()
          delete this.binder[uni]
        }
    }
  }

  deleteByminObject(minObject) {
    let { element } = this.binder[minObject.uniqueId]
    if(element && element.parentNode) {
        element.parentNode.removeChild(element)
    }
    delete this.binder[minObject.uniqueId]
  }

  minObjectToFragment(minObject, fragment) {
    if(!fragment) {
      fragment = document.createDocumentFragment()
    }
    let element = null
    if(minObject.displayObjectType === 'text') {
      element = new Text(minObject.data)
    }else {
      element = document.createElement(minObject.displayObjectType || 'div')
    }
    element.uniqueId = minObject.uniqueId
    this.binder[minObject.uniqueId] = {
      element,
      minObject
    }
    fragment.appendChild(element)
    this.updateByminObject(minObject)
    if(minObject.children && minObject.children.length) {
        let len = minObject.children.length
        for(var i = 0; i < len; i++) {
            this.minObjectToFragment(minObject.children[i], element)
        }
    }
    
    return fragment
  }

  updateByminObject(minObject) {
    if(!this.binder[minObject.uniqueId]) {
      return
    }
    let fragment = document.createDocumentFragment()
    let { element } = this.binder[minObject.uniqueId]
    let elementParent = element.parentNode || element.parentElement
    let nextElementSibling = element.nextElementSibling
    fragment.appendChild(element)
    if(minObject.class.classes && minObject.class.classes.length) {
      element.classList = minObject.class.classes 
    }else {
      if(element.removeAttribute) {
        element.removeAttribute('class')
      }
    }
    
    let attributes = minObject.attributes.attributes
    for(var attrName in attributes) {
      let attr = attributes[attrName]
      if(attr) {
        element.setAttribute(attrName, attr)
      }else {
        element.removeAttribute(attrName)
      }
    }
    //
    if(minObject.events) {
         for(var key in element._plisteners) {
             if(!minObject.events[key]) {
                 domevent.removeEvent(element, key, this.handlerProxy)
             }
         }
         for(var key in minObject.events) {
             if(!element._plisteners || !element._plisteners[key]) {
              domevent.addEvent(element, key, this.handlerProxy)
             }
         }
     }

     if(nextElementSibling) {
        elementParent.insertBefore(element, nextElementSibling)
     }else {
        elementParent.appendChild(element)
     }
     fragment = null
  }

  handlerProxy(e) {
        let evt = e || event
        if(!evt || !evt.target.uniqueId) {
            return
        }
        let binder = Static.binder()
        let {element, minObject} = binder[evt.target.uniqueId]
        if(minObject.displayObjectType === 'input') {
            if(minObject.inputTextValue != element.value) {
                minObject.inputTextValue = element.value
            }
        }
        
        let handler = minObject.events[evt.type]
        if(handler) {
            handler(minObject)
        }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        } else {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
    }
}

export default Parse