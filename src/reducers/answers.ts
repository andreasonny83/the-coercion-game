import { Reducer } from 'redux';
import { AnswersAction, AnswersActionTypes } from '../types';

export interface Answer {
  levelId: number;
  answer: number;
}

export interface AnswersState {
  answers: Answer[];
}

const initialState = {
  answers: [],
};

export const answersReducer: Reducer<AnswersState> = (state: AnswersState = initialState, action) => {
  switch ((action as AnswersAction).type) {
    case AnswersActionTypes.SELECT_ANSWER:
      return state;

    default:
      return state;
  }
};
