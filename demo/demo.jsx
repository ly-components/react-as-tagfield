import React from 'react';
import AsTagField from '../src/index';

require('./demo.less');

class AsForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit = () => {
    alert(this.state.tags.join(','));
  }
  handleTagChange = (tags) => {
    this.setState({
      tags: tags
    });
    console.log(tags.join(', '));
  }
  render = () => {
    return (
      <div>
        <div>
          <AsTagField ref="tags" placeholder="输入新标签" onChange={this.handleTagChange} initTags={['JavaScript', 'CSS', 'HTML']}></AsTagField>
        </div>
        <div>
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
