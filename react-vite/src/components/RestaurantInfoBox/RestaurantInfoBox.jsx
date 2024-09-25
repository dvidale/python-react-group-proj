import './RestaurantInfoBox.css';

function RestaurantInfoBox({ restaurant, city, state }) {
	const today = new Date()
	
	const openHours = restaurant.open_time.split(":")[0]

	const openMinutes = restaurant.open_time.split(":")[1]

	const todaysOpenHours = today.setHours(openHours, openMinutes)
	
	const restaurant_open = new Intl.DateTimeFormat('en-US', {
		hour12: true,
		hour: 'numeric',
		minute:'numeric'
		}).format(todaysOpenHours)


	const closeHours = restaurant.close_time.split(":")[0]
	
	const closeMinutes = restaurant.close_time.split(":")[1]

	const todaysCloseHours = today.setHours(closeHours, closeMinutes)

	const restaurant_close = new Intl.DateTimeFormat('en-US', {
		hour12: true,
		hour: 'numeric',
		minute:'numeric'
		}).format(todaysCloseHours)


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

				<h3 className='delivery-fee-text-p'>Open: {restaurant_open} </h3>
				<br />
				<h3 className='delivery-fee-text-p'>Close: {restaurant_close} </h3>
			</div>
		</div>
	);
}

export default RestaurantInfoBox;
