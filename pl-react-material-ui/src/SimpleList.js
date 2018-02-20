import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  let test = 1;
  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/drafts">
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
