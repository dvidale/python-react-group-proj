import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as restaurantsActions from '../../redux/restaurants';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './all_restaurants.css';

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
	const ratingSummary = useSelector((state) => state.reviewsList.reviewSummary);

	useEffect(() => {
		dispatch(restaurantsActions.getRestaurants())
		.then(() => dispatch(fetchReviews()));
	}, [dispatch]);

	let filteredRestaurants = Object.values(all_restaurants);

	if (selectedCategory) {
		filteredRestaurants = filteredRestaurants.filter((restaurant) =>
			restaurant.categories.includes(selectedCategory)
		);
	}


	const roundToHalf = (rating) => {
		return Math.round(rating * 2) / 2;
	};

	// Check if there are reviews
	const hasReviews = ratingSummary && ratingSummary.total_reviews > 0;

	let roundedRating = 0;
	let fullStars = 0;
	let halfStar = false;
	let emptyStars = 0;

	if (hasReviews) {
		// Get the rounded rating for stars
		const averageRating = Number(ratingSummary.average_rating) || 0;
		roundedRating = roundToHalf(averageRating);

		// Calculate the number of full stars, half stars, and empty stars
		fullStars = Math.min(5, Math.floor(roundedRating));
		halfStar = roundedRating % 1 !== 0;
		emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));
	} else {
		// No reviews yet
		emptyStars = 5;
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
						<div className='rest-info-top'>
							<h2>{restaurant.name}</h2>
							<div className='star-rating-container'>
								<p className='average-rating-number'>
									{restaurant.average_rating.toFixed(1) > 0.0
										? restaurant.average_rating.toFixed(1)
										: 'New'}
								</p>
								<div className='star-rating'>
										{/* Render full stars */}
										{[...Array(fullStars)].map((_, index) => (
											<FaStar key={index} />
										))}
										{/* Render a half star if needed */}
										{halfStar && <FaStarHalfAlt />}

										{/* Render empty stars */}
										{[...Array(emptyStars)].map((_, index) => (
											<FaRegStar key={index} />
										))}
								</div>
							</div>
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
