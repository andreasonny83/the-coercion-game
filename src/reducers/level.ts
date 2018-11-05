import { NEXT_LEVEL } from '../constants/action-types';
import { Action } from 'redux';

export interface LevelState {
  currentLevel: number;
}

const initialState: LevelState = {
  currentLevel: 0,
};

export const levelReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case NEXT_LEVEL:
      return {
        ...state,
        currentLevel: state.currentLevel += 1,
      };

    default:
      return state;
  }
};
