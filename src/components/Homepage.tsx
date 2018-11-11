// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { Question } from '../connected/Question';

import './Homepage.css';

interface HomepageProps {
  level: number;
  nextLevel(): () => void;
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
            <button onClick={this.props.nextLevel}>Start</button>
          ) : (
            <React.Fragment>
              <div>Level: {currentLevel}</div>
              <Question id={currentLevel} />
            </React.Fragment>
          )}
        </main>
      </div>
    );
  }
}
