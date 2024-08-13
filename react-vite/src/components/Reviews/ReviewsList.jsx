import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/reviews';
import { useParams } from 'react-router-dom';


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
                        <p>{review.created_at}</p>
                        <p>{review.rating}</p>
                        <p>{review.comments}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ReviewsList
