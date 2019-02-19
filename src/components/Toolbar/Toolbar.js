import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Styled';

class Toolbar extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <ul>
        <li><StyledLink exact to="/">Main</StyledLink></li>
        <li><StyledLink to="/about">About</StyledLink></li>
        <li><StyledLink to="/login">Login</StyledLink></li>
        <li><StyledLink to="/credits">credit calculator</StyledLink></li>
      </ul>
    );
  }
}

export { Toolbar };
