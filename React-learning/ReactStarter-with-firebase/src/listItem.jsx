var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://flickering-fire-4776.firebaseio.com/';

module.exports =  React.createClass({
    getInitialState: function () {
        return {
            text: this.props.item.text,
            done: this.props.item.done,
            textChanged: false
        }
    },
    componentWillMount: function () {
        this.fb = new Firebase(rootUrl+ 'items/' + this.props.item.key);
    },
    render: function () {
      return <div className="input-group">
                <span className="input-group-addon">
                    <input 
                        type="checkbox"
                        checked={this.state.done}
                        onChange={this.handleDoneChange}/>
                </span>
                <input type="text"
                        className="form-control"
                        value={this.state.text}
                        disabled={this.state.done}
                        onChange={this.handleTextChange}/>
                <span className="input-group-btn">
                    {this.changesButtons()}
                    <button 
                        className="btn btn-default"
                        onClick={this.handleDeleteClick}>
                        Delete
                    </button>
                </span>
            </div>
    
    },
    changesButtons: function () {
        if(!this.state.textChanged) {
            return null
        }
        else {
                return [
                    <button 
                        className="btn btn-default"
                        onClick={this.handleSaveClick}>Save</button>,
                    <button 
                        className="btn btn-default"
                        onClick={this.handleUndoClick}>Undo</button>
                ]
            }
    },
    handleUndoClick: function () {
        this.setState ({
            text: this.props.item.text,
            textChanged: false
        })
    },
    handleSaveClick: function () {
        // Note: if you want current changes it's this.state.text
        // if you want what's on Firebase (i.e. previous changes) then it's this.props.text
        this.fb.update({text: this.state.text});
        this.setState({textChanged: false});
        
    },
    handleTextChange: function() {
        this.setState ({
            text: event.target.value,
            textChanged:true
        })
    },
    handleDoneChange: function () {
        var update = {done: event.target.checked};
        this.setState(update);
        this.fb.update(update);
    },
    handleDeleteClick: function () {
        this.fb.remove();
    }


})          