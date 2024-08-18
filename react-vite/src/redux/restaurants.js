//*------------------------------------ACTION TYPES

const GET_ALL_CATEGORIES = '/restaurants/categories/GET_ALL_CATEGORIES';

const GET_RESTAURANTS = '/restaurants/GET_RESTAURANTS';

const GET_A_RESTAURANT = 'restaurants/GET_A_RESTAURANT';

const ADD_UPDATE_RESTAURANT = '/restaurants/ADD_OR_UPDATE_RESTAURANT';

const DELETE_RESTAURANT = '/restaurants/DELETE_RESTAURANT';

const SET_SELECTED_CATEGORY = 'restaurants/SET_SELECTED_CATEGORY';
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

export function getARestaurant(data) {
	return {
		type: GET_A_RESTAURANT,
		payload: data,
	};
}

export function add_Or_Update_Restaurant(data) {
	return {
		type: ADD_UPDATE_RESTAURANT,
		payload: data,
	};
}

export function deleteARestaurant(id) {
	return {
		type: DELETE_RESTAURANT,
		payload: id,
	};
}

export const setSelectedCategory = (category) => ({
	type: SET_SELECTED_CATEGORY,
	payload: category,
});

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

export const fetchARestaurant = (id) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${id}`);

	if (response.ok) {
		const data = await response.json();
		dispatch(getARestaurant(data));

		return data;
	} else {
		return 'Error: No Restaurants';
	}
};

export const newRestaurant = (method, formData) => async (dispatch) => {
	const url = '/api/restaurants/new';
	const headers = { 'Content-Type': 'application/json' };
	const body = formData;

	const options = { method, headers, body };

	const response = await fetch(url, options);

	const data = await response.json();

	dispatch(add_Or_Update_Restaurant(data));

	return data;
};

export const updateRestaurant = (id, method, formData) => async (dispatch) => {
	const url = `/api/restaurants/current/${id}`;
	const headers = { 'Content-Type': 'application/json' };
	const body = formData;
	const options = { method, headers, body };

	const response = await fetch(url, options);

	const data = await response.json();

	console.log('>>> data from flask UPDATE route:', data);
	dispatch(add_Or_Update_Restaurant(data));
	return data;
};

// !untested before merge
export const deleteRestaurant = (id) => async (dispatch) => {
	const url = `/api/restaurants/${id}`;
	const method = 'DELETE';
	const options = { method};

	const response = await fetch(url, options);

	if(response.ok){
		dispatch(deleteARestaurant(id));
	}else{
		const error = {"message" : "Error deleting restaurant" }
		return error
	}
	
	
	const data = await response.json();
	return data;
	

	
};

//* -------------------------------------REDUCERS

const initialState = {
	allCategories: [],
	AllRestaurants: {},
	selectedRestaurant: {},
	selectedCategory: null,
};

const restaurantsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORIES:
			return {
				...state,
				allCategories: action.payload,
			};
		case GET_RESTAURANTS: {
			const newState = { AllRestaurants: {} };

			action.payload.forEach((restaurant) => {
				newState.AllRestaurants[restaurant.id] = restaurant;
			});

			return { ...state, ...newState };
		}
		case GET_A_RESTAURANT:
			return { ...state, selectedRestaurant: action.payload };

		case ADD_UPDATE_RESTAURANT: {
			const newState = { ...state };

			const restaurant = action.payload;

			newState.AllRestaurants[restaurant.id] = restaurant;

			return newState;
		}
		case DELETE_RESTAURANT: {
			const newState = { ...state };
			const id = action.payload;
			delete newState.AllRestaurants[id];
			return newState;
		}
		case SET_SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: action.payload,
			};
		default:
			return state;
	}
};
export default restaurantsReducer;
