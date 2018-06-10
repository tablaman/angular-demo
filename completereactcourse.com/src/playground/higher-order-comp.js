// HOC -  a component(HOC) that renders another component
// Reuse code
// Render hijacking
// prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => ( 
  <div>
    <h1>Info</h1>
    <p>Info is {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p> }
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = Component => {
  return props => (
    <React.Fragment>
      {props.isAuthenticated ? <Component {...props} />
      : <p>You need to be logged in!</p>}
      
    </React.Fragment>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication (Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'))
// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'))