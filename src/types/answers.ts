import { Action } from 'redux';

export enum AnswersActionTypes {
  SELECT_ANSWER = '@@level/SELECT_ANSWER',
}

export interface SelectAnswerAction extends Action {
  type: AnswersActionTypes.SELECT_ANSWER;
  payload: number;
}

export type AnswersAction = SelectAnswerAction;
