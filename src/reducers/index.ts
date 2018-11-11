import { combineReducers, Reducer } from 'redux';
import { levelReducer, LevelState } from './level';
import { AnswersState, answersReducer } from './answers';

export interface AppState {
  level: LevelState;
  answers: AnswersState;
}

export const rootReducer: Reducer<AppState> = combineReducers({
  level: levelReducer,
  answers: answersReducer,
});
