// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
var typeDefs = `
    type Query {
      allQuestions: [Question]
        question(id: Int!): Question
    },
    type Question {
      id: Int
      title: String
      options: [QuestionOption]
      answer: Int
    }
    type QuestionOption {
      id: Int
      body: String
    }
`;

var questionsData = [
  {
    id: 10,
    title: 'Question 1',
    options: [
      { id: 1, body: 'option #1' },
      { id: 2, body: 'option #2' },
      { id: 3, body: 'option #3' },
    ],
    answer: 1,
  },
  {
    id: 2,
    title: 'Question 2',
    options: [
      { id: 1, body: 'option #1' },
      { id: 2, body: 'option #2' },
      { id: 3, body: 'option #3' },
    ],
    answer: 3,
  },
];

var getQuestion = function(root, { id }) {
  return questionsData.filter(question => question.id === id)[0];
};

var getAllQuestions = function() {
  return questionsData;
};

// Provide resolver functions for your schema fields
var resolvers = {
  Query: {
    allQuestions: getAllQuestions,
    question: getQuestion,
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
