import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import createSagaMiddleware from "redux-saga";
import { postsWatcher } from "../saga/postsSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	posts: postsReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(postsWatcher);
