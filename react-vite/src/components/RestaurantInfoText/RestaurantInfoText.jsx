function RestaurantInfoText({ restaurant, city, state }) {
	return (
		<div className='header-text'>
			<h1 className='header-h1-title'>{restaurant.name}</h1>
			<div>
				<p>
					{restaurant.avg_rating} • {restaurant.categories.join(' • ')}
					<br />
					{restaurant.address}
					{city && state ? `${city}, ${state}` : ''}
				</p>
				<p>{restaurant.description}</p>
			</div>
		</div>
	);
}

export default RestaurantInfoText;
