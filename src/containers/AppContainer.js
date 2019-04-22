import React  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from 'redux/auth/actions';
import { App } from '../App';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
})

export const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));