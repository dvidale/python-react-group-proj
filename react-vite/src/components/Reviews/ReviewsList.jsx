import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton'
import DeleteReview from './DeleteReview';


const ReviewsList = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const reviewList = useSelector((state) => state.reviewsList.reviewsListArr)

    useEffect(() => {
        dispatch(fetchReviews(id))
    }, [dispatch, id]);

    return (
        <div>
            <h2>Rating and Reviews</h2>
            <div>
                {reviewList.map((review) => (
                    <div key={review.id}>
                        <p>{review.user_first_name} {review.user_last_name}</p>
                        <p>{review.created_at}</p>
                        <p>{review.rating}</p>
                        <p>{review.comments}</p>
                        {/* {user && user.id === review.user_id && ( //USER NOT DEFINED***** */}
                            <OpenModalButton
                                id='delete-button'
                                buttonText="Delete"
                                modalComponent={<DeleteReview reviewId={review.id} />}
                            />
                        {/* )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsList
