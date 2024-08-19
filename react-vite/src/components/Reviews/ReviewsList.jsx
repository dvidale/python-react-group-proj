import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDBReviews } from '../../redux/reviews';
// import { useParams } from 'react-router-dom';]
import DeleteReview from './DeleteReview';
import UpdateReview from './UpdateReview';
import { useModal } from '../../context/Modal';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import CreateReview from './CreateReview';
import './ReviewList.css';

const ReviewsList = ({ restaurant }) => {
	const dispatch = useDispatch();
	// const { id } = useParams();
	const reviewList = useSelector((state) => state.reviewsList.allReviews);
	const sessionUser = useSelector((state) => state.session.user);
	const { setModalContent } = useModal();

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

	const reviewsByRestaurantId = reviewList.filter(
		(review) => review.restaurant_id === restaurant.id
	);

	// Check if current user left a review for this restaurant already

	// let leftAReview;

	// if (sessionUser)
	// 	leftAReview = reviewsByRestaurantId.find(
	// 		(review) => review.user_id === sessionUser.id
	// 	);

	return (
		<div className='review-list-wrapper'>
      <h2 className='review-list-header'>Rating and Reviews</h2>

      {reviewsByRestaurantId.length === 0 && (
        <>
          <p>No reviews yet!</p>
          {sessionUser && restaurant.owner_id !== sessionUser.id && (
            <>
              <p>Be the first to leave a review!</p>
            </>
          )}
        </>
      )}

      {sessionUser && sessionUser.id !== restaurant.owner_id && (
        <button
          className='create-review-button'
          onClick={() => setModalContent(<CreateReview id={restaurant.id} />)}
        >
          Leave a Review
        </button>
      )}

      {reviewsByRestaurantId.length > 0 && (
        <div className='review-list-grid'>
          {reviewsByRestaurantId
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((review) => (
              <div
                key={review.id}
                className='review-structure'
              >
                <h3 className='review-info-text'>
                  {review.user_first_name} {review.user_last_name}
                </h3>
                <p className='review-info-text'>{review.created_at}</p>
                <div className='review-stars'>{renderStars(review.rating)}</div>
                <p className='review-info-text'>{review.comments}</p>
                {sessionUser?.id === review.user_id && (
                  <>
                    <button
                      className='delete-button'
                      onClick={() => setModalContent(<DeleteReview reviewId={review.id} restaurantId={restaurant.id} />)}
                    >
                      Delete
                    </button>
                    <button
                      className='update-button'
                      onClick={() => setModalContent(<UpdateReview reviewId={review.id} />)}
                    > Edit
                    </button>
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsList;
