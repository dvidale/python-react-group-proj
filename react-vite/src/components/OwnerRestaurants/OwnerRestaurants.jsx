import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRestaurants } from '../../redux/restaurants';
import DeleteRestaurantModal from '../DeleteRestaurantModal/DeleteRestaurantModal.jsx';
import { useNavigate } from 'react-router-dom';
import './OwnerRestaurants.css';
import { useModal } from '../../context/Modal.jsx';

function OwnerRestaurants({ city, state }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { setModalContent } = useModal();

	const owner = useSelector((state) => state.session.user);
	if(!owner) navigate('/')

		
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
		<div className='owned-restaurant-list'>
			{filteredRestaurants.map((restaurant) => (
				<div
					key={restaurant.id}
					className='owned-restaurant-tile-shape'
				>
					<img
						src={restaurant.banner_img}
						alt={restaurant.name}
						className='owned-restaurant-image'
					/>
					<div
						className='owned-restaurant-info'
						onClick={() => navigate(`/restaurants/${restaurant.id}`)}
					>
						<h2 className='owner-rest-name'>{restaurant.name}</h2>
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
					<div className='up-del-btn-holder'>
						<button
							id='update-restaurant-button'
							className='create-update-btn'
							onClick={() => navigate(`/restaurants/current/${restaurant.id}`)}
						>
							Update
						</button>
						<button
							className='owner-delete-btn'
							onClick={() => setModalContent(<DeleteRestaurantModal />)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default OwnerRestaurants;
