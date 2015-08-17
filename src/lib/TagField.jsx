import React from 'react';
import Tag from './Tag';
import ReactMixin from 'react-mixin';
import EventMixin from 'react-as-event-mixin';

class TagField extends React.Component {
	static propTypes = {
		value: React.PropTypes.arrayOf(React.PropTypes.string),
		onChange: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		name: React.PropTypes.string
	};
	static defaultProps = {
		value: [],
		onChange: () => {},
		placeholder: 'Add a tag'
	};
  constructor(props) {
		super(props);
		this.state = {
			canDelete: false,
      tags: props.value
		};
	}
	getValue() {
		return this.state.tags;
	}
	setValue(tags) {
		this.setState({
			tags: tags
		});
	}
	componentWillReceiveProps(nextProps) {
		nextProps.value && this.setValue(nextProps.value);
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
						return (highlight && index === tags.length - 1) ? <Tag highlight>{tag}</Tag> : <Tag>{tag}</Tag>;
			  	})
				}
				{ name && <input name={name} type="hidden" value={tags.join(',')}></input> }
			  <input className='react-as-tagfield-input' placeholder={placeholder} type='text'/>
			</div>
    );
	}
	_createTag(value) {
		if(!value.trim()) return;
		var tags = this.state.tags;
		if(tags.indexOf(value) !== -1) return;
		tags.push(value);
		this.setState({
			tags: tags,
			highlight: false
		});
		this.props.onChange(tags);
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
			this.props.onChange(tags);
		} else
			this.setState({
				highlight: true,
				canDelete: true
			});
	}
	componentDidMount() {
		let $tags = React.findDOMNode(this);
		let $input = $tags.querySelector('.react-as-tagfield-input');
		var tags = this.state.tags;
		$input.addEventListener('keyup', (e) => {
			var key;
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
}

ReactMixin(TagField.prototype, EventMixin);

export default TagField;
