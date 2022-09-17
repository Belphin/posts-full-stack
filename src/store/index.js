import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ordersReducer from './ordersReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	orders: ordersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
