import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlayerPreview from "./PlayerPreview";

class PlayerInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  static defaultProps = {
    label: "Usernam =>e"
  };
  state = {
    username: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  };
  /*  Note: about capturing events
      The reason is that when the callback function runs, 
      the value behind `event` may be long gone!
      So, make sure you first capture the event in another variable 
      at that point in time.

  */
  handleChange = event => {
    let value = event.target.value;
    console.log(`change ${value}`);

    this.setState(() => ({ username: value }));
  };
  render() {
    const { username } = this.state;
    const { label } = this.props;

    return (
      <form action="" className="column" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="header">
          {label}
        </label>
        <input
          type="text"
          id="username"
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!username}>
          Submit
        </button>
      </form>
    );
  }
}

// older implementation without the use of
// `transform-class-properties`

// PlayerInput.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired
// };

class Battle extends React.Component {
  state = {
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null
  };
  handleSubmit = (id, username) => {
    // The old ES5 way!
    // this.setState(() => {
    //   const newState = {};
    //   newState[id + "Name"] = username;
    //   newState[id + "Image"] = "https://github.com/" + username;

    //   return newState;
    // });

    // The new ES6 way
    // Using computed property names
    this.setState(() => ({
      [id + "Name"]: username,
      [id + "Image"]: `https://github.com/${username}.png?size=200`
    }));
  };
  handleReset = id => {
    this.setState(() => ({
      [id + "Name"]: "",
      [id + "Image"]: null
    }));
  };
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
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button
                className="reset"
                onClick={() => this.handleReset("playerOne")}
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
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="reset"
                onClick={() => this.handleReset("playerTwo")}
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
