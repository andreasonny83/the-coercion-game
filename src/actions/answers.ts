import { ActionCreator } from 'redux';
import { AnswersAction, AnswersActionTypes } from '../types';

export const selectAnswer: ActionCreator<AnswersAction> = (levelId: number, answerSelected: number) => ({
  type: AnswersActionTypes.SELECT_ANSWER,
  payload: {
    level: levelId,
    answer: answerSelected,
  },
});
