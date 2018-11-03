// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

export const Questions = () => (
  <Query
    query={gql`
      {
        allQuestions {
          id
          title
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          {data.allQuestions.map(
            ({ id, title }: { id: number; title: string }) => (
              <li key={`question-${id}`}>
                <Link to={`/question/${id}`}>{title}</Link>
              </li>
            )
          )}
        </div>
      );
    }}
  </Query>
);
