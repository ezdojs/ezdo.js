import Static from "./static";

class MinObject {
  constructor() {
    this.uniqueId = Static.uniqueId()
    this.event = Static.event()
  }
}

export default MinObject