// External Dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';

// Internal Dependencies
import logo from './logo.svg';
import './App.css';

// Needed for onTouchTap event handling
injectTapEventPlugin();

// Create the redux store
// const store = initializeStore();


// Component Definition
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>React + Redux</h2>
          </div>

          <Paper className="App-main">
            Let's start by making something to put here...

            <div className="data-display">
              {/* TODO: map over data to display here */}
              <ListItem primaryText="Caitlin" />
              <ListItem primaryText="Michael" />
              <ListItem primaryText="Eric" />
              <ListItem primaryText="Colin" />

            </div>

            <div className="main-form">
              <TextField
                floatingLabelText="Enter first name"
              />
              <RaisedButton
                className="submit-button"
                label="Submit"
                primary
              />
            </div>

          </Paper>

        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
