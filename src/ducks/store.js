import {createStore} from 'redux'; //import applyMiddleware
import peopleReducer from './people';
//import reduxPromiseMiddleware from redux-promise-middleware
export default createStore(peopleReducer);//add second argument invoking applyMiddleware passing in reduxPromiseMiddleware invoked



