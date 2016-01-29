var uuid = require ('node-uuid');
var listeners = {};

module.exports = {
  register: function(cb) {
    var id = uuid.raw();
    listeners[id] = callback;
    return id;
  },
  dispatch: function (payload) {
    console.info("Dispatching...", payload);
    for (var id in listeners){
      var listener = listeners[id];
      listener(payload);
    }

  }
}
