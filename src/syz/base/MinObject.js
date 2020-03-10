import Static from "./static";
import commit from './../render/commit'
class MinObject {
  constructor() {
    this.uniqueId = Static.uniqueId()
    this.event = Static.event()
  }

  commit(target, ctrl) {
    commit(target, ctrl)
  }
}

export default MinObject