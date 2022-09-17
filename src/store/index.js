import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ordersReducer from './ordersReducer';
import productsReducer from './productsReducer';
import thunk from 'redux-thunk';
import snackReducer from './snackReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	orders: ordersReducer,
	snack: snackReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
