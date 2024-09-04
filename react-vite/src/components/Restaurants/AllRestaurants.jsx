import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import './all_restaurants.css';
import { useNavigate } from 'react-router-dom';

function AllRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Fetch user session

	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);
	const selectedCategory = useSelector(
		(state) => state.restaurants.selectedCategory
	);

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	let filteredRestaurants = Object.values(all_restaurants);

	if (selectedCategory) {
		filteredRestaurants = filteredRestaurants.filter((restaurant) =>
			restaurant.categories.includes(selectedCategory)
		);
	}

	return (
		<div className='restaurant-list'>
			{filteredRestaurants.map((restaurant) => (
				<div
					key={restaurant.id}
					onClick={() => navigate(`/restaurants/${restaurant.id}`)}
					className='restaurant-tile-shape'
				>
					<div className='restaurant-image-div'>
						<img
							src={restaurant.banner_img}
							alt={restaurant.name}
							className='restaurant-image'
						/>
					</div>
					<div className='restaurant-info-text'>
						<div>
							<h2>{restaurant.name}</h2>
							<p>
								{restaurant.average_rating.toFixed(1) > 0.0
									? restaurant.average_rating.toFixed(1)
									: 'New'}
							</p>
							<p className='rest-category'>
								{restaurant.categories.join(' • ')}
							</p>
							<p className='all-rest-page-desc'>{restaurant.description}</p>
						</div>
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
