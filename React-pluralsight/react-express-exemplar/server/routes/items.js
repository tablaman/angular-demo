module.exports = function (app) {

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

  app.route('/api/items')
    .get(function(req,res){
      res.send(items);
    })
    .post(function(req,res){
      var item = req.body;
      items.push(item);

    });
};
