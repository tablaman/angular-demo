var React = require ('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            topics: []
        };
    },
    // called just before rendering.
    // At this point we want
    componentWillMount: function() {
        // TopicStore.getTopics()
        //     .then(function(){
        //         // We have successfully fetched topics
        //         // topics are available in TopicsStore.topics
        //         this.setState({
        //             topics: TopicStore.topics
        //         });
        //     }.bind(this));
        Actions.getTopics();
    },
    render: function() {
        return (
            <div className='list-group'>
                Topic List
                {this.renderTopics()}
            </div>
        )
    },
    renderTopics: function () {
        // restrict to the first 4 topics just for demo purposes use .slice(0,4)
        return this.state.topics.map(function(topic) {
            return <Link to={'topics/' + topic.id} className="list-group-item" key={topic.id}>
                        <h4>{topic.name}</h4>
                        <p>{topic.description}</p>
                    </Link>
        });
    },
    onChange: function (event, topics) {
        this.setState({topics: topics});
    }

});
