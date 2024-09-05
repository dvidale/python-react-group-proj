import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, reviewSummary } from '../../redux/reviews';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import RecentReview from './RecentReview';
import './reviews.css';

const MainReview = ({ id }) => {
	const dispatch = useDispatch();
	const ratingSummary = useSelector((state) => state.reviewsList.reviewSummary);
	// const id = useSelector((state) => state.restaurants.selectedRestaurant.id);

	// const topTwoRecords = mostRecentReviews.slice(0,2)
	useEffect(() => {
		if (id) {
			dispatch(reviewSummary(id));
			dispatch(fetchReviews(id));
		}
	}, [dispatch, id, ratingSummary.total_reviews]);
	// Function to round the rating to the nearest 0.5 for rendering stars
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
		<>
			<div className='restaurant-page-header-review'>
				<div className='main-review-structure'>
					{hasReviews ? (
						<div className='header-review-structure'>
							<div className='header-review-review-info-container'>
								<h2 className='res-header-title'>Reviews</h2>
							<div className='header-stars'>
								<h3 className='res-header-title'>
									{ratingSummary.average_rating.toFixed(1) > 0.0
										? ratingSummary.average_rating.toFixed(1)
										: 'New'}
								</h3>
								<div>
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
							<p className='res-header-count'>
								{ratingSummary.total_reviews}{' '}
								{ratingSummary.total_reviews > 1 ? 'Reviews' : 'Review'}
							</p>
							</div>
							<div className='recent-reviews-container'>
								<RecentReview id={id} />
							</div>
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
