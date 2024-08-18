import './RestaurantInfoBox.css';

function RestaurantInfoBox({ restaurant, city, state }) {
	return (
		<>
			<div className='restaurant-info'>
				<div className='delivery-fee'>
					<p className='delivery-fee-text'>
						${restaurant.delivery_fee} delivery fee {restaurant.delivery_time}{' '}
						min
					</p>
				</div>
				<div className='res-address'>
					<p className='delivery-fee-text-p'>
						{restaurant.address} {city && state ? `${city}, ${state}` : ''}
					</p>
				</div>
				<div className='res-schedule'>
					<p className='delivery-fee-text-p'>Sun - Sat</p>
					<br />

					<p className='delivery-fee-text-p'>Open: {restaurant.open_time}</p>
					<br />
					<p className='delivery-fee-text-p'>Close: {restaurant.close_time}</p>
				</div>
			</div>
		</>
	);
}

export default RestaurantInfoBox;
