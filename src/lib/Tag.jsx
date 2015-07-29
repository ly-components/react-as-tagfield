import React from 'react';

export default class AsTag extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className={'react-as-tagfield-tag' + (this.props.highlight ? ' highlight':'')}>
				{this.props.children}
			</div>
		);
	}
}
