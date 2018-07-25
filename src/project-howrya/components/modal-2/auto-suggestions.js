import React, { Component } from 'react';
import './style.css';
import Suggestion from './auto-suggestion';
import uuid from 'uuid';

class Suggestions extends Component
{
	render() {
		const input = this.props.currentInputValue;
		let ul = new Set ([]);

		this.props.ul
			.filter(x=>{return x.catagory===this.props.currentCatagory?x:null;})
			.map(x=>{return x.sub_catagory})
			.forEach(x=>{ul.add(x)})
		ul=Array.from(ul);

		if(input.length!==0)
			ul=ul.filter(x=>
			{
				return	x.substring(0,input.length).toLowerCase()
						===
						input.substring(0,x.length).toLowerCase()?
							x:null;
			});

		// = Only Allows 5 Results = = = = = = = =
		ul = ul.filter((x,i)=>{return i<5?x:null})

		// = JSX mapping = = = = = = = = = = = = =
		Array.from(ul).length!==0
			?ul=ul.map(x=>
				<Suggestion
					onClick={this.props.suggestionClicked}
					value={x}
					key={uuid.v4()}
				/>)
			:ul=
				<Suggestion
					value={"No Matching Catagories"}
					key={uuid.v4()}
				/>;


		return(<div className={this.props.className}>
			{ul}
		</div>);
	}
}

export default Suggestions;
