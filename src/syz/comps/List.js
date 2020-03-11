import Container from './../display/Container'

class List extends Container {
  constructor() {
    super('ul')
    this.private_data = null
    this.private_item = null
  }

  set data(data) {
    this.private_data = data
    this.private_render(this.private_data, this.private_item, this)
  }

  set item(item) {
    this.private_item = item
    this.private_render(this.private_data, this.private_item, this)
  }

  private_render($data, $item, $parent) {
    if($data && $item) {
      $data.forEach((dataItem, index) => {
        let item = new $item()
        item.itemRender && item.itemRender(dataItem, index)
        $parent.add(new Container('li').add(item))
      })
    }
  }
}

export default List