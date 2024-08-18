import './RestaurantInfoBox.css';

function RestaurantInfoBox({ restaurant, city, state }) {
	return (
		<>
			<div className='restaurant-info'>
				<div className='delivery-fee'>
					<p>
						${restaurant.delivery_fee} delivery fee {restaurant.delivery_time}{' '}
						min
					</p>
				</div>
				<div className='res-address'>
					<p>
						{restaurant.address} {city && state ? `${city}, ${state}` : ''}
					</p>
				</div>
				<div className='res-schedule'>
					<p>Sun - Sat</p>
					<br />

					<p>Open: {restaurant.open_time}</p>
					<br />
					<p>Close: {restaurant.close_time}</p>
				</div>
			</div>
		</>
	);
}

export default RestaurantInfoBox;
