import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview, fetchReviews, getSingleReview } from '../../redux/reviews';
import { useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';

const UpdateReview = ({ reviewId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const { restaurantId } = useParams();

    const [reviewDetails, setReviewDetails] = useState({ rating: 0, comments: "" });
    const [hoverRating, setHoverRating] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await dispatch(getSingleReview(reviewId));
                console.log('Review data:', data);
                setReviewDetails({ rating: data.rating, comments: data.comments });
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching review:', err);
                setError('Failed to load review data.');
                setIsLoading(false);
            }
        })();
    }, [dispatch, reviewId]);

    const handleInputChange = ({ target: { name, value } }) =>
        setReviewDetails(prev => ({ ...prev, [name]: value }));

    const handleStarClick = (rating) => {
        setReviewDetails(prev => ({ ...prev, rating }));
        setHoverRating(0); // Reset hover rating after clicking
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateReview(reviewDetails, reviewId));
            closeModal();
            dispatch(fetchReviews(restaurantId));
        } catch (err) {
            console.error('Error updating review:', err);
            setError('Failed to update review.');
        }
    };

    const renderStars = () =>
        Array.from({ length: 5 }, (_, i) => {
            const starValue = i + 1;
            return (
                <span
                    key={starValue}
                    className={`star ${starValue <= (hoverRating || reviewDetails.rating) ? 'filled' : ''}`}
                    onClick={() => handleStarClick(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{ cursor: 'pointer' }}
                >
                    &#9733;
                </span>
            );
        });

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <form className='edit-review-container' onSubmit={handleSubmit}>
                    <h2 className="edit-review-title">How was your meal?</h2>
                    {error && <p className="error-message">{error}</p>}
                    <label className="edit-review-label">
                        Comments:
                        <textarea
                            name="comments"
                            placeholder="Enter your comments"
                            className="review-input"
                            id='long-text-box'
                            value={reviewDetails.comments}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="edit-review-label">
                        Stars:
                        <div className="edit-rating-input">
                            <div className="edit-star-ratings-container">{renderStars()}</div>
                        </div>
                    </label>
                    <button
                        id='update-button'
                        type="submit"
                        disabled={!reviewDetails.comments || reviewDetails.rating < 1 || isLoading}
                    >
                        Update Your Review
                    </button>
                </form>
            )}
        </div>
    );
};

export default UpdateReview;
