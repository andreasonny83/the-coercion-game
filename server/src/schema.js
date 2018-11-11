// graphql-tools combines a schema string with resolvers.
const axios = require('axios');
const { makeExecutableSchema } = require('graphql-tools');
const { questionsData } = require('./questionsData');

const API_URL =
  'https://raw.githubusercontent.com/andreasonny83/the-coercion-game/master/server/src';

// Construct a schema, using GraphQL schema language
const typeDefs = `
    type Query {
      allQuestions: [Question]
      question(id: Int!): Question
    },
    type Question {
      id: Int!
      level: Int!
      title: String!
      description: String!
      options: [QuestionOption]!
      answer: Int!
    }
    type QuestionOption {
      id: Int!
      body: String!
    }
`;

const getQuestion = async (root, { id }) => {
  const res = await axios.get(`${API_URL}/questionsData.json`);

  return res.data.filter(question => question.id === id)[0];
};

const getAllQuestions = () => questionsData;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    allQuestions: getAllQuestions,
    question: getQuestion,
  },
};

// Required: Export the GraphQL.js schema object as "schema"
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports.schema = schema;