import { createStore, applyMiddleware } from 'redux'; // Import applyMiddleware
import thunk from 'redux-thunk'; // Import thunk
import reducers from './reducers';
import state from './state';

export default createStore(reducers, state, applyMiddleware(thunk)); 