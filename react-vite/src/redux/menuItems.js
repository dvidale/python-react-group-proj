// *ACTION TYPES

const GET_MENU_ITEMS = 'menuItems/GET_MENU_ITEMS';

// *ACTION CREATORS

export const getMenuItems = (menuItems) => {
	return {
		type: GET_MENU_ITEMS,
		payload: menuItems,
	};
};

// *THUNKS

// ? GET ALL MENU ITEMS
export const fetchMenuItems = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/menu-items`);
	if (response.ok) {
		const data = await response.json();
		dispatch(getMenuItems(data));
	}
};

// ! INITIAL STATE
const initialState = {};

// ! REDUCER
const menuItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MENU_ITEMS:
			return { ...state, itemArr: [...action.payload] };
		default:
			return state;
	}
};

export default menuItemsReducer;
