const express = require('express');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/authentication', require('./Routes/authentication.routes')); //Routes involving User LogIn and Auth
app.use('/rutas', require('./Routes/rutas.routes')); //Routes Involving the information of the different Rutas

//Starting server
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
