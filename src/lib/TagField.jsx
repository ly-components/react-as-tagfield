import React from 'react';
import Tag from './Tag';
import ReactMixin from 'react-mixin';
import EventMixin from 'react-as-event-mixin';

class TagField extends React.Component {
	static displayName = 'TagField';
	static propTypes = {
		defaultValue: React.PropTypes.arrayOf(React.PropTypes.string),
		name: React.PropTypes.string,
		onChange: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.arrayOf(React.PropTypes.string)
	};
	static defaultProps = {
		defaultValue: [],
		value: null,
		onChange: () => {},
		placeholder: 'Add a tag',
		name: null
	};
  constructor(props) {
		super(props);
		this.state = {
			canDelete: false,
			highlight: false,
      tags: props.value || props.defaultValue
		};
		this._handleDelete = this._handleDelete.bind(this);
	}
	componentDidMount() {
		let $tags = React.findDOMNode(this);
		let $input = $tags.querySelector('.react-as-tagfield-input');
		$input.addEventListener('keyup', (e) => {
			let key;
			key = e.keyCode || e.which;
			if (key === 13 || key === 188) {
				this._createTag($input.value.replace(',', ''));
        $input.value = '';
      } else if (key === 8)
        $input.value === '' && this._removeTag();
      else
        this.setState({
        	highlight: false,
        	canDelete: false
        });
		}, true);
	}
	componentWillReceiveProps(nextProps) {
		Array.isArray(nextProps.value) && this.setValue(nextProps.value);
	}
	getValue() {
		return this.state.tags;
	}
	setValue(tags) {
		this.setState({
			tags: tags
		});
	}
	_createTag(value) {
		if(!value.trim()) return;
		let tags = this.state.tags;
		if(tags.indexOf(value) !== -1) return;
		tags.push(value);
		this.setState({
			tags: tags,
			highlight: false
		});
		this.fireAll('change', tags);
	}
	_removeTag() {
		let tags = this.state.tags;
		if(this.state.canDelete) {
			tags = tags.slice(0, -1);
			this.setState({
				tags: tags,
				canDelete: false,
				highlight: false
			});
			this.fireAll('change', tags);
		} else
			this.setState({
				highlight: true,
				canDelete: true
			});
	}
	_handleDelete(value) {
		let tags = this.state.tags;
		let index;
		if(!tags || (index = tags.indexOf(value)) === -1) return;
		tags.splice(index, 1);
		this.setState({
			tags
		});
		this.fireAll('change', tags);
	}
	render() {
		let {
			tags,
			highlight
		} = this.state;
		let {
			name,
			placeholder
		} = this.props;
    return (
    	<div className='react-as-tagfield'>
			  {
					tags.map((tag, index) => {
						return (highlight && index === tags.length - 1) ? <Tag highlight onDelete={this._handleDelete} value={tag}/> : <Tag  onDelete={this._handleDelete} value={tag}/>;
			  	})
				}
				{ name && <input name={name} type="hidden" value={tags}></input> }
			  <input className='react-as-tagfield-input' placeholder={placeholder} type='text'/>
			</div>
    );
	}

}

ReactMixin(TagField.prototype, EventMixin);

export default TagField;
