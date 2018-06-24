import React from 'react'
import { connect } from 'react-redux';
import { addHelpInfo } from '../actions/help';


class HelpPage extends React.Component {
  constructor(props) {
    super(props);

  }
  onButtonClicked = () => {
    console.log(this.textInput.value);
    this.props.dispatch(addHelpInfo(this.textInput.value))
  }
  
  render() {
    return <div>
        Help page
        <textarea ref={el => this.textInput = el} name="concern" id="concern" cols="30" rows="10" />
        <button onClick={this.onButtonClicked}>MW: Raise a concern</button>
      </div>;

  }
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps) (HelpPage);