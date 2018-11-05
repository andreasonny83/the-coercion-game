// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { Question } from './connected/Question';

import './Homepage.css';
import { LevelState } from './reducers/level';

interface HomepageProps {
  level: number;
  nextLevel(level: number): () => void;
}

export class Homepage extends Component<HomepageProps> {
  public render() {
    const currentLevel: number = this.props.level;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Coercion Game!</h1>
        </header>
        <main>
          {!currentLevel ? (
            <button onClick={this.onNextLevel}>Start</button>
          ) : (
            <React.Fragment>
              <div>Level: {currentLevel}</div>
              <Question id={2} />
            </React.Fragment>
          )}
        </main>
      </div>
    );
  }

  private onNextLevel = () => {
    this.props.nextLevel(2);
  };
}
