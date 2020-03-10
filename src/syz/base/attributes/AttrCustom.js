class AttrCustom {
  constructor(owner) {
    this.attributes = {}
    this.owner = owner
  }

  get(name) {
    return this.attributes[name]
  }

  add(name, value) {
    this.attributes[name] = value
  }

  del(name) {
    this.attributes[name] = null
  }
}

export default AttrCustom
