# React Tag Field

一个React实现的标签输入框

[DEMO](http://lingyucoder.github.io/react-as-tagfield/demo/demo.html)

## Install

```
npm install --save react-as-tagfield
```

## Usage

```javascript
var TagField = require('react-as-tagfield');

React.render(<TagField value={['JavaScript', 'CSS', 'HTML']} placeholder="输入新标签" onChange={this.handleTagChange}/>, container)
```

## Properties

```jsx
defaultValue: React.PropTypes.arrayOf(React.PropTypes.string), //标签的默认值
value: React.PropTypes.arrayOf(React.PropTypes.string), //标签的值
onChange: React.PropTypes.func, //标签变化的回调函数
placeholder: React.PropTypes.string, //提示文案
name: React.PropTypes.string //隐藏input的name属性
```

## Methods

### array:string getValue()

获取当前标签列表

### setValue(array:string)

设置标签列表

### on(string, function)

绑定事件

### once(string, function)

绑定仅触发一次的事件

### off(string [, function])

解绑事件，如果没提供回调，则解绑该事件下所有回调

### fire(string, [data1, data2...])

触发事件，除第一个参数外，其他参数将作为数据传给事件回调函数

### fireAll(string, [data1, data2...])

触发事件，在执行事件注册的回调函数前，先执行props上的onXXX方法

如`fireAll('change')`将会先执行`this.props.onChange`方法

## Development

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## License

The MIT License (MIT)

Copyright (c) 2015 Lingyu Wang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
