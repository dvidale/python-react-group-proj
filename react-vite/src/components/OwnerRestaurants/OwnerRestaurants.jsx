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
	if (!owner) navigate('/');

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

	const handleDelete = (restaurantId) => {
		setModalContent(<DeleteRestaurantModal restaurantId={restaurantId} />);
	};

	return (
		<div className='owned-restaurant-list'>
			{filteredRestaurants.map((restaurant) => (
				<div
					key={restaurant.id}
					className='owned-restaurant-tile-shape'
				>
					<div
						className='owned-restaurant-image-div'
						onClick={() => navigate(`/restaurants/${restaurant.id}`)}
					>
						<img
							src={restaurant.banner_img}
							alt={restaurant.name}
							className='owned-restaurant-image'
						/>
					</div>
					<div
						className='owned-restaurant-info'
						onClick={() => navigate(`/restaurants/${restaurant.id}`)}
					>
						<div>
							<h2 className='owner-rest-name'>{restaurant.name}</h2>
							<p>
								{restaurant.average_rating.toFixed(1) > 0.0
									? restaurant.average_rating.toFixed(1)
									: 'New'}
							</p>
							<p className='rest-category'>
								{restaurant.categories.join(' • ')}
							</p>

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
								onClick={(e) => {
									e.stopPropagation();
									navigate(`/restaurants/current/${restaurant.id}`);
								}}
							>
								Update
							</button>
							<button
								className='owner-delete-btn'
								onClick={() => handleDelete(restaurant.id)}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default OwnerRestaurants;
