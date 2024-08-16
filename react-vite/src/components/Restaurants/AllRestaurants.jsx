import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import { useNavigate } from 'react-router-dom';
import './all_restaurants.css';

function AllRestaurants({ city, state, selectedCategory }) {
	console.log('THIS IS SELECTED ============>', selectedCategory); // Debugging: Check selectedCategory

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	let filteredRestaurants = Object.values(all_restaurants);

	if (selectedCategory) {
		filteredRestaurants = filteredRestaurants.filter((restaurant) => {
			// Ensure restaurant.categories exists and is an array
			if (Array.isArray(restaurant.categories)) {
				// Check if selectedCategory is included in the restaurant's categories
				return restaurant.categories.includes(selectedCategory);
			}
			return false;
		});
	}

	const handleRedirect = (id) => {
		navigate(`/restaurants/${id}`);
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
							<div className='restaurant-address'>
								{restaurant.address}, {city || restaurant.city},{' '}
								{state || restaurant.state}
							</div>
						) : null}
					</div>
				</div>
			))}
		</div>
	);
}

export default AllRestaurants;
