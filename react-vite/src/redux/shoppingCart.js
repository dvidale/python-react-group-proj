// *ACTION TYPES
const GET_CART_ITEMS = 'shoppingCart/GET_CART_ITEMS';

// *ACTION CREATORS
export const getCartItems = (cartItems) => ({
	type: GET_CART_ITEMS,
	payload: cartItems,
});

// *THUNKS
export const fetchCartItems = () => async (dispatch) => {
	const response = await fetch('/api/shopping-cart/current');
	if (response.ok) {
		const data = await response.json();
		dispatch(getCartItems(data));
	}
};

// *REDUCER
const initialState = { items: [] };

const shoppingCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CART_ITEMS:
			return { ...state, items: action.payload };
		default:
			return state;
	}
};

export default shoppingCartReducer;
