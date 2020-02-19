
import Node from './elements/node.js'
import Link from './elements/link.js'
import Image from './elements/image.js'
import Video from './elements/video.js'
import Input from './elements/input.js'

import render from './render/index'

class Ezdo {
    constructor() {
        this.type = 'Body'
        this.Node = Node
        this.Link = Link
        this.Image = Image
        this.Video = Video
        this.Input = Input
        this.appId = 'app'
    }
    render(node) {
        render.init(node, this.appId)
    }
    renderTo(node, appId) {
        this.appId = appId
        this.render(node)
    }
}

export default new Ezdo