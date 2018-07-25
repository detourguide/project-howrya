import React, { Component } from 'react';
import './style.css';
import ListItem from "./ListItem";

//	Simple key generator (npm install --save uuid)
import uuid from 'uuid';

class ModalOne extends Component
{
	render() {
		if(this.props.show===1)
		{
			if(this.props.Attractions.length!==0)
			{
				this.props.Attractions.map(x=>{return x.active=true});

				let catagories = new Set([]);
				this.props.Attractions.forEach(x=>catagories.add(x.catagory));
				catagories = Array.from(catagories);

				let li = catagories.map(x=>
				{
					return(
						<ListItem
							Attractions={this.props.Attractions}
							catagories={x}
							key={uuid.v4()}
						/>
					);
				});

				return (
					<ul>
						{li}
					</ul>
				);
			}
			return (
				<div>
					ERR404: Content not found, and may not be availible at present.
				</div>
			);
		}
		else return null;
	}
}

export default ModalOne;
