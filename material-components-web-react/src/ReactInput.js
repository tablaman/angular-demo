import React from 'react'
import {
  MDCTextField
} from '@material/textfield'

export default class TextField extends React.PureComponent {
  
  // Instantiate the vanilla material component once the react component mounts
  // componentDidMount() {
  //   this.mdcComponent = new textField.MDCTextfield(this.mdcMount)
  // }

  // // Clean up the vanilla material component along with the react component 
  // componentWillUnmount() {
  //   this.mcdComponent.destroy()
  // }

  render() {
    // Note in the second opening div how I get a reference to the DOM element of the text field
    return (
      <div className="mdc-form-field">
        <div className="mdc-textfield" ref={(div) => { this.mdcMount = div }}>
          <input
            type="text"
            className="mdc-textfield__input"
            id="demo-input"
            onChange={this.props.onChange}
          />
          <label htmlFor="demo-input" className="mdc-textfield__label">
            {this.props.label}
          </label>
        </div>
      </div>
    )
  }
}