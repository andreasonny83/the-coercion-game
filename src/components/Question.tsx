// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import { Option } from '../connected/Question';
import './Question.css';

interface QuestionProps {
  description: string;
  options: Option[];
  nextLevel(): () => void;
}

export class Question extends Component<QuestionProps> {
  render() {
    const { description, options } = this.props;

    return (
      <div className="Question">
        <p>{description}</p>
        <div className="questions">
          {options.map((option: Option) => (
            <div className="question" key={option.id}>
              {option.body}
            </div>
          ))}
        </div>
        <button onClick={this.props.nextLevel}>Next</button>
      </div>
    );
  }
}
