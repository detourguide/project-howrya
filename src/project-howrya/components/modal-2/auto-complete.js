import React, { Component } from 'react';
import './style.css';
import Suggestions from './auto-suggestions';

//	Simple key generator (npm install --save uuid)
import uuid from 'uuid';

class AutoComplete extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			inputValue:'',
			showSuggestions:false,
		};
	}

	toggleHidden(x)
	{
		x===false
			? setTimeout(function(){this.setState({showSuggestions:x});}
				.bind(this),100)
			: this.setState({showSuggestions:x});
	};

	updateInputValue(x)
	{
		this.setState({
			inputValue: x.target.value
		});
		this.props.valuechange(x);
	}

	render(){
		return (
			<div>
				<input
					onFocus={this.toggleHidden.bind(this,true)}
					onBlur={this.toggleHidden.bind(this,false)}
					onChange={x=>this.updateInputValue(x)}
					placeholder={this.props.placeholder}
				/>
				<Suggestions
					currentInputValue={this.state.inputValue}
					currentCatagory={this.props.currentCatagory}
					className={"show-"+this.state.showSuggestions}
					ul={this.props.ul}
					suggestionClicked={this.props.SuggestionClicked}
					key={uuid.v4()}
				/>
			</div>
		);
	}
}

export default AutoComplete;
