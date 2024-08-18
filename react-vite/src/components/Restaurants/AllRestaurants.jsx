import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import LoginFormModal from '../LoginFormModal';
import './all_restaurants.css';

function AllRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fetch user session
	const sessionUser = useSelector((state) => state.session.user);
	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);
	const selectedCategory = useSelector(
		(state) => state.restaurants.selectedCategory
	);

	const { setModalContent } = useModal();

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	let filteredRestaurants = Object.values(all_restaurants);

	if (selectedCategory) {
		filteredRestaurants = filteredRestaurants.filter((restaurant) =>
			restaurant.categories.includes(selectedCategory)
		);
	}

	const handleRedirect = (id) => {
		if (!sessionUser) {
			setModalContent(<LoginFormModal />); // Show login modal if user is not signed in
		} else {
			navigate(`/restaurants/${id}`);
		}
	};

	return (
		<div className='restaurant-list'>
			{filteredRestaurants.map((restaurant) => (
				<div
					key={restaurant.id}
					onClick={() => handleRedirect(restaurant.id)}
					className='restaurant-tile'
				>
					<img
						src={restaurant.banner_img}
						alt={restaurant.name}
						className='restaurant-image'
					/>
					<div className='restaurant-info'>
						<h2>{restaurant.name}</h2>
						<p>{restaurant.avg_rating}</p>
						<p>{restaurant.categories.join(' • ')}</p>
						<p>{restaurant.description}</p>
						{(city && state) || (restaurant.city && restaurant.state) ? (
							<p className='restaurant-address'>
								{restaurant.address}, {city || restaurant.city},{' '}
								{state || restaurant.state}
							</p>
						) : null}
					</div>
				</div>
			))}
		</div>
	);
}

export default AllRestaurants;
