import { useSelector } from 'react-redux';
import OwnerRestaurants from '../OwnerRestaurants/OwnerRestaurants';
import { Link } from 'react-router-dom';

function RestaurantManagement() {
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	return (
		<>
			<h1>Restaurant Management</h1>
			<button id="create-restaurant-button">  
				<Link to={`/restaurants/new`}>Submit a New Restaurant</Link>
			</button>
			<OwnerRestaurants
				city={city}
				state={state}
			/>
		</>
	);
}

export default RestaurantManagement;
