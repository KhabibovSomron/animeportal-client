import {createStore, applyMiddleware} from 'redux';
import RootReducer from './RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStoreType = ReturnType<typeof RootReducer>

export default Store