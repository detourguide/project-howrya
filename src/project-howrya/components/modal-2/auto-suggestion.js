import React, { Component } from 'react';
import './style.css';

class Suggestion extends Component
{
	render() {
		return (
			<li onClick={this.props.onClick}>{this.props.value}</li>
		);
	}
}

export default Suggestion;
