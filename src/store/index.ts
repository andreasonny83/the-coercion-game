import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));