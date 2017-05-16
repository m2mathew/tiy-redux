// External Dependencies
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component, PropTypes } from 'react';
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
import { update } from './state/ui/actions';

// Component Definition
class App extends Component {
  static PropTypes = {
    firstName: PropTypes.string,
    onUpdate: PropTypes.func.isRequired,
  }

  static defaultProps = {
    firstName: '',
  }

  render() {
    console.log('hello', this.props);

    const {
      firstName,
      onUpdate,
    } = this.props;

    // map over the data and create the table rows
    // const renderTableRows = () =>

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
                <TableRow>
                  <TableRowColumn>Caitlin</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Michael</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Eric</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Doug</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="main-form">
            <TextField
              floatingLabelText="Enter first name"
              onChange={event => onUpdate({ firstName: event.target.value })}
            />
            <RaisedButton
              className="submit-button"
              label="Submit"
              primary
            />
          </div>

        </Paper>

      </div>
    );
  }
}

export default connectComponent((state) => {

  // map state to props here
  return {
    firstName: state.firstName,
  }

}, {
  // map dispatch to props here
  onUpdate: update,
}, App);
