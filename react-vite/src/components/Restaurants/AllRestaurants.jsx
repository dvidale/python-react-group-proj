import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import { useNavigate } from 'react-router-dom';
import './all_restaurants.css';

function AllRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
	}else if(ownerFilter){
		filteredRestaurants = restaurantsArr.filter((restaurant) =>
		restaurant.owner_id === user.id)
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
