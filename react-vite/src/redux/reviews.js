const GET_ALL_REVIEWS = 'reviewsList/GET_ALL_REVIEWS';
const CREATE_REVIEW = 'reviewsList/CREATE_REVIEW';
const DELETE_REVIEW = 'reviewsList/DELETE_REVIEW';

//-------------------- ACTIONS --------------------//

export const getAllReviews = (data) => {
	return {
		type: GET_ALL_REVIEWS,
		payload: data,
	};
};

export const createReview = (data) => {
	return {
		type: CREATE_REVIEW,
		payload: data,
	};
};

export const deleteReview = (data) => {
	return {
		type: DELETE_REVIEW,
		payload: data,
	};
};

//-------------------- THUNKS --------------------//

//GET REVIEW THUNK
export const fetchReviews = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/reviews`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getAllReviews(data));
	}
};

//CREATE REVIEW THUNK
export const postReview = (newReview, restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newReview),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createReview(data));
	}
};

//DELETE REVIEW THUNK
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
	reviewsListArr: [],
	createReview: [],
	deleteReview: {},
};

const reviewsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_REVIEWS:
			return { ...state, reviewsListArr: action.payload };
		case CREATE_REVIEW:
			return { ...state, createReviews: action.payload };
		case DELETE_REVIEW: {
			return {
				...state,
				reviewsListArr: state.reviewsListArr.filter(
					(review) => review.id !== action.payload
				),
			};
		}
		default:
			return state;
	}
};

export default reviewsListReducer;
