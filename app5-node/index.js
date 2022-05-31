const express = require('express');
const app = express();
const routing = require('./routing');
var cookieParser = require('cookie-parser');
var session = require('express-session')
app.use(cookieParser());
app.use(session({
    secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
    resave: false,
    saveUninitialized: true
}));

port = 3010;
cart = {};

app.set('view engine', 'ejs');
app.use((request, response, next) => {
    console.log(request.method + ' ' + request.url + ': ' + new Date());
    next();
})
app.use('/', routing);
app.use(express.static('public'));

 
app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port + '/');
 }); 
