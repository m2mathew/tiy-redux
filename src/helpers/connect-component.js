// External Dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// This function connects a react component with the redux store.
// It just reduces some boilerplate and makes the
// component code easier to read.
export default (mapStateToProps, actionCreators, component) =>
  connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch),
  )(component);
