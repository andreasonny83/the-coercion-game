// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { Questions } from './Questions';

import './Homepage.css';

export class Homepage extends Component {
  onClick = () => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Coercion Game!</h1>
        </header>
        <main>
          <button onClick={this.onClick}>Start</button>
          <Questions />
        </main>
      </div>
    );
  }
}
