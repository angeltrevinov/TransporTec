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
//app.use('/rutas/paradas', require('./Routes/paradas.routes')); //Routes Involving the information of the different paradas
app.use('/usuario/tickets', require('./Routes/tickets.routes')); //The routes for requesting tickets

//Starting server
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
