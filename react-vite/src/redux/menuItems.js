//*------------------------------------ACTION TYPES

const GET_MENU_ITEMS = 'menuItems/GET_MENU_ITEMS';
const ADD_MENU_ITEM = 'menuItems/ADD_MENU_ITEMS';
const DELETE_MENU_ITEM = 'menuItems/DELETE_MENU_ITEM';

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

export const deleteMenuItem = (id) => {
	return {
		type: DELETE_MENU_ITEM,
		payload: id,
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
		try {
			const response = await fetch(
				`/api/restaurants/${restaurantId}/menu-items/new`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json', // Add Content-Type header
					},
					body: JSON.stringify(menuItemData),
				}
			);

			if (response.ok) {
				const data = await response.json();
				dispatch(addMenuItem(data));
			} else {
				const errorData = await response.json();
				console.error('Error adding menu item:', errorData);
			}
		} catch (error) {
			console.error('Failed to add menu item:', error);
		}
	};

// ?-----------------------------DELETE MENU ITEM
export const fetchDeleteMenuItem = (id) => async (dispatch) => {
	try {
		const response = await fetch(`/api/menu-items/${id}`, {
			method: 'DELETE', // Use DELETE method
		});

		if (response.ok) {
			dispatch(deleteMenuItem(id)); // Dispatch the id directly
		} else {
			const errorData = await response.json();
			console.error('Error deleting menu item:', errorData);
		}
	} catch (error) {
		console.error('Failed to delete menu item:', error);
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
		case DELETE_MENU_ITEM:
			return {
				...state,
				itemArr: state.itemArr.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};

export default menuItemsReducer;
