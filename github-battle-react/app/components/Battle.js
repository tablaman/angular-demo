import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlayerPreview from "./PlayerPreview";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  }
  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
      return { username: value };
    });
  }
  render() {
    return (
      <form action="" className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="header">
          {this.props.label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] = "https://github.com/" + username;

      return newState;
    });
  }
  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;

      return newState;
    });
  }
  render() {
    const {
      playerOneName,
      playerOneImage,
      playerTwoImage,
      playerTwoName
    } = this.state;
    const { match } = this.props;

    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerOneImage !== null && (
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
            >
              <button
                className="reset"
                onClick={this.handleReset.bind(null, 'playerOne')}
              >
                reset
              </button>
            </PlayerPreview>
          )}
          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerTwoImage !== null && (
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
            >

            <button
                className="reset"
                onClick={this.handleReset.bind(null, 'playerTwo')}
              >
                reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage &&
          playerTwoImage && (
            <Link
              className="button"
              to={{
                pathname: `${match.url}/results`,
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
              }}
            >
              Battle!
            </Link>
          )}
      </div>
    );
  }
}

export default Battle;
