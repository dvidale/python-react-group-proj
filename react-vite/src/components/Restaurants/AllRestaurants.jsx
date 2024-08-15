import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import './all_restaurants.css';
import { useNavigate } from 'react-router-dom';

function AllRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);

	// const restaurantsArr = Object.values(all_restaurants)

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);



	const handleRedirect = (id) => {
		navigate(`/restaurants/${id}`);
	};

	return (
		<div className='restaurant-list'>
			{restaurantsArr.map((restaurant) => (
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
					<h2> {restaurant.name} </h2>
					<p> {restaurant.avg_rating} </p>
					<p>{restaurant.categories.join(' • ')}</p>
					<div>{restaurant.description} </div>
					{(city && state) || (restaurant.city && restaurant.state) ? (
						<div>
							{restaurant.address}, {city || restaurant.city},{' '}
							{state || restaurant.state}
						</div>
					) : null}
				</div>
			))}
		</div>
	);
}

export default AllRestaurants;
