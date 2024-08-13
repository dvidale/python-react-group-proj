//*------------------------------------ACTION TYPES

const GET_ALL_CATEGORIES = '/restaurants/categories/GET_ALL_CATEGORIES';

const GET_RESTAURANTS = '/restaurants/GET_RESTAURANTS';

//*-----------------------------------ACTION CREATORS

export function getAllCategories(data) {
	return {
		type: GET_ALL_CATEGORIES,
		payload: data,
	};
}

export function getAllRestaurants(data) {
	return {
		type: GET_RESTAURANTS,
		payload: data,
	};
}

//* -------------------------------------THUNKS

export const getCategories = () => async (dispatch) => {
	const response = await fetch('/api/restaurants/categories');
	if (response.ok) {
		const data = await response.json();
		dispatch(getAllCategories(data));

		return data;
	} else {
		return 'Error';
	}
};

export const getRestaurants = () => async (dispatch) => {
	const response = await fetch('/api/restaurants');

	if (response.ok) {
		const data = await response.json();
		dispatch(getAllRestaurants(data));

		return data;
	} else {
		return 'Error: No Restaurants';
	}
};

//* -------------------------------------REDUCERS

const initialState = {
	allCategories: [],
	AllRestaurants: [],
};

const restaurantsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORIES:
			return {
				...state,
				allCategories: action.payload,
			};
		case GET_RESTAURANTS: {
			return { ...state, AllRestaurants: action.payload };
		}
		default:
			return state;
	}
};
export default restaurantsReducer;
