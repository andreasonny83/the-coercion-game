import { Reducer } from 'redux';
import { LevelAction, LevelActionTypes } from '../types';

export interface LevelState {
  currentLevel: number;
}

const initialState: LevelState = {
  currentLevel: 0,
};

export const levelReducer: Reducer<LevelState> = (state: LevelState = initialState, action) => {
  switch ((action as LevelAction).type) {
    case LevelActionTypes.NEXT_LEVEL:
      return {
        ...state,
        currentLevel: (state.currentLevel += 1),
      };

    default:
      return state;
  }
};
