function RestaurantInfoText({ restaurant, city, state }) {
	return (
		<div className='header-text'>
			<h1 className='header-h1-title'>{restaurant.name}</h1>
			<div>
				<p>
					{restaurant.categories.join(' • ')}
					<br />
					{restaurant.address}
					<br />
					{city && state ? `${city}, ${state}` : ''}
				</p>
				<p className='rest-page-desc'>{restaurant.description}</p>
			</div>
		</div>
	);
}

export default RestaurantInfoText;
