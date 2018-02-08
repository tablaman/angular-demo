import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import SimpleList from './SimpleList';
import Drafts from './Drafts';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

class App extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    });
  };

  render() {
    const {classes, theme} = this.props;
    
    const drawer = (
     <div>
       <div className={classes.drawerHeader} />
       <Divider />
       {/* <List>{mailFolderListItems}</List> */}
       <SimpleList />
       <Divider />
       {/* <List>{otherMailFolderListItems}</List> */}
     </div>
   );
    
    return (<Router>
      <MuiThemeProvider>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="title" color="inherit" noWrap="noWrap">
                  Responsive drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp="mdUp">
              <Drawer variant="temporary" anchor={theme.direction === 'rtl'
                  ? 'right'
                  : 'left'} open={this.state.mobileOpen} classes={{
                  paper: classes.drawerPaper
                }} onClose={this.handleDrawerToggle} ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}>
                {drawer}

              </Drawer>
            </Hidden>
            <Hidden smDown="smDown" implementation="css">
              <Drawer variant="permanent" open="open" classes={{
                  paper: classes.drawerPaper
                }}>
                {drawer}

              </Drawer>
            </Hidden>
            <main className={classes.content}>
              <Typography noWrap="noWrap">{'You think water moves fast? You should see ice.'}</Typography>
              <Route exact path="/drafts" component={() => <Drafts {...this.state} />}/>
            </main>
          </div>
        </div>
      </MuiThemeProvider>

    </Router>)

    // <div className="App">
    //   <Header {...this.state} pageChange={this.onPageChange} />
    //   <Route exact path="/" render={() => <Dashboard {...this.state} onPageDetailsChange={this.onPageDetailsChange} ></Dashboard>}/>
    //   <Route exact path="/work-orders" component={() => <WorkOrders {...this.state}/>}/>
    //   <Route exact path="/events" component={() => <Events {...this.state} pageChange={this.onPageChange}/>}/>
    //   <Route exact path="/event/:id" component={() => <Events {...this.state} pageChange={this.onPageChange}/>}/>
    // </div>);
  }
}

export default withStyles(styles, {withTheme: true})(App);
