const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const Schema = require('./schema');

const app = express();
app.use(cors());

const schemaFunction =
  Schema.schemaFunction ||
  function() {
    return Schema.schema;
  };
let schema;

const rootFunction =
  Schema.rootFunction ||
  function() {
    return schema.rootValue;
  };

const contextFunction =
  Schema.context ||
  function(headers, secrets) {
    return Object.assign(
      {
        headers: headers,
      },
      secrets
    );
  };

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(async request => {
    if (!schema) {
      schema = schemaFunction(process.env);
    }

    // const context = await contextFunction(request.headers, process.env);
    // const rootValue = await rootFunction(request.headers, process.env);

    return {
      schema: await schema,
      // rootValue,
      // context,
      tracing: true,
    };
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    query: `
{
  question(id: 1) {
    title
    options {
      id
      body
    }
    answer
  }
}
`,
  })
);

module.exports = { app };
