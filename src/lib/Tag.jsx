import React from 'react';

export default class Tag extends React.Component {
	static displayName = 'Tag';
	static propTypes = {
		highlight: React.PropTypes.bool,
		onDelete: React.PropTypes.func,
		value: React.PropTypes.node
	};
	static defaultProps = {
		value: null,
		highlight: false,
		onDelete: () => {}
	};
	constructor() {
		super();
		this._handleDelete = this._handleDelete.bind(this);
	}
	_handleDelete() {
		this.props.onDelete(this.props.value);
	}
	render() {
		return (
			<div className={'react-as-tagfield-tag' + (this.props.highlight ? ' highlight':'')}>
				{this.props.value}
				<span className="react-as-tagfield-tag-del" onClick={this._handleDelete}></span>
			</div>
		);
	}
}
