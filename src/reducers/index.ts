import { combineReducers } from 'redux';
import { levelReducer, LevelState } from './level';

export interface AppState {
  level: LevelState;
}

export const rootReducer = combineReducers({
  level: levelReducer,
});
