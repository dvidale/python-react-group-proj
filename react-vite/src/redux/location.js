const SAVE_LOCATION = 'location/SAVE_LOCATION';

export const saveLocation = (location) => {
	console.log('INSIDE ACTION CREATOR');
	return {
		type: SAVE_LOCATION,
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
		default:
			return state;
	}
};

export default locationReducer;
