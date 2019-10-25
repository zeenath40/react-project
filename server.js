const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const path = require('path');
const users = require('./routes/api/users');

//Body Parser Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//DB Config & connection
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport  Config
require('./config/passport')(passport);

//Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/workout', require('./routes/api/workout'));

//Server port & configuration
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});
