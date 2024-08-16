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
				</div>
				<h1>{restaurant.name}</h1>
				<p>
					{restaurant.avg_rating} (review count) •{' '}
					{restaurant.categories.join(' • ')}<br />
					{restaurant.address}
					{city && state ? `, ${city}, ${state}` : ''}
				</p>
				<p>{restaurant.description}</p>
			</div>
		</>
	);
}

export default RestaurantHeader;
