import React, { Component } from 'react';
import './style.css';
import ListItem from "./ListItem";
import AutoComplete from "./auto-complete";

//	Simple key generator (npm install --save uuid)
import uuid from 'uuid';

class ModalTwo extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			value: 'Food & Drink',
			ValueOfInput: '',
			SubCatagoryPlaceholder: '#',
			Suggestions:[],
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	clearSubmit()
	{
		this.setState({ValueOfInput: '',SubCatagoryPlaceholder: 'Submitted!'});
	}

	commitSubmit(x)
	{
		//	Non Assigned Statement dosen't need Assigning ∴ eslint is disabled
			this.props.UserCatagory.every(a=>				//eslint-disable-line
			{return a.sub_catagory!==x})
			?(
				this.props.UserCatagory.push({
					catagory:this.state.value,
					sub_catagory:x,
					id:uuid.v4()
				}),
				this.clearSubmit())
			:(
				this.setState({SubCatagoryPlaceholder: 'Already Added!'})
			);
	}

	handleSubmit(x)
	{
		x.preventDefault();
		this.state.ValueOfInput.length!==0
			? this.commitSubmit(this.state.ValueOfInput)
			: this.setState({SubCatagoryPlaceholder:"*Input Required"})
	}

	autoHandleSubmit(x)
	{
		x.preventDefault();
		this.commitSubmit(x.target.innerHTML);
	}

	handleChange(x) {
		this.setState({
			value: x.target.value,
			SubCatagoryPlaceholder: "#",
		});
	}

	updateValueOfInput(x) {
		this.setState({
			ValueOfInput: x.target.value,
		});
	}

	handleDeleteTag(id)
	{
		let tags = this.props.UserCatagory;
		const index = tags.findIndex(x=>x.id===id);
		tags.splice(index,1);
		this.setState({UserCatagory:tags})
	}
	render() {
		if(this.props.show===2)
		{
			if(this.props.Attractions.length!==0)
			{
				const UserCatagories = this.props.UserCatagory.map((x,i) =>
				{
					return <ListItem
						ul={x}
						key={uuid.v4()}
						onDelete={this.handleDeleteTag.bind(this)}
					/>
				});

				return (
					<div>
						<div className="custom-ModalHeader">
							<img
								src={window.location.origin+'/img/osaka.jpg'}
								alt="err 404 :["
							/>
							<h5>Add Your Own!</h5>
						</div>
						<div className="container">
							<h6>Finally,</h6>
							<p>
								If there are any other catagories you would be
								interested in submit them below and we will do
								our best in order to make sure we find something
								interesting for you!
							</p>
							<form onSubmit={this.handleSubmit}>
								<label>
									Catagory:
								</label>
								<select
									value={this.state.value}
									onChange={this.handleChange}
								>
									<option value="Food & Drink">
										Food & Drink
									</option>
									<option value="Health & Wellness">
										Health & Wellness
									</option>
									<option value="Art & Culture">
										Art & Culture
									</option>
									<option value="Adventure & Sport">
										Adventure & Sport
									</option>
								</select>

								<div></div>
								<label>
									Sub-Catagory:
								</label>

								<AutoComplete
									placeholder={this.state.SubCatagoryPlaceholder}
									valuechange={this.updateValueOfInput.bind(this)}
									currentCatagory={this.state.value}
									ul={this.props.Attractions}
									SuggestionClicked={this.autoHandleSubmit.bind(this)}
								/>
								<input id="submit" type="submit" value="Submit" />
							</form>
						</div>
						<div className="container" id={UserCatagories.length===0?"hide":"show"}>
							<h6>My Catagories (Click to Remove from List)</h6>
							<ul id="myTags">
								{UserCatagories}
							</ul>
						</div>
					</div>
				);}

			return (
				<div>
					ERR404: Content not found, and may not be availible at present.
				</div>
			);
		}
		else return null;
	}
}

export default ModalTwo;
