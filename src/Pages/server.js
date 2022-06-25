require('./Model/db');

const epress = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./Controller/employeeController');
const express = require('express');
var app = epress();
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('view engine', 'hbs');
app.listen(3000, () =>{
    console.log("Epress server started port: 3000")
});
app.use('/employee', employeeController);