import '../RestaurantPage/restaurant_page.css';
import { useSelector } from 'react-redux';

function RestaurantHeader({ restaurant }) {
	// Get the session user and saved location from Redux store
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	// Determine the city and state to be displayed
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	return (
		<>
			<div id='header-container'>
				<div className='banner-img-container'>
					<img
						alt={restaurant.name}
						src={restaurant.banner_img}
					/>
				<h1 className='restaurant-title'>{restaurant.name}</h1>
				
				</div>
				<p>
					{restaurant.avg_rating} •{' '}
					{restaurant.categories.join(' • ')}<br />
					{restaurant.address}
					{city && state ? `${city}, ${state}` : ''}
				</p>
				<p>{restaurant.description}</p>
			</div>
		</>
	);
}

export default RestaurantHeader;
