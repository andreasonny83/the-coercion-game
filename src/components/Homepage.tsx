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
    const { level, nextLevel } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Coercion Game!</h1>
        </header>
        <main>
          {!level ? (
            <button onClick={nextLevel}>Start</button>
          ) : (
            <React.Fragment>
              <div>Level: {level}</div>
              <Question id={level} />
            </React.Fragment>
          )}
        </main>
      </div>
    );
  }
}
