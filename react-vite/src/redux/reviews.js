const GET_ALL_REVIEWS = 'reviewsList/GET_ALL_REVIEWS';
const CREATE_REVIEW = 'reviewsList/CREATE_REVIEW';
const DELETE_REVIEW = 'reviewsList/DELETE_REVIEW'

export const getAllReviews = (data) => {
    return {
        type: GET_ALL_REVIEWS,
        payload: data
    };
};

export const createReview = (data) => {
    return {
        type: CREATE_REVIEW,
        payload: data
    };
};

export const deleteReview = (data) => {
    return {
        type: DELETE_REVIEW,
        payload: data
    };
};


export const fetchReviews = (restaurantId) => async (dispatch) => {
    const response = await fetch(`/api/restaurants/${restaurantId}/reviews`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllReviews(data))
    }
};

export const postReview = (newReview) => async (dispatch) => {
    const response = await fetch(`/api/restaurants/${restaurantId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createReview(data))
    }
}


const initialState = {
    reviewsListArr: [],
    createReview: []
};

const reviewsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {...state, reviewsListArr: action.payload}
        case CREATE_REVIEW:
            return {...state, createReviews: action.payload}
        default:
            return state;
    }
}

export default reviewsListReducer
