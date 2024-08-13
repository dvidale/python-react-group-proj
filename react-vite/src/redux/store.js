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

const rootReducer = combineReducers({
	session: sessionReducer,
	menuItems: menuItemsReducer,
	shoppingCart: shoppingCartReducer,
	restaurants: restaurantsReducer,
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
