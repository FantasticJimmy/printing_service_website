var express = require('express');
var bodyParse = require('body-parser');
var cookieParse = require('cookie-parser');
// var session = require('express-session');

var app = express();
var port = process.env.PORT || 5000;

// var bookRouter = require('./src/routes/bookRoutes')(nav);
// var adminRouter = require('./src/routes/adminRoutes')(nav);
// var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded());
app.use(cookieParse());
// app.use(session({secret: 'library'}));

app.set('view engine', 'ejs')
app.set('views', './src/views');


app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});