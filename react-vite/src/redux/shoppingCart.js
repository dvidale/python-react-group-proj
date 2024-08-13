// *ACTION TYPES
const GET_CART_ITEMS = 'shoppingCart/GET_CART_ITEMS';
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';

// *ACTION CREATORS
export const getCartItems = (cartItems) => ({
	type: GET_CART_ITEMS,
	payload: cartItems,
});

export const removeCartItem = (cartItemId) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: cartItemId,
	};
};

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
		default:
			return state;
	}
};

export default shoppingCartReducer;
