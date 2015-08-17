import React from 'react';
import TagField from '../src/index';

require('./demo.less');

class AsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ['JavaScript', 'CSS', 'HTML']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }
  handleSubmit() {
    alert(JSON.stringify(this.refs.tags.getValue()));
  }
  handleReset() {
    this.setState({
      value: ['JavaScript']
    });
  }
  handleTagChange(tags) {
    console.log(tags);
  }
  render() {
    return (
      <div>
        <div>
          <TagField value={this.state.value} ref="tags" placeholder="输入新标签" onChange={this.handleTagChange} ></TagField>
        </div>
        <div>
          <button className="submit" onClick={this.handleReset}>重置</button>
          <button className="submit" onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    );
  }
}

React.render(
  <AsForm/>,
  document.getElementById('tagField')
);
