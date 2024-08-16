const GET_ALL_REVIEWS = 'reviewsList/GET_ALL_REVIEWS';
const GET_REVIEW_SUMMARY = 'reviewsList/GET_REVIEW_SUMMARY'
const CREATE_REVIEW = 'reviewsList/CREATE_REVIEW';
const DELETE_REVIEW = 'reviewsList/DELETE_REVIEW';
const EDIT_REVIEW = 'reviewsList/EDIT_REVIEW';
const SINGLE_REVIEW = 'reviewsList/SINGLE_REVIEW';

//-------------------- ACTIONS --------------------//

export const getAllReviews = (data) => {
	return {
		type: GET_ALL_REVIEWS,
		payload: data,
	};
};

export const singleReview = (data) => {
	return {
		type: SINGLE_REVIEW,
		payload: data,
	};
};

export const setReviewSummary = (data) => {
    return {
        type: GET_REVIEW_SUMMARY,
        payload: data
    }
}

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

//GET ALL REVIEWS FOR SPECIFIC RESTAURANT
export const fetchReviews = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/reviews`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getAllReviews(data));
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

// GET REVIEW SUMMARY: TOTAL REVIEWS AND AVERAGE RATING
export const reviewSummary = (restaurantId) => async (dispatch) => {
    const response = await fetch(`/api/restaurants/${restaurantId}/totalreviews`)

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
		console.log('>>>>>>>>>>>>>>>>>>>>>> data from FLASK route', data);
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
		dispatch(deleteReview(reviewId)); // dispatch the reviewId directly
	}
};

//-------------------- REDUCER --------------------//

const initialState = {
	reviewsListArr: [],
	singleReview: {},
    reviewSummary: {},
	createReview: {},
	editReview: {},
};

const reviewsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_REVIEWS:
			return { ...state, reviewsListArr: action.payload };
		case SINGLE_REVIEW:
			return { ...state, singleReview: action.payload };
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
		case DELETE_REVIEW:
			return {
				...state,
				reviewsListArr: state.reviewsListArr.filter(
					(review) => review.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default reviewsListReducer;
