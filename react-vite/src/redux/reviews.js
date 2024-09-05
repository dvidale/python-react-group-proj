const GET_ALL_DB_REVIEWS = '/reviews/GET_ALL_DB_REVIEWS';
const GET_ALL_REVIEWS = 'reviewsList/GET_ALL_REVIEWS';
const GET_SPECIFIC_REVIEWS = 'reviewsList/GET_SPECIFIC_REVIEWS'
const GET_RECENT_REVIEWS = 'reviewsList/GET_RECENT_REVIEWS'
const GET_REVIEW_SUMMARY = 'reviewsList/GET_REVIEW_SUMMARY'
const CREATE_REVIEW = 'reviewsList/CREATE_REVIEW';
const DELETE_REVIEW = 'reviewsList/DELETE_REVIEW';
const EDIT_REVIEW = 'reviewsList/EDIT_REVIEW';
const SINGLE_REVIEW = 'reviewsList/SINGLE_REVIEW';

//-------------------- ACTIONS --------------------//

export const getAllDBReviews = (data) => {
	return {
		type: GET_ALL_DB_REVIEWS,
		payload: data,
	};
};

export const getAllReviews = (data) => {
	return {
		type: GET_ALL_REVIEWS,
		payload: data,
	};
};

export const getSpecificReviews = (data) => {
	return {
		type: GET_SPECIFIC_REVIEWS,
		payload: data
	}
}

export const singleReview = (data) => {
	return {
		type: SINGLE_REVIEW,
		payload: data,
	};
};

export const getTwoRecentReviews = (data) => {
	return {
		type: GET_RECENT_REVIEWS,
		payload: data
	}
}

export const setReviewSummary = (data) => {
	return {
		type: GET_REVIEW_SUMMARY,
		payload: data,
	};
};

export const createReview = (data) => {
	return {
		type: CREATE_REVIEW,
		payload: data,
	};
};

export const editReview = (data) => {
	return {
		type: EDIT_REVIEW,
		payload: data,
	};
};

export const deleteReview = (reviewId) => {
	return {
		type: DELETE_REVIEW,
		payload: reviewId,
	};
};

//-------------------- THUNKS --------------------//

// LOAD ALL DB REVIEWS

export const fetchAllDBReviews = () => async (dispatch) => {
	const response = await fetch('/api/reviews');

	if (response.ok) {
		const data = await response.json();
		dispatch(getAllDBReviews(data));
	}
}

//GET ALL REVIEWS FOR SPECIFIC RESTAURANT
export const fetchReviews = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/reviews`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getSpecificReviews(data));
	}
};

//GET SINGLE REVIEW
export const getSingleReview = (review_id) => async (dispatch) => {
	const response = await fetch(`/api/reviews/${review_id}`);

	if (response.ok) {
		const data = await response.json();
		dispatch(singleReview(data));
		return data;
	} else {
		console.error('Failed to fetch single review');
		throw new Error('Failed to fetch review data');
	}
};

//GET RECENT REVIEWS (2 MOST RECENT):
export const fetchRecentReviews = (review_id) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${review_id}/recent`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getTwoRecentReviews(data));
		return data;
	}

}

// GET REVIEW SUMMARY: TOTAL REVIEWS AND AVERAGE RATING
export const reviewSummary = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/totalreviews`);

    if (response.ok) {
        const data = await response.json();
        dispatch(setReviewSummary(data))
        return data;
    }
};

//CREATE REVIEW
export const postReview = (newReview, restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newReview),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createReview(data));
		return data;
	}
};

//EDIT REVIEW
export const updateReview = (newReview, review_id) => async (dispatch) => {
	const response = await fetch(`/api/reviews/${review_id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newReview),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(editReview(data));
		return data;
	}
};

//DELETE REVIEW
export const delReview = (reviewId) => async (dispatch) => {
	const response = await fetch(`/api/reviews/${reviewId}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		dispatch(deleteReview(reviewId));
	}
};

//-------------------- REDUCER --------------------//

const initialState = {
	allReviews: [],
	reviewsListArr: [],
	recentReviews: [],
	specificReviews: [],
	singleReview: {},
	reviewSummary: {},
	createReview: {},
	editReview: {},
};

const reviewsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DB_REVIEWS:
			return { ...state, allReviews: action.payload };
		case GET_ALL_REVIEWS:
			return { ...state, reviewsListArr: action.payload };
		case GET_SPECIFIC_REVIEWS:
			return { ...state, specificReviews: action.payload};
		case SINGLE_REVIEW:
			return { ...state, singleReview: action.payload };
		case GET_RECENT_REVIEWS:
			return {... state, recentReviews: action.payload }
        case GET_REVIEW_SUMMARY:
            return {...state, reviewSummary: action.payload };
		case CREATE_REVIEW:
			return {
				...state,
				reviewsListArr: [...state.reviewsListArr, action.payload],
			};
		case EDIT_REVIEW:
			return {
				...state,
				reviewsListArr: state.reviewsListArr.map((review) =>
					review.id === action.payload.id ? action.payload : review
				),
			};
		case DELETE_REVIEW: {
			const newState = { ...state };
			// target the review to be deleted
			delete state.allReviews.find((review) => review.id === action.payload);
			return newState;
		}
		default:
			return state;
	}
};

export default reviewsListReducer;
