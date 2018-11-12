// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { connect } from 'react-redux';
import { Question as QuestionComponent } from '../components/Question';
import { nextLevel, selectAnswer } from '../actions';
import { AppState } from '../reducers';

const mapStateToProps = (state: AppState) => ({
  currentLevel: state.level.currentLevel,
  answers: state.answers,
});

const mapDispatchToProps = (dispatch: any) => ({
  nextLevel: (levelId: number) => dispatch(nextLevel(levelId)),
  selectAnswer: (levelId: number, questionSelected: number) => dispatch(selectAnswer(levelId, questionSelected)),
});

export const QuestionWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent);
