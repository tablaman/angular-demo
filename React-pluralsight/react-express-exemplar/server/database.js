// Interaction with Mongo

// We will use Mongoose
var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function () {
  console.log('connected');
  mongoose.connection.db.dropDatabase();
  
  var items = [
    {
      name: "Ice cream",
      purchased: true
    }, {
      name: "Marshmellows",
      purchased: false
    }, {
      name: "Tea",
      purchased: false
    }, {
      name: "Ice burger",
      purchased: true
    }, {
      name: "Chocolate",
      purchased: false
    }
  ];

  items.forEach (function(item){
    new GroceryItem(item).save();
  });
})
