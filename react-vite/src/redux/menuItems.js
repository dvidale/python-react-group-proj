//*------------------------------------ACTION TYPES

const GET_MENU_ITEMS = 'menuItems/GET_MENU_ITEMS';
const ADD_MENU_ITEM = 'menuItems/ADD_MENU_ITEMS';

//*-----------------------------------ACTION CREATORS

export const getMenuItems = (menuItems) => {
	return {
		type: GET_MENU_ITEMS,
		payload: menuItems,
	};
};

export const addMenuItem = (menuItem) => {
	return {
		type: ADD_MENU_ITEM,
		payload: menuItem,
	};
};

//* -------------------------------------THUNKS

//?---------------------------------GET ALL MENU ITEMS
export const fetchMenuItems = (restaurantId) => async (dispatch) => {
	const response = await fetch(`/api/restaurants/${restaurantId}/menu-items`);
	if (response.ok) {
		const data = await response.json();
		dispatch(getMenuItems(data));
	}
};

//?--------------------------------ADD MENU ITEM
export const fetchAddMenuItem =
	(restaurantId, menuItemData) => async (dispatch) => {
		const response = await fetch(
			`/api/restaurants/${restaurantId}/menu-items/new`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(menuItemData),
			}
		);
		console.log('THIS IS THE RES>BODY', response.body);
		if (response.ok) {
			const data = await response.json();
			dispatch(addMenuItem(data));
		}
	};

//!---------------------------------- INITIAL STATE
const initialState = {
	itemArr: [],
};

//!---------------------------------- REDUCER
const menuItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MENU_ITEMS:
			return { ...state, itemArr: action.payload };
		case ADD_MENU_ITEM:
			return { ...state, itemArr: [...state.itemArr, action.payload] };
		default:
			return state;
	}
};

export default menuItemsReducer;
