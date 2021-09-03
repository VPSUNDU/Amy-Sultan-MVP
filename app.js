var createError = require('http-errors');
var express = require('express');
// var jwt = require ('jasonwebtoken');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var studentsRouter = require('./routes/students');
var bibleVerseRouter = require('./routes/bibleVerse');
var teacherRegRouter = require('./routes/teacherReg');
// var Board = require('./src/Board');
// var Card = require('./src/Card');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', studentsRouter);
app.use('/', bibleVerseRouter);
app.use('/', teacherRegRouter);


// app.get('*', (req, res) => {
//   res.sendFile(path.join(_dirname + '/client/build/index.html'));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: 'error'});
});

module.exports = app;
