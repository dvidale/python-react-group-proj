import { useSelector } from 'react-redux';
import OwnerRestaurants from '../OwnerRestaurants/OwnerRestaurants';
import { useNavigate } from 'react-router-dom';
import './RestaurantManagement.css';

function RestaurantManagement() {
	const navigate = useNavigate();
	const sessionUser = useSelector((state) => state.session.user);
	const savedLocation = useSelector((state) => state.location);
	const city = sessionUser?.city || savedLocation.city;
	const state = sessionUser?.state || savedLocation.state;

	const createRestaurant = () => {
		navigate(`/restaurants/new`);
	};

	return (
		<div className='rest-management-holder'>
			<h1 className='manage-title'>Restaurant Management</h1>
			<button
				id='create-restaurant-button'
				className='create-update-btn'
				onClick={() => createRestaurant()}
			>
				Submit a New Restaurant
			</button>
			<OwnerRestaurants
				city={city}
				state={state}
			/>
		</div>
	);
}

export default RestaurantManagement;
