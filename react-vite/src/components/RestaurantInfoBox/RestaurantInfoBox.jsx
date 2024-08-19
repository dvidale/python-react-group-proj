import './RestaurantInfoBox.css';

function RestaurantInfoBox({ restaurant, city, state }) {
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

				<h3 className='delivery-fee-text-p'>Open: {restaurant.open_time}</h3>
				<br />
				<h3 className='delivery-fee-text-p'>Close: {restaurant.close_time}</h3>
			</div>
		</div>
	);
}

export default RestaurantInfoBox;
