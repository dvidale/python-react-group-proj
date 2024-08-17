import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteReview from './DeleteReview';
import UpdateReview from './UpdateReview';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const ReviewsList = ({restaurant}) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const reviewList = useSelector((state) => state.reviewsList.reviewsListArr);
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(fetchReviews(id));
	}, [dispatch, id]);

	// Function to render stars based on rating
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<FaStar key={i} />);
			} else {
				stars.push(<FaRegStar key={i} />);
			}
		}
		return stars;
	};

	return (

		<>
			<h2>Rating and Reviews</h2>
		{reviewList.length > 0 ? ( <>
		<div>
		
			<div>
				{reviewList
					.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
					.map((review) => (
						<div key={review.id}>
							<p>
								{review.user_first_name} {review.user_last_name}
							</p>
							<p>{review.created_at}</p>
							<div>{renderStars(review.rating)}</div>
							<p>{review.comments}</p>
							{sessionUser?.id === review.user_id && (
								<>
									<OpenModalButton
										id='delete-button'
										buttonText='Delete'
										modalComponent={<DeleteReview reviewId={review.id} />}
									/>
									<OpenModalButton
										id='update-button'
										buttonText='Edit'
										modalComponent={<UpdateReview reviewId={review.id} />}
									/>
								</>
							)}
						</div>
					))}
			</div>
		</div>
		
		
		</>) :(<>
		<p>No reviews yet!</p>
		{/* If the user is logged in and not the owner, call to action to place an order to leave a review */}
		{sessionUser && restaurant.owner_id !== sessionUser.id &&
		<p> Be the first to place an order and you can leave a review!</p> }
		</>) }
		</>
	);
};

export default ReviewsList;
