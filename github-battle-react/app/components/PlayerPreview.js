import React from "react";
import PropTypes from 'prop-types';

const PlayerPreview = ({ username, avatar, children }) => {
  return (
    <div>
      <div className="column">
        <img
          src={avatar}
          alt={`Avatar for ${username}`}
          className="avatar"
        />
        <h2 className="username">@{username}</h2>
      </div>
      {children}
    </div>
  );
};

PlayerPreview.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired
};


export default PlayerPreview;