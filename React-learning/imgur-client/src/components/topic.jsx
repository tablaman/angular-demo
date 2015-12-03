var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ImagePreview = require('./image-preview');


module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],
    getInitialState: function() {
        return {
            images: []
        };
    },
    // only fetching data one time here.
    componentWillMount: function () {
        console.log('Topic is about to render and fetch data');
        Actions.getImages(this.props.params.id);
    },
    // for when new properties come through
    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps');
        Actions.getImages(nextProps.params.id);
    },
    render: function () {
        // console.log('Topid rendering with id : ', this.props.params.id);
        // console.log('No of images : ', this.state.images.length);
        return (
            <div className="topic">
                {this.renderImages()}

            </div>
        )
    },
    renderImages: function () {
        //render only 20 for now
        return this.state.images.slice(0,20).map(function(image) {
            return <ImagePreview key={image.id} {...image} />
        });
    },
    onChange: function(event, images) {
        this.setState({images: images});
    }
})
