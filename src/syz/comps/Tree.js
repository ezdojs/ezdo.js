import Container from './../display/Container'

class Tree extends Container {
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
      $data.forEach((dataItem) => {
        let item = new $item()
        item.itemRender && item.itemRender(dataItem)
        item.private_temp_tree = dataItem
        item.private_temp_handler = $item
        item.unfolded = false
        item.addEvent('click', this.private_item_handler, this)
        $parent.add(item)
      })
    }
  }

  private_item_handler(e) {
    if(e.private_temp_tree.children && e.private_temp_tree.children.length) {
      if(!e.unfolded) {
        let ul = new Container('ul')
        this.private_render(e.private_temp_tree.children, e.private_temp_handler, ul)
        e.add(ul)
      }else {
        e.del(e.children[1])
      }
      e.unfolded = !e.unfolded
    }

    e.onSelect && e.onSelect()
  }
}

export default Tree