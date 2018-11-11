import { ActionCreator } from 'redux';
import { AnswersAction, AnswersActionTypes } from '../types';

export const selectAnswer: ActionCreator<AnswersAction> = (answerSelected: number) => ({
  type: AnswersActionTypes.SELECT_ANSWER,
  payload: answerSelected,
});
