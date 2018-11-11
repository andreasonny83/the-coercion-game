import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState, rootReducer } from '../reducers/index';

const composeEnhancers = composeWithDevTools({});

export const store: Store<AppState> = createStore<AppState, AnyAction, {}, {}>(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
