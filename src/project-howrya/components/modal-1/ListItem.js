import React, {Component} from 'react';
import uuid from 'uuid';

class ListItem extends Component
{
	render()
	{
		const image = <img src=
		{
			window.location.origin+'/img/catagories/'+this.props.catagories
			+'.jpg'
		}
			alt="Error 404: Not Found"
		/>

		let SubcatagoryListArray=new Set([]);

		this.props.Attractions
			.filter(x=>{return x.catagory===this.props.catagories?x:null})
			.map(x=>SubcatagoryListArray.add(x.sub_catagory));
		SubcatagoryListArray = Array
			.from(SubcatagoryListArray)
			.map(x=>{return {catagory:x,active:true}})

		return (
			<li className="ListItem">
				<div className="custom-ModalHeader">
					<h5>{this.props.catagories}</h5>
					{image}
					<div>
						<SubCatagoriesList
							Attractions={this.props.Attractions}
							Catagories={SubcatagoryListArray}
						/>
					</div>
				</div>
			</li>)
	}
}

class SubCatagoriesList extends Component
{
	render()
	{
		let ul = this.props.Catagories
			.map(x=>
			{
				return (
					<SubCatagories
						Attractions={this.props.Attractions}
						catagorylist={x}
						key={uuid.v4()}
					/>)
			});
		return (
			<div id="SubCatagories">
				{ul}
			</div>)
	}
}

class SubCatagories extends Component
{
	constructor (props)
	{
		super(props);
		this.state={active:this.props.catagorylist.active}
	}
	ClickEvent = () =>
	{
		const Clicked=this.props.catagorylist;

		this.props.catagorylist.active=!this.state.active;
		this.setState({active:!this.state.active});
		this.props.Attractions.map(x=>
		{
			return x.sub_catagory===Clicked.catagory?
				x.active=Clicked.active:
				x;
		});
	}

	render()
	{
		return (
			<div
				className={this.state.active?"a-true":"a-false"}
				onClick={this.ClickEvent}
			>
			{this.props.catagorylist.catagory}
			</div>)
	}
}

export default ListItem;
