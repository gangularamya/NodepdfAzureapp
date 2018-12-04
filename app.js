var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var PDFDocument = require('pdfkit');
var fs = require('fs');
var port = process.env.port || 3000;

app.get('/', function (req, res) {
  var doc;
  doc = new PDFDocument;
  doc.pipe(fs.createWriteStream('output22.pdf'));
  // PDF Creation logic goes here
  doc.fontSize(15).text('Subject!', 50, 50);
  // Set the paragraph width and align direction
  doc.text('Some testing text', {
      width: 410,
      align: 'left'
  });
  doc.end();

  res.send("Generating pdf");
})

app.listen(port, () => console.log('Example app listening on port 3000!'))


