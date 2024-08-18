import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { fetchAllDBReviews, postReview, reviewSummary } from '../../redux/reviews';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const CreateReview = ({id}) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [rating, setRating] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const [comments, setComments] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        let errors = {};
        if (rating < 1) errors.rating = "Stars can't be empty";
        // if (comments.length < 20) errors.comments = "Review must be at least 20 characters long";
        setErrors(errors);
    }, [rating]);

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

        if (Object.values(errors).length > 0) {
            alert("Please fix the errors you have");
        } else {
            let restaurantId = parseInt(id);
            let newReview = {
                rating,
                comments,
            };

            dispatch(postReview(newReview, restaurantId))
                .then(closeModal)
                .then(() => dispatch(fetchAllDBReviews()))
                .then(()=> dispatch(reviewSummary(restaurantId)));

            setRating(0);
            setComments("");
            setErrors({});
        }
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h2 className="review-title">How was your meal?</h2>
            <label className="review-label">
                Review:
                <textarea
                    placeholder="Leave your review here..."
                    className="review-input long-text"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </label>
            <label className="review-label">
                Stars:
                <div className="rating-input">
                    <div className="star-ratings-container">{renderStars()}</div>
                </div>
            </label>
            <button id='submit-button' disabled={Object.values(errors).length > 0} type="submit">
                Submit Your Review
            </button>
        </form>
    );
};

export default CreateReview;
