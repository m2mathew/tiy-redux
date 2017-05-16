// External Dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Internal Dependencies
import App from './App';
import './index.css';
import { initializeStore } from './state';

// Needed for onTouchTap event handling
injectTapEventPlugin();

// Create the redux store
const store = initializeStore();

// Render the application
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
