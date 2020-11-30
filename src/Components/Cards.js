import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out the Destinations</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-9.jpg'
							text='Explore the hidden water Fall'
							label='Adventure'
							path='/services'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='Explore the beach'
							label='Luxury'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/img-3.jpg'
							text='Set Sail in the Atlantic Ocean visiting'
							label='Mystery'
							path='/services'
						/>
						<CardItem
							src='images/img-4.jpg'
							text='Experience Football on Top of the Himalayan Mountains'
							label='Adventure'
							path='/services'
						/>
						<CardItem
							src='images/img-8.jpg'
							text='Ride through the Sahara Desert on a guided Camel Tour'
							label='Adreana Line'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
