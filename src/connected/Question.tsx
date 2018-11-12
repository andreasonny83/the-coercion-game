// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { QuestionWrapper } from './QuestionWrapper';

interface QuestionProps {
  id: number;
}

export interface Option {
  id: number;
  body: string;
}

interface Data {
  question: string;
  level: number;
  options: Option[];
  description: string;
  answer: number;
}

interface QueryResult {
  loading: boolean;
  error: any;
  data: {
    question: Data;
  };
}

export const Question = ({ id }: QuestionProps) => {
  return (
    <Query
      query={gql`
        query Question($id: Int!) {
          question(id: $id) {
            title
            level
            description
            options {
              id
              body
            }
            answer
          }
        }
      `}
      variables={{ id }}
    >
      {(res: Partial<QueryResult>) => {
        if (res.loading) {
          return <p>Loading...</p>;
        }
        if (res.error) {
          return <p>Error :(</p>;
        }

        return (
          <QuestionWrapper
            description={res.data!.question.description}
            level={res.data!.question.level}
            options={res.data!.question.options}
          />
        );
      }}
    </Query>
  );
};
