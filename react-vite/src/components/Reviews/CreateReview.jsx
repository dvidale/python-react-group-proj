import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { fetchAllDBReviews, postReview, reviewSummary } from '../../redux/reviews';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './CreateReview.css';

const CreateReview = ({ id }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [rating, setRating] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const [comments, setComments] = useState("");
    const [validations, setValidations] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        let validationsObj = {};

        if (comments.length < 20) validationsObj.comments = "Comments should be at least 20 characters."
        if (comments.length > 1000) validationsObj.comments = "Comments should not exceed 1,000 characters.";
        if (rating.length < 1) validationsObj.rating = "Rating must be at least 1 star.";

        setValidations(validationsObj);
    }, [rating, comments]);


    const handleMouseEnter = (stars) => {
        setHoveredStars(stars);
    };

    const handleMouseLeave = () => {
        setHoveredStars(0);
    };

    const handleClick = (stars) => {
        setRating(stars);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (Object.keys(validations).length === 0) {
            const restaurantId = parseInt(id);
            const newReview = { rating, comments };

            try {
                dispatch(postReview(newReview, restaurantId))
                .then(() => closeModal())
                .then(() => dispatch(fetchAllDBReviews()))
                .then(() => dispatch(reviewSummary(restaurantId)));
                setRating(0);
                setComments("");
                setValidations({});
            } catch (err) {
                console.error('Error submitting review:', err);
                // Optionally handle errors here
            } finally {
                setFormSubmitted(false);
            }
        }
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h2 className="review-title">How was your meal?</h2>
            <label className="review-label">
                {/* Review: */}
                <textarea
                    placeholder="Leave your review here..."
                    className="review-input long-text"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </label>
            {formSubmitted && validations.comments && <p className="error-message">{validations.comments}</p>}
            <label className="review-label">
                {/* Stars: */}
                <div className="rating-input">
                    <div className="star-ratings-container">{renderStars()}</div>
                </div>
            </label>
            <button id='submit-button' type="submit">
                Submit Your Review
            </button>
        </form>
    );
};

export default CreateReview;
