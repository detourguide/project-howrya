import React, { Component } from 'react';
import './style.css';

class ListItem extends Component
{
	handleDeleteTag()
	{
		this.props.onDelete(this.props.ul.id);
	}

	render()
	{
		return (
			<li
				className={"tag-"+this.props.ul.catagory.substring(0,2)}
				onClick={this.handleDeleteTag.bind(this)}
			>
				<div>{this.props.ul.catagory}:</div>
				<div>{this.props.ul.sub_catagory}</div>
			</li>)
	}
}

export default ListItem;
