const SAVE_LOCATION = 'location/SAVE_LOCATION';
const CLEAR_LOCATION = 'location/CLEAR_LOCATION';

export const saveLocation = (location) => {
	return {
		type: SAVE_LOCATION,
		location: location,
	};
};

export const clearLocation = (location) => {
	return {
		type: CLEAR_LOCATION,
		location: location,
	};
};

const initialState = {
	state: '',
	city: '',
};

const locationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_LOCATION:
			console.log('Reducer: Saving location', action.location);
			return {
				...state,
				state: action.location.state,
				city: action.location.city,
			};
		case CLEAR_LOCATION: {
			return { ...state, state: '', city: '' };
		}
		default:
			return state;
	}
};

export default locationReducer;
