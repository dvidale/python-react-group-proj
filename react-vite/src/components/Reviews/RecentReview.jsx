import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecentReviews } from '../../redux/reviews';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './reviews.css'

const RecentReview = ({id}) => {
    const dispatch = useDispatch();
    const recentReviews = useSelector((state) => state.reviewsList.recentReviews)


    useEffect(() => {
        dispatch(fetchRecentReviews(id))
    },[dispatch, id])


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
            {recentReviews.length > 0 && (
                <div className='recent-review-grid'>
                    {recentReviews.map((review) => (
                        <div key={review.id} className='recent-review-structure'>
                            <h3 className='recent-review-text'>
                                {review.user_first_name} {review.user_last_name}
                            </h3>
                            <p className='recent-review-info-text'>{review.created_at}</p>
                            <div className='recent-review-stars'>{renderStars(review.rating)}</div>
                            <p className='recent-review-info-text'>{review.comments}</p>
                        </div>
                    ))}
                </div>
            )}
        </>

    )

}


export default RecentReview;
