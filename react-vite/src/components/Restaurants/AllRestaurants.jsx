import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
// import { div } from 'react-router-dom';
import './all_restaurants.css';
import { useNavigate } from 'react-router-dom';

function AllRestaurants() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const sessionUser = useSelector((state) => state.session.user);

	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants());
	}, [dispatch]);

	const handleRedirect = (id) => {
		if (!sessionUser || sessionUser) {
			navigate(`/restaurants/${id}`);
		}
	};

	return (
		<>
			{all_restaurants.map((restaurant) => (
				<div
					key={restaurant.id}
					onClick={() => handleRedirect(restaurant.id)}
					className='restaurant-tile'
				>
					<img
						src={restaurant.banner_img}
						alt=''
					/>
					<h2> {restaurant.name} </h2>
					<p> {restaurant.avg_rating} </p>
					<p>{restaurant.categories.join(' • ')}</p>
					<div>{restaurant.description} </div>
					<div> {restaurant.address} City, State </div>
				</div>
			))}
		</>
	);
}

export default AllRestaurants;
