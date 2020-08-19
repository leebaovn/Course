const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require('path');

const route = require('./routes');

const app = express();

//Static files
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars({
  extname:'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP Logging
app.use(morgan("combined"));

//Routes init
route(app);


app.listen(3003);
