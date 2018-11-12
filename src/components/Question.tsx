// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import classNames from 'classnames';
import { Option } from '../connected/Question';
import { Answer } from '../reducers/answers';

import './Question.css';

interface QuestionProps {
  description: string;
  options: Option[];
  currentLevel: number;
  level?: number;
  answers: Answer;
  questionSelected?: number;
  nextLevel: (levelId: number) => void;
  selectAnswer: (levelId: number, questionSelected: number) => any;
}

export class Question extends Component<QuestionProps> {
  public render() {
    const { description, options, answers, currentLevel, selectAnswer } = this.props;
    const isActive = (optionId: number) => answers[currentLevel] === optionId;

    return (
      <div className="Question" onClick={this.select}>
        <p>{description}</p>
        <div className="questions">
          {options.map((option: Option) => (
            <div
              key={option.id}
              className={classNames('question', isActive(option.id) && 'active')}
              onClick={() => selectAnswer(currentLevel, option.id)}
            >
              {option.body}
            </div>
          ))}

          <button disabled={!answers[currentLevel]} onClick={this.nextLevel}>
            Next
          </button>
        </div>
      </div>
    );
  }

  public nextLevel = () => {
    this.props.nextLevel(10);
  };

  public select = () => {
    // Allo!
  };
}
