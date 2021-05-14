import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//  Reducers
import { todosReducer } from './reducers';

const composeEnhancers = 
    (typeof window !== 'undefined' && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;

const reducers = combineReducers({
    toDos: todosReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);