class AttrClass {
  constructor(owner) {
    this.classes = []
    this.owner = owner
  }

  add($class) {
    if(!this.classes.find(cls => cls === $class)) {
      this.classes.push($class)
      this.owner.commit(this.owner, 'mod')
    }
  }

  del($class) {
    let idx = this.classes.findIndex(cls => cls === $class)
    if(idx > -1) {
      this.classes.splice(idx, 1)
      this.owner.commit(this.owner, 'mod')
      
      
    }
  }
}

export default AttrClass
