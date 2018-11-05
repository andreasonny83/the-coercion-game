// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { connect } from 'react-redux';
import { Homepage as HomepageComponent } from '../Homepage';
import { nextLevel } from '../actions';
import { AppState } from '../reducers';

const mapStateToProps = (state: AppState) => ({
  level: state.level.currentLevel,
});

const mapDispatchToProps = (dispatch: any) => ({
  nextLevel: () => dispatch(nextLevel()),
});

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageComponent);
