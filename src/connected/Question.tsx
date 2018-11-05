// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface QuestionProps {
  id: number;
}

interface Option {
  id: number;
  body: string;
}

interface Data {
  question: string;
  options: Option[];
  answer: number;
}

interface QueryResult {
  loading: boolean;
  error: any;
  data: {
    question: Data
  };
}

export const Question = ({ id }: QuestionProps) => (
  <Query
    query={gql`
      query Question($id: Int!) {
        question(id: $id) {
          title
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
      if (res.loading) return <p>Loading...</p>;
      if (res.error) return <p>Error :(</p>;

      console.log(res.data);
      return res.data!.question.options.map((option: Option) => <div key={option.id}>{option.body}</div>);
    }}
  </Query>
);
