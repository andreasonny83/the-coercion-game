// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { match } from 'react-router';

export interface QuestionProps<P> {
  match: match<P>;
}

interface QuestionQueryProps {
  id: Number;
}

export class Question extends Component<QuestionProps<QuestionQueryProps>> {
  render() {
    const questionParam = this.props.match.params;

    return <div>Question #{questionParam.id}</div>;
  }
}
