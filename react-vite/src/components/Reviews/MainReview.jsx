import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewSummary } from "../../redux/reviews";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const MainReview = ({ restaurantId }) => {
    const dispatch = useDispatch();
    const ratingSummary = useSelector((state) => state.reviewsList.reviewSummary);
    // const mostRecentReviews = useSelector((state) => state.reviewsList.reviewsListArr)

    // const topTwoRecords = mostRecentReviews.slice(0,2)
    useEffect(() => {
        dispatch(reviewSummary(restaurantId));
        dispatch(fetchReviews(restaurantId))
    }, [dispatch, restaurantId]);

    // Function to round the rating to the nearest 0.5 for rendering stars
    const roundToHalf = (rating) => {
        return Math.round(rating * 2) / 2;
    };

    // Check if there are reviews
    const hasReviews = ratingSummary.total_reviews > 0;

    let roundedRating = 0;
    let fullStars = 0;
    let halfStar = false;
    let emptyStars = 0;

    if (hasReviews) {
        // Get the rounded rating for stars
        const averageRating = Number(ratingSummary.average_rating) || 0;
        roundedRating = roundToHalf(averageRating);

        // Calculate the number of full stars, half stars, and empty stars
        fullStars = Math.min(5, Math.floor(roundedRating));
        halfStar = roundedRating % 1 !== 0;
        emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));
    } else {
        // No reviews yet
        emptyStars = 5;
    }

    return (
        <>
            <div>
                <h2>Ratings and Reviews</h2>
                <div>
                    {hasReviews ? (
                        <>
                            <h3>{ratingSummary.average_rating}</h3>
                            {/* Render full stars */}
                            {[...Array(fullStars)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                            {/* Render a half star if needed */}
                            {halfStar && <FaStarHalf />}

                            {/* Render empty stars */}
                            {[...Array(emptyStars)].map((_, index) => (
                                <FaRegStar key={index} />
                            ))}

                            {/* <div>
                                {topTwoRecords.map((review => (
                                <p>{review.rating}</p>
                                <p>{review.comments}</p>
                            </div>)} */}
                        </>
                    ) : (
                        <>
                            <h3>No reviews yet</h3>
                            {/* Render 5 empty stars */}
                            {[...Array(5)].map((_, index) => (
                                <FaRegStar key={index} />
                            ))}
                        </>
                    )}
                    <p>{ratingSummary.total_reviews} Ratings</p>
                </div>
            </div>
        </>
    );
};

export default MainReview;
