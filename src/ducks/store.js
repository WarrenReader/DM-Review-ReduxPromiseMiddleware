import {createStore, applyMiddleware, combineReducers} from 'redux';
import peopleReducer from './people';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const reducer = combineReducers({
    people: peopleReducer
})

export default createStore(
    reducer,
    applyMiddleware(reduxPromiseMiddleware())
);



