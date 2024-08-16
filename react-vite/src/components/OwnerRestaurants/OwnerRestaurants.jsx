import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRestaurants } from '../../redux/restaurants';
import  OpenModalButton from '../../components/OpenModalButton'
import DeleteRestaurantModal from '../DeleteRestaurantModal/DeleteRestaurantModal.jsx';
import { Link } from 'react-router-dom';


function OwnerRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const owner = useSelector((state) => state.session.user);
	const all_restaurants = useSelector(
		(state) => state.restaurants.AllRestaurants
	);

	useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);

	

	// Filter restaurants by owner_id
	const filteredRestaurants = Object.values(all_restaurants).filter(
		(restaurant) => restaurant.owner_id === owner.id
	);

	return (
		<div className='restaurant-list'>
			{filteredRestaurants.map((restaurant) => (
				<div
					key={restaurant.id}
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
					<div>  
					<button id="update-restaurant-button" >
						<Link to={`/restaurants/current/${restaurant.id}`}   >
					
					Update</Link> </button>
						<OpenModalButton id='delete-restaurant-modal-button' 
						buttonText='Delete'
						modalComponent={<DeleteRestaurantModal restaurantId={restaurant.id}/>} />

						
						
					</div>
				</div>
			))}
		</div>
	);
}

export default OwnerRestaurants;
