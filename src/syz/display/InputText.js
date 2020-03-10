import DisplayObject from "../base/DisplayObject";

class InputText extends DisplayObject {
    constructor() {
        super()

        this.displayObjectType = 'input'
        this.inputTextValue = ''
    }

    set value(value) {
      this.inputTextValue = value
      this.attributes.add('value', value)
    }

    get value() {
      return this.inputTextValue
    }

}

export default InputText