var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react');
var GroceryItem = require('./models/GroceryItem.js');
require('./database.js');

app.get('/', function (req, res) {
  // res.render('./../app/index.ejs',{});
  var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

  GroceryItem.find (function(error, doc){
    var generated = React.renderToString(application({
      items: doc
    }));
    res.render('./../app/index.ejs', {reactOutput:generated});
  });
})
.use (express.static(__dirname + '/../.tmp'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
require('./routes/items.js')(app);
