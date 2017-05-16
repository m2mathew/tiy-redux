// External Dependencies
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Internal Dependencies
import connectComponent from './helpers/connect-component';
import logo from './logo.svg';
import './App.css';
import {
  add,
  update,
} from './state/ui/actions';

// Component Definition
class App extends Component {
  static PropTypes = {
    firstName: PropTypes.string,
    onAdd: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    users: PropTypes.array,
  }

  static defaultProps = {
    firstName: '',
  }

  render() {
    const {
      firstName,
      onAdd,
      onUpdate,
      users,
    } = this.props;

    // map over the data and create the table rows
    const renderTableRows = () => users.map(user => (
      <TableRow key={user.firstName}>
        <TableRowColumn>{user.firstName}</TableRowColumn>
      </TableRow>
    ));

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React + Redux</h2>
        </div>

        <Paper className="App-main">
          {/* 1 */}
          Let's look at possible real life examples...

          <div className="list">
            {/* TODO: map over data to display here */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>First Name</TableHeaderColumn>
                  {/* <TableHeaderColumn>Fav Animal</TableHeaderColumn>
                  <TableHeaderColumn>Fav Coding Lang</TableHeaderColumn> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {renderTableRows()}
              </TableBody>
            </Table>
          </div>

          <div className="main-form">
            <TextField
              floatingLabelText="Enter first name"
              onChange={event => onUpdate({ firstName: event.target.value })}
              value={firstName}
            />
            <RaisedButton
              className="submit-button"
              label="Submit"
              onTouchTap={onAdd}
              primary
            />
          </div>

        </Paper>

      </div>
    );
  }
}

export default connectComponent((state) => {
  console.log('state is:', state);

  // map state to props here
  return {
    firstName: state.ui.form.firstName,
    users: state.users.apiData.Items,
  }

}, {
  // map dispatch to props here
  onAdd: add,
  onUpdate: update,
}, App);
