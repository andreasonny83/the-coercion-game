// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { Component } from 'react';
import classNames from 'classnames';
import { Option } from '../connected/Question';
import './Question.css';

interface QuestionProps {
  description: string;
  options: Option[];
  level: any;
  // isActive: any;
  questionSelected?: number;
  nextLevel: (questionSelected: number) => void;
}

export class Question extends Component<QuestionProps> {
  public render() {
    console.log(this.props);
    const { description, options, nextLevel } = this.props;
    const questionSelected = 10;

    return (
      <div className="Question" onClick={this.select}>
        <p>{description}</p>
        <div className="questions">
          {options.map((option: Option) => (
            <div key={option.id} className={classNames('question', 'active')}>
              {option.body}
            </div>
          ))}
        </div>
        <button onClick={this.nextLevel}>Next</button>
      </div>
    );
  }

  public nextLevel = () => {
    console.log('current level', this.props.level);
    this.props.nextLevel(10);
  }

  public select = () => {
    // Allo!
  }
}
