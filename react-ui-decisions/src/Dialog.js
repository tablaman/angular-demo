import React from 'react';
import Dialog from "react-toolbox/lib/dialog";
import { Button } from "react-toolbox/lib/button";

class DialogTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Save", onClick: this.handleToggle }
  ];

  render() {
    return (
      <React.Fragment>
        <Button label="Show my dialog" onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="My awesome dialog"
        >
          <p>
            Here you can add arbitrary content. Components like Pickers are
            using dialogs now.
          </p>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default DialogTest;