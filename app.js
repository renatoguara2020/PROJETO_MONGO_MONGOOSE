const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const conn = require("./database/conn").run;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

 app.use(
express.urlencoded({
     extended: true,
   })
 );

app.use(express.json());
app.listen(3000)
  