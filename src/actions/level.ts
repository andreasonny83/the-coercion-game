import { ActionCreator } from 'redux';
import { LevelActionTypes, NextLevelAction } from '../types';

export const nextLevel: ActionCreator<NextLevelAction>  = (answerSelected: number) => ({
  type: LevelActionTypes.NEXT_LEVEL,
  payload: answerSelected,
});
