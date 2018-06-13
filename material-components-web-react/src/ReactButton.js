import React from 'react';
import Button from '@material/react-button/dist';

const ReactButton = props => (
  <React.Fragment>
    <Button
      raised
      className="button-alternate"
      onClick={() => console.log("clicked!")}
    >
      Click Me!
    </Button>
  </React.Fragment>
);
export default ReactButton;