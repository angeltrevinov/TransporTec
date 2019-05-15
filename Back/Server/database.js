const mongoose = require('mongoose');
//link para conectarse con el cluster
const URI = 'mongodb+srv://Maggs:Jm137924685@transportec-2wtsm.mongodb.net/Transportec?retryWrites=true';
mongoose.connect(URI, {useNewUrlParser: true})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;
