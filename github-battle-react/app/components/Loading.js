import React from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};
class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    const {text, speed} = this.props;
    const stopper = text + '...';
    // the old
    // this.interval = window.setInterval(() => {
    //   if (this.state.text === stopper) {
    //     this.setState(() => {
    //       return { text: text }
    //     })
    //   } else {
    //     this.setState((prevState) => {
    //       return { text: prevState.text + '.'}
    //     })
    //   }
    // }, speed);

    // the new
    this.interval = window.setInterval(() => {
      this.state.text === stopper
      ? this.setState(() =>  ({ text })) :
      this.setState((prevState) => ({ text: prevState.text + '.'}));

    }, speed);
  };

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  };
  }

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading;
