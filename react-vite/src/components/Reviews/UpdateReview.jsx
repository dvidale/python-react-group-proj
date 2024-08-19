import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateReview, fetchAllDBReviews, getSingleReview } from '../../redux/reviews';
import { useParams } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import './UpdateReview.css'

const UpdateReview = ({ reviewId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const { restaurantId } = useParams();
    const [rating, setRating] = useState(0);
    const [reviewDetails, setReviewDetails] = useState({ rating: 0, comments: "" });
    const [hoveredStars, setHoveredStars] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await dispatch(getSingleReview(reviewId));
                setReviewDetails({ rating: data.rating, comments: data.comments });
                setRating(data.rating); // Set initial rating state
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateReview({ ...reviewDetails, rating }, reviewId));
            closeModal();
            dispatch(fetchAllDBReviews(restaurantId)); // Ensure updated review list
        } catch (err) {
            console.error('Error updating review:', err);
            setError('Failed to update review.');
        }
    };

    const handleMouseEnter = (stars) => {
        setHoveredStars(stars);
    };

    const handleMouseLeave = () => {
        setHoveredStars(0);
    };

    const handleClick = (stars) => {
        setRating(stars);
        setReviewDetails(prev => ({ ...prev, rating: stars }));
    };

    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((stars) => (
            <div
                key={stars}
                onMouseEnter={() => handleMouseEnter(stars)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(stars)}
                className="star"
                style={{ cursor: 'pointer', display: 'inline-block' }}
            >
                {stars <= (hoveredStars || rating) ? <FaStar /> : <FaRegStar />}
            </div>
        ));
    };

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <form className='edit-review-container' onSubmit={handleSubmit}>
                    <h2 className="edit-review-title">How was your meal?</h2>
                    {error && <p className="error-message">{error}</p>}
                    <label className="edit-review-label">
                        {/* Comments: */}
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
                        {/* Stars: */}
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
