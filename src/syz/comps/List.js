import DisplayObjectContainer from "../base/DisplayObjectContainer";

class List extends DisplayObjectContainer{
  constructor() {
    super()

    this.data = null
    this.item = null
  }

  render() {
    if(this.data && this.item) {
      let container = new DisplayObjectContainer()
      this.data.forEach((dataItem,index) => {
        let item = new this.item()
        item.itemRender && item.itemRender(dataItem, index)
        container.add(item)
      })
      this.add(container)
    }
  }
}

export default List