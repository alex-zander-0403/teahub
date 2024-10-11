const express = require('express');
const morgan = require('morgan');
const teaRouter = require('./routes/teaRouter');

const app = express();

//
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

//
app.use('/api/tea', teaRouter);

module.exports = app;
