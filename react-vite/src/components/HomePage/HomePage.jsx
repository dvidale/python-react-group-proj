import './home_page.css';
import RestaurantCategories from '../RestaurantCategories';
import AllRestaurants from '../Restaurants/AllRestaurants';
import HomeDeliveryHeader from '../HomeDeliveryHeader/HomeDeliveryHeader';
import LocationForm from '../LocationForm/LocationForm';
import { useSelector } from 'react-redux';

function HomePage() {
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);

	// Determine the city and state to be used
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	return (
		<div className='home-page'>
			{city && state ? (
				<>
					<HomeDeliveryHeader />
					<RestaurantCategories />
					<hr />
					<AllRestaurants
						city={city}
						state={state}
					/>
				</>
			) : (
				<>
					<LocationForm />
					<hr />
					<AllRestaurants />
				</>
			)}
		</div>
	);
}

export default HomePage;
