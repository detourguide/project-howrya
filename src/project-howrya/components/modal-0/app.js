import React, { Component } from 'react';
import './style.css';

class modalZero extends Component
{
	render() {
		return this.props.show===0?
		 (
			<div>
				<div className="custom-ModalHeader">
					<img src={window.location.origin + '/img/Leaf.gif'} alt="err 404 :["/>
					<h5>Hello, Welcome!</h5>
				</div>

				<div id="p">
					<h6>In order to ensure the best experience possible, </h6>
					We would like to find out about what you would be really
					interested in. You can always change these settings later
					if change your mind. We hope you have a good user 
					experience!
				</div>
			</div>
		):null;
	}
}

export default modalZero;
