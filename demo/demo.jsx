import React from 'react';
import AsTagField from '../src/index';

require('./demo.less');

class AsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }
  handleSubmit() {
    alert(JSON.stringify(this.refs.tags.getValue()));
  }
  handleReset() {
    this.refs.tags.setValue(['JavaScript', 'CSS', 'HTML']);
  }
  handleTagChange(tags) {
    this.setState({
      tags: tags
    });
    console.log(tags.join(', '));
  }
  render() {
    return (
      <div>
        <div>
          <AsTagField value={['JavaScript', 'CSS', 'HTML']} ref="tags" placeholder="输入新标签" onChange={this.handleTagChange} ></AsTagField>
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
