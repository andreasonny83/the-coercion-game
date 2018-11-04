// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Homepage } from './connected/Homepage';
import { Question } from './Question';
import { Notfound } from './Notfound';

export class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/question/:id" component={Question} />
        <Route component={Notfound} />
      </Switch>
    );
  }
}
