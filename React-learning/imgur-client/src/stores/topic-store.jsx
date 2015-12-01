var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore ({
    // from Reflux - you can have listenables
    listenables: [Actions],
    getTopics: function() {
        return Api.get('topics/defaults')
            .then(function(json){
                this.topics = json.data;
                this.triggerChange();
            }.bind(this));
    },
    triggerChange: function () {
        this.trigger('change', this.topics);
    }
});
