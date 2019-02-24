import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/auth/actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

@connect(mapStateToProps)
class AppContainer extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>AppContainer</div>
    );
  }
}

export { AppContainer };
