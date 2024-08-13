// *ACTION TYPES
const GET_CART_ITEMS = 'shoppingCart/GET_CART_ITEMS';
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';
const ADD_CART_ITEM = 'cart/ADD_CART_ITEM';

// *ACTION CREATORS
export const getCartItems = (cartItems) => ({
	type: GET_CART_ITEMS,
	payload: cartItems,
});

export const removeCartItem = (cartItemId) => ({
	type: REMOVE_CART_ITEM,
	payload: cartItemId,
});

export const addCartItem = (cartItem) => ({
	type: ADD_CART_ITEM,
	payload: cartItem,
});

// *THUNKS
// ?-------------------------GET ALL CART ITEMS
export const fetchCartItems = () => async (dispatch) => {
	const response = await fetch('/api/shopping-cart/current');
	if (response.ok) {
		const data = await response.json();
		dispatch(getCartItems(data));
	}
};

// ?-------------------------REMOVE A CART ITEM
export const fetchRemoveCartItem = (cartItemId) => async (dispatch) => {
	const response = await fetch(
		`/api/shopping-cart/current/${cartItemId}/remove`,
		{
			method: 'DELETE',
		}
	);

	if (response.ok) {
		dispatch(removeCartItem(cartItemId));
	}
};

// ?--------------------------ADD A CART ITEM
export const fetchAddCartItem = (menuItemId) => async (dispatch, getState) => {
	const state = getState();
	const existingItem = state.shoppingCart.items.find(
		(item) => item.menu_item_id === menuItemId
	);

	if (existingItem) {
		const response = await fetch(
			`/api/shopping-cart/current/${existingItem.id}/update`,
			{
				method: 'POST',
			}
		);
		if (response.ok) {
			const updatedItem = await response.json();
			dispatch(addCartItem(updatedItem));
		}
	} else {
		// Add a new item to the cart
		const response = await fetch(`/api/shopping-cart/current/new`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ menu_item_id: menuItemId }),
		});
		if (response.ok) {
			const newItem = await response.json();
			dispatch(addCartItem(newItem));
		}
	}
};

// !---------------------------------REDUCER
const initialState = { items: [] };

const shoppingCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CART_ITEMS:
			return { ...state, items: action.payload };
		case REMOVE_CART_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		case ADD_CART_ITEM: {
			const existingItem = state.items.find(
				(item) => item.menu_item_id === action.payload.menu_item_id
			);
			if (existingItem) {
				return {
					...state,
					items: state.items.map((item) =>
						item.menu_item_id === action.payload.menu_item_id
							? { ...item, item_quantity: action.payload.item_quantity } // Update the quantity with the server response
							: item
					),
				};
			} else {
				return {
					...state,
					items: [...state.items, action.payload],
				};
			}
		}
		default:
			return state;
	}
};

export default shoppingCartReducer;
