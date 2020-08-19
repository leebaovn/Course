const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require('path');

const app = express();

//Static files
app.use(express.static(path.join(__dirname,'public')));

//template engine
app.engine('hbs', handlebars({
  extname:'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//HTTP Logging
app.use(morgan("combined"));

//Routing
app.get("/", (req, res, next) => {
  res.status(200).render('home');
});

app.listen(3003);
