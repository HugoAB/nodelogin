const express = require('express');
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');
const router = express.Router();
const app = express();

// mongoose connection
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected!!'))
  .catch((err) => console.log(err));


// EJS
app.set('view engine', 'ejs');
app.use(expressEjsLayout);

// BodyParser
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(8081, () => {
    console.log('Running on port 8081');
});
