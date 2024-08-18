import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDBReviews } from '../../redux/reviews';
// import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteReview from './DeleteReview';
import UpdateReview from './UpdateReview';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import CreateReview from './CreateReview';

const ReviewsList = ({restaurant}) => {
	const dispatch = useDispatch();
	// const { id } = useParams();
	const reviewList = useSelector((state) => state.reviewsList.allReviews);
	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(fetchAllDBReviews());
	}, [dispatch]);

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

	const reviewsByRestaurantId = reviewList.filter((review)=> review.restaurant_id === restaurant.id )

	return (

		<>
			<h2>Rating and Reviews</h2>
			{sessionUser && sessionUser.id !== restaurant.owner_id &&
			<OpenModalButton id='create-review-button' 
			buttonText='Leave a review'
			modalComponent={<CreateReview id={restaurant.id}/>} />
			}
			
		{reviewsByRestaurantId.length > 0 ? ( <>
		<div>
		
			<div>
				{reviewsByRestaurantId
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
		<p> Be the first to leave a review!</p> }
		</>) }
		</>
	);
};

export default ReviewsList;
