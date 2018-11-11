import { Action } from 'redux';

export enum LevelActionTypes {
  NEXT_LEVEL = '@@level/NEXT_LEVEL',
  PREVIOUS_LEVEL = '@@level/PREVIOUS_LEVEL',
}

export interface NextLevelAction extends Action {
  type: LevelActionTypes.NEXT_LEVEL;
}

export interface PreviousLevelAction extends Action {
  type: LevelActionTypes.PREVIOUS_LEVEL;
  payload: number;
}

export type LevelAction = NextLevelAction | PreviousLevelAction;
