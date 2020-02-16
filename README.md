# ezdo.js
构建用户界面的Javascript库



使用

```js
class Ezdo extends ez.Node {
    constructor() {
        super()

        for(let i = 0; i < 10; i++) {
            let bar = new ez.Node('p')
            bar.text = 'id-' + i
            bar.addClass('bar' + i)
            this.add(bar)
        }
    }
}
```

转换后

```html
<div>
    <p class='bar0'>id-0</p>
    <p class='bar1'>id-1</p>
    <p class='bar2'>id-2</p>
    <p class='bar3'>id-3</p>
    <p class='bar4'>id-4</p>
    <p class='bar5'>id-5</p>
    <p class='bar6'>id-6</p>
    <p class='bar7'>id-7</p>
    <p class='bar8'>id-8</p>
    <p class='bar9'>id-9</p>
</div>
```



更多信息

https://ezdojs.github.io



欢迎技术交流和反馈

- QQ群：1050845971
- 邮箱：cn.coder@tom.com

