function RestaurantInfoText({ restaurant, city, state }) {
	return (
		<div className='header-text'>
			<p>
				{restaurant.avg_rating} • {restaurant.categories.join(' • ')}
				<br/>
				{restaurant.address}
				<br/>
				{city && state ? `${city}, ${state}` : ''}
			</p>
			<p>{restaurant.description}</p>
		</div>
	);
}

export default RestaurantInfoText;
