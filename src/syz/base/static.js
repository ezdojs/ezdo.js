import EventBus from "./EventBus"

let _uniqueNum = 0
let _eventBus = null
let _binder = {}
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
}
export default Static