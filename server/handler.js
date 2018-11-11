
// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const awsServerlessExpress = require('aws-serverless-express');
const { app } = require('./src/app');

const server = awsServerlessExpress.createServer(app, null);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
