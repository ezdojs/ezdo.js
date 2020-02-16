class Router {
    constructor() {
        this.container = null
        this.routerArray = []
        this.routerMap = new Map()
        this.history = []
        this.currentRouteName = ''
    }

    set routers(array) {
        this.routerArray = array
        array.forEach(node => {
            this.routerMap.set(node.name, node)
        });
    }

    add(name, node) {
        let route = {name, node}
        this.routers.push(route)
        this.routerMap.set(name, route)
    }

    to(name) {
        if(name === this.currentRouteName)
            return
        let node = this.routerMap.get(name).node
        this.container.add(node)
        
        if(this.history.length) {
            let last = this.history[this.history.length-1]
            this.container.remove(last)
        }
        this.history.push(node)
        this.currentRouteName = name
    }

    back() {
        if(this.history.length > 1) {
            let node = this.history.pop()
            this.container.remove(node)
            node = this.history.pop()
            this.container.add(node)
        }
    }
}

export default Router