import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { AboutPage } from 'pages/about/AboutPage';
import { MainPage } from 'pages/main/MainPage';
import { LoginPage } from 'pages/login/LoginPage';
import { CreditCalcPage } from 'pages/creditCalc/CreditCalcPage';
import { NotFoundPage } from 'pages/notFound/NotFoundPage';
import { Toolbar } from 'components/Toolbar/Toolbar';
import { Loader } from 'components/Loader/Loader';
import GlobalStyles from 'styled/GlobalStyles';

const mapStateToProps = (state) => ({
  user: state.user,
});

@connect(mapStateToProps)
class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        {user.loading ? <Loader /> : null}
        <GlobalStyles />
        <Route
          path="/"
          render={({ location: { pathname } }) => (
            pathname !== '/login' ? <Toolbar /> : null
          )}
        />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/credits" component={CreditCalcPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Fragment>
    );
  }
}

export { App };
