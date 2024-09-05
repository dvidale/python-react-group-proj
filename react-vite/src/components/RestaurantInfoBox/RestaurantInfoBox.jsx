import './RestaurantInfoBox.css';

function RestaurantInfoBox({ restaurant, city, state }) {

	let openHours = restaurant.open_time.split(":")[0]
	const normalClockOpen = openHours < 10 ? +(openHours)[1] : +(openHours)  

	let openMinutes = restaurant.open_time.split(":")[1]

	let closeHours = restaurant.close_time.split(":")[0]
	const normalClockClose = +(closeHours) - 12

	let closeMinutes = restaurant.close_time.split(":")[1]


	return (
		<div className='restaurant-info'>
			<div className='delivery-fee'>
				<h3 className='delivery-fee-text'>
					${restaurant.delivery_fee} delivery fee {restaurant.delivery_time} min
				</h3>
			</div>
			<div className='res-address'>
				<h3 className='delivery-fee-text-p'>
					{restaurant.address} {city && state ? `${city}, ${state}` : ''}
				</h3>
			</div>
			<div className='res-schedule'>
				<h3 className='delivery-fee-text-p'>Sun - Sat</h3>
				<br />

				<h3 className='delivery-fee-text-p'>Open: {normalClockOpen}:{openMinutes}{normalClockOpen < 12 ? `AM` : `PM`}</h3>
				<br />
				<h3 className='delivery-fee-text-p'>Close: {normalClockClose}:{closeMinutes}PM</h3>
			</div>
		</div>
	);
}

export default RestaurantInfoBox;
