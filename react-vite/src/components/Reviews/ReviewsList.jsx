import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews';
// import { thunkLogin } from '../../redux/session';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton'
import DeleteReview from './DeleteReview';
import CreateReview from './CreateReview';
import UpdateReview from './UpdateReview';


const ReviewsList = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const reviewList = useSelector((state) => state.reviewsList.reviewsListArr)
    const sessionUser = useSelector((state) => state.session.user);


    useEffect(() => {
        dispatch(fetchReviews(id))
    }, [dispatch, id]);

    return (
        <div>
            <h2>Rating and Reviews</h2>
            <div>
                {reviewList.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((review) => (
                    <div key={review.id}>
                        <p>{review.user_first_name} {review.user_last_name}</p>
                        <p>{review.created_at}</p>
                        <p>{review.rating}</p>
                        <p>{review.comments}</p>
                        {sessionUser?.id === review.user_id && (
                            <>
                                <OpenModalButton
                                    id='delete-button'
                                    buttonText="Delete"
                                    modalComponent={<DeleteReview reviewId={review.id} />}
                                />
                                <OpenModalButton
                                    id='create-button'
                                    buttonText="Create"
                                    modalComponent={<CreateReview restaurantId={id} />}
                                />
                                <OpenModalButton
                                    id='update-button'
                                    buttonText="Edit"
                                    modalComponent={<UpdateReview reviewId={review.id} />}
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsList
