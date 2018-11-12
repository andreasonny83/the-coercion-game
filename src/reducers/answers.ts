import { Reducer } from 'redux';
import { AnswersAction, AnswersActionTypes } from '../types';

export interface Answer {
  [key: number]: number;
}

export type AnswersState = Answer;

const initialState = {};

export const answersReducer: Reducer<AnswersState> = (state: AnswersState = initialState, action) => {
  switch ((action as AnswersAction).type) {
    case AnswersActionTypes.SELECT_ANSWER:
      return {
        ...state,
        [action.payload.level]: action.payload.answer,
      };

    default:
      return state;
  }
};
