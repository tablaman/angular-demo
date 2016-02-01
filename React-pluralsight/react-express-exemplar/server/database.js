// Interaction with Mongo

// We will use Mongoose
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grocery', function () {
  console.log('connected');
})
