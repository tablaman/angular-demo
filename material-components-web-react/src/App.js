import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "rmwc/Button";
import { IconToggle } from "rmwc/IconToggle";
import { SimpleDialog } from "rmwc/Dialog";
import { Select } from "rmwc/Select";

class App extends Component {
  state = {
    simpleDialogIsOpen: false
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} width="50px" className="App-logo" alt="logo" />
          <h1 className="App-title">MDC</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button raised>Hello </Button>
        <IconToggle
          on={{ label: "Remove from favorites", content: "favorite" }}
          off={{ label: "Add to favorites", content: "favorite_border" }}
        />

        <SimpleDialog
          title="This is a simple dialog"
          body="You can pass the body prop, or anything you want as children."
          open={this.state.simpleDialogIsOpen}
          onClose={evt => this.setState({ simpleDialogIsOpen: false })}
          onAccept={evt => console.log("Accepted")}
          onCancel={evt => console.log("Cancelled")}
        />

        <Button
          raised
          onClick={evt => this.setState({ simpleDialogIsOpen: true })}
        >
          Open Simple Dialog
        </Button>
        <br/>
        <Select
          label="Formatted"
          options={[
            {
              label: "Dinner",
              options: [
                {
                  label: "Pizza",
                  value: "2"
                }
              ]
            },
            {
              label: "Dessert",
              options: [
                {
                  label: "Cookies",
                  value: "1"
                },

                {
                  label: "Icecream",
                  value: "3"
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
