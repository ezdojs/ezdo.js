import DisplayObject from "../base/DisplayObject";

class InputText extends DisplayObject {
    constructor() {
        super()

        this.displayObjectType = 'input'
        this.inputTextValue = ''
    }

    set value(value) {
      this.inputTextValue = value
    }
}

export default InputText