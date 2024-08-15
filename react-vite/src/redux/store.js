import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import menuItemsReducer from './menuItems';
import shoppingCartReducer from './shoppingCart';
import restaurantsReducer from './restaurants';
import reviewsListReducer from './reviews';
import menuItemRatingsReducer from './menuItemRating';

const rootReducer = combineReducers({
	session: sessionReducer,
	restaurants: restaurantsReducer,
	menuItems: menuItemsReducer,
	shoppingCart: shoppingCartReducer,
	reviewsList: reviewsListReducer,
	menuItemRating: menuItemRatingsReducer
});

let enhancer;
if (import.meta.env.MODE === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = (await import('redux-logger')).default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
