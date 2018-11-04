// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { connect } from 'react-redux';
import { Homepage as HomepageComponent } from '../Homepage';

// import { GameState } from '../store/app/types';

// const mapStateToProps = (state: GameState) => ({
//   currentLevel: state.currentLevel
// });

// const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
//   onIncrement: countersActions.increment,
// }, dispatch);

export const Homepage = HomepageComponent;
