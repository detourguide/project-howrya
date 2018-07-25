import React, { Component } from 'react';
import "./style.css";
import { Button, Modal, ModalBody, ModalFooter} from 'reactstrap';

//	Simple key generator (npm install --save uuid) used in modal-1
import uuid from 'uuid';

import ModalZero from './components/modal-0/app.js'
import ModalOne from './components/modal-1/app.js';
import ModalTwo from './components/modal-2/app.js';

/*	eslint-disable */
/*	eslint-enable */


class UserQuery extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			modal: true,
			TouristAttractions:[],
			FrequentlySought:[],
			UserCatagory:[],
			modalSelected: 0,	/* = Starting Modal (Useful for Testing) = */
			AllUserInterests:[] /* = ans = */
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle()
	{
		this.setState({modalSelected:0});
		this.setState({modal:!this.state.modal});
	}
	changeModal(x)
	{
		let mutable=this.state;

		x === false && mutable.modalSelected !== 0
			?	mutable.modalSelected = --mutable.modalSelected
			:	x === true && mutable.modalSelected !== 2
			?	mutable.modalSelected = ++mutable.modalSelected
			:	this.toggle();

		this.setState({modalSelected:mutable.modalSelected});
	}

	updateAllUserInterests()
	{
		let Freq=[];

		this.state.FrequentlySought
			.filter(x=>{return x.active===true?x:null})
			.forEach(x=>Freq.push({
				catagory:x.catagory,sub_catagory:x.sub_catagory,id:x.id}));

		this.state.UserCatagory
			.forEach(x=>Freq.push(x));

		Freq									// sort by catagory
			.sort((a,b)=>
			{
				a = a.catagory.toUpperCase(); 	// ignore upper and lowercase
				b = b.catagory.toUpperCase(); 	// ignore upper and lowercase
				return a === b
					? 0
					: a<b
						? -1
						:  1;
			});
		console.log(Freq);
	}

	render()
	{
		let modalProgress=this.state.modalSelected!==2?"Next":"Finish"
		return(
			<div id="pageLayout">
				<Button
					color="danger"
					onClick={x=>this.toggle()}
				>
					Modal Test
				</Button>

				<Button
					color="danger"
					onClick={x=>this.updateAllUserInterests()}
				>
					Modal Test
				</Button>



					{/* = Modal ============================================ */}
					<Modal
						isOpen={this.state.modal}
						toggle={this.toggle}
						className="modal-lg"
					>
					<ModalBody>
						<ModalZero
							show={this.state.modalSelected}
						>
						</ModalZero>
						<ModalOne
							show={this.state.modalSelected}
							Attractions={this.state.FrequentlySought}
						>
						</ModalOne>
						<ModalTwo
							show={this.state.modalSelected}
							Attractions={this.state.TouristAttractions}
							UserCatagory={this.state.UserCatagory}
						>
						</ModalTwo>
					</ModalBody>

					<ModalFooter>
						<Button
							id={"showEquals-"+this.state.modalSelected}
							color="info"
							onClick={()=>this.changeModal(false)}
						>
						Prev
						</Button>
						<Button
							color="primary"
							onClick={()=>this.changeModal(true)}
						>
							{modalProgress}
						</Button>
					</ModalFooter>
				</Modal>
				{/* ======================================================== */}
			</div>
		);
	}

	componentDidMount()
	{
		this.valueOfTouristAttractions();
	};

//	= TouristAttractions Stub ================================
//	that follows the naming schema
//	Four Primary Sets in Universal Set
//	Food & Drink, Adventure & Sport, Art & Culture, Health & Wellness
	valueOfTouristAttractions()
	{
		this.setState({TouristAttractions:
		[
			/* = Abnormal Behaviour Tests ============== */
			{
				catagory: 'Duplicate Catagory',
				sub_catagory:'Duplicate Sub Test',
				title:'Duplicate title Test',
				id:uuid.v4(),
			},
			{
				catagory: 'Duplicate Catagory',
				sub_catagory:'Duplicate Sub Test',
				title:'Duplicate title Test',
				id:uuid.v4(),
			},
			{
				catagory: 'Duplicate Catagory',
				sub_catagory:'Duplicate Sub Test',
				title:'Duplicate title Test',
				id:uuid.v4(),
			},
			/* ======================================== */
			{
				catagory: 'Food & Drink',
				sub_catagory:'Restaurants',
				title:'Da Gennaro Restaurant, New York City',
				id:uuid.v4(),
			},
			{
				catagory: 'Food & Drink',
				sub_catagory:'Coffee',
				title:'Ralph\'s Coffee',
				id:uuid.v4(),
			},
			{
				catagory: 'Food & Drink',
				sub_catagory:'Coffee',
				title:'cafe defacto',
				id:uuid.v4(),
			},
			{
				catagory: 'Food & Drink',
				sub_catagory:'Bar\'s',
				title:'Night Jar, London',
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory:'Extreme Sports',
				title:'Abseil Cape Enrage, Canada',
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory: 'Winter Sports',
				title:'Snowboarding, Serre Chevalier France',
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory: 'Water Sports',
				title:'surfing, Sebastian Inlet Florada',
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Art Galleries',
				title:'Galleria dell\'Accademia, Florance',
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Religious',
				title:'Sumiyoshi Taisha Shrine, Osaka Japan',
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Historical',
				title:'Château du Haut-Kœnigsbourg, France',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Hot Springs',
				title:'Geothermal Springs, Landbrotalaug Iceland',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Hot Springs2',
				title:'Geothermal Springs, Landbrotalaug Iceland',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Hot Springs',
				title:'Geothermal Springs, Landbrotalaug Iceland',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Hot Springs',
				title:'Geothermal Springs, Landbrotalaug Iceland',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Spa and Massage',
				title:'BodyHoliday, St Lucia',
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Scenic walks ',
				title:'Courtown Woods, Ireland',
				id:uuid.v4(),
			}
		]});

		// = Stub for modal 2 FrequentlySought Catagories ==============
		this.setState({FrequentlySought:
		[
			{
				catagory: 'Food & Drink',
				sub_catagory:'Restaurants',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Food & Drink',
				sub_catagory:'Coffee',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Food & Drink',
				sub_catagory:'Bar\'s',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory:'Transportation',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory: 'Kids',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Adventure & Sport',
				sub_catagory: 'Sports',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Art Galleries',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Music',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Art & Culture',
				sub_catagory: 'Historical',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Beaches',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Spa and Massage',
				active:true,
				id:uuid.v4(),
			},
			{
				catagory: 'Health & Wellness',
				sub_catagory: 'Scenic walks ',
				active:true,
				id:uuid.v4(),
			}
		]});
	}
	// =========================================================================
}

export default UserQuery;
