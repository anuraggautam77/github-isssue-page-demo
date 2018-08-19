/*
 * Module dependencies.
 */
const express = require('express');
const path = require('path');

/*
 * connect middleware - please note not all the following are needed for the specifics of this example but are generally used.
 */
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3200;

const server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});


app.use(express.static(path.resolve(__dirname, '../dist')));

// catch 404 and forward to error handler
 
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
});
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
module.exports = app;
