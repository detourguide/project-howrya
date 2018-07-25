import React, { Component } from 'react';
import './style.css';
import ListItem from "./ListItem";

//	Simple key generator (npm install --save uuid)
import uuid from 'uuid';

class ModalOne extends Component
{
	render() {

		if(this.props.Attractions.length!==0)
		{
			let mutable = this.props;
			mutable.Attractions.map(x=>{return x.active=true});
			this.props = mutable;


			let catagories = new Set([]);
			this.props.Attractions.forEach(x=>catagories.add(x.catagory));

			let li = Array.from(catagories).map(x=>
			{
				return(
					<ListItem
						Attractions={this.props.Attractions} catagories={x} key={uuid.v4()}
					/>
				);
			});

			return (
				<div>
					<ul>
						{li}
						{/* Test Button */}
						<button onClick={()=>(this.props.Attractions.forEach(x=>{if(x.active===true)console.log(x.title)}))}>test test test 123</button>
					</ul>
				</div>
			);
		}
		return (
			<div>ERR404: Content not found, and may not be availible at present.</div>
		);
	}
}

export default ModalOne;
