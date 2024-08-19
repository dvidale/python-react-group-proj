import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, reviewSummary } from '../../redux/reviews';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import './reviews.css';

const MainReview = () => {
	const dispatch = useDispatch();
	const ratingSummary = useSelector((state) => state.reviewsList.reviewSummary);
	const id = useSelector((state) => state.restaurants.selectedRestaurant.id);
	console.log('this is the ID', id);
	// const mostRecentReviews = useSelector((state) => state.reviewsList.reviewsListArr)

	// const topTwoRecords = mostRecentReviews.slice(0,2)
	useEffect(() => {
		dispatch(reviewSummary(id));
		dispatch(fetchReviews(id));
	}, [dispatch, id]);

	// Function to round the rating to the nearest 0.5 for rendering stars
	const roundToHalf = (rating) => {
		return Math.round(rating * 2) / 2;
	};

	// Check if there are reviews
	const hasReviews = ratingSummary.total_reviews > 0;

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
		<>
			<div className='restaurant-page-header-review'>
				<h2 className='res-header-title'>Ratings and Reviews</h2>
				<div>
					{hasReviews ? (
						<div className='header-review-structure'>
							<div className='header-stars'>
								<h3 className='res-header-title'>
									{ratingSummary.average_rating.toFixed(1)}
								</h3>
								<div>
									{/* Render full stars */}
									{[...Array(fullStars)].map((_, index) => (
										<FaStar key={index} />
									))}
									{/* Render a half star if needed */}
									{halfStar && <FaStarHalf />}

									{/* Render empty stars */}
									{[...Array(emptyStars)].map((_, index) => (
										<FaRegStar key={index} />
									))}
								</div>
							</div>
							<p className='res-header-title'>
								{ratingSummary.total_reviews} Reviews
							</p>
						</div>
					) : (
						<>
							<h3>New</h3>
							{/* Render 5 empty stars */}
							{/* {[...Array(5)].map((_, index) => (
                                <FaRegStar key={index} />
                            ))} */}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default MainReview;
