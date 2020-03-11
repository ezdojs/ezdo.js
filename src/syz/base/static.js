import EventBus from "./EventBus"

let _uniqueNum = 0
let _eventBus = null
let _binder = {}
let _init = false
class Static { 
  static uniqueId() {
    return (++_uniqueNum).toString(16)
  }
  static event() {
    return _eventBus || (_eventBus = new EventBus())
  }
  static binder() {
    return _binder
  }
  static get isInit() {
    return _init
  }
  static set isInit(val) {
    _init = val
  }
}
export default Static