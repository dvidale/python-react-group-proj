// *ACTION TYPES
const GET_CART_ITEMS = 'shoppingCart/GET_CART_ITEMS';
const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';
const ADD_CART_ITEM = 'cart/ADD_CART_ITEM';
const CLEAR_CART_ITEMS = 'cart/CLEAR_CART_ITEMS';
const RESET_CART = 'cart/RESET_CART';
const SUBTRACT_CART_ITEM = 'cart/SUBTRACT_CART_ITEM';

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

export const subtractCartItem = (cartItemId) => ({
	type: SUBTRACT_CART_ITEM,
	payload: cartItemId,
});

export const clearCartItems = () => ({
	type: CLEAR_CART_ITEMS,
});

export const resetCartItems = () => ({
	type: RESET_CART,
});

// !---------------------------------REDUCER

function setCookie(name, value, days = 2) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = `expires=${date.toUTCString()}`;
	document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(nameEQ) === 0)
			return decodeURIComponent(c.substring(nameEQ.length, c.length));
	}
	return null;
}

const initialState = {
	items: JSON.parse(getCookie('DashDineCart') || '[]'),
};

const shoppingCartReducer = (state = initialState, action) => {
	let newState;

	switch (action.type) {
		case GET_CART_ITEMS:
			newState = { ...state, items: action.payload };
			break;

		case REMOVE_CART_ITEM:
			newState = {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
			break;

		case ADD_CART_ITEM:
			{
				if (!action.payload || !action.payload.id) {
					return state;
				}

				const existingItem = state.items.find(
					(item) => item.menu_item_id === action.payload.id
				);

				if (existingItem) {
					newState = {
						...state,
						items: state.items.map((item) =>
							item.menu_item_id === action.payload.id
								? { ...item, item_quantity: item.item_quantity + 1 }
								: item
						),
					};
				} else {
					newState = {
						...state,
						items: [
							...state.items,
							{
								...action.payload,
								item_quantity: 1,
								menu_item_id: action.payload.id,
							},
						],
					};
				}
			}
			break;
		case SUBTRACT_CART_ITEM:
			{
				const existingItem = state.items.find(
					(item) => item.menu_item_id === action.payload
				);

				if (existingItem && existingItem.item_quantity > 1) {
					newState = {
						...state,
						items: state.items.map((item) =>
							item.menu_item_id === action.payload
								? { ...item, item_quantity: item.item_quantity - 1 }
								: item
						),
					};
				} else {
					newState = {
						...state,
						items: state.items.filter(
							(item) => item.menu_item_id !== action.payload
						),
					};
				}
			}
			break;
		case CLEAR_CART_ITEMS:
			newState = { ...state, items: [] };
			break;

		case RESET_CART:
			newState = { ...state, items: [] };
			break;

		default:
			return state;
	}

	setCookie('DashDineCart', JSON.stringify(newState.items));

	return newState;
};

export default shoppingCartReducer;
