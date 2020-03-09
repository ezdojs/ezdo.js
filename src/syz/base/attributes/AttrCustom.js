class AttrCustom {
  constructor() {
    this.attributes = {}
  }

  add(name, value) {
    this.attributes[name] = value
  }

  del(name) {
    this.attributes[name] = null
  }
}

export default AttrCustom
