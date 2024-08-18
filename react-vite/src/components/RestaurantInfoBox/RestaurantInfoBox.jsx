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
					{restaurant.address}
					<br />
					{city && state ? `${city}, ${state}` : ''}
				</div>
				<div className='res-schedule'>
					Sun - Sat
					<br />
					Open: {restaurant.open_time}
					<br />
					Close: {restaurant.close_time}
				</div>
			</div>
		</>
	);
}

export default RestaurantInfoBox;
