import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutPage } from 'pages/about/AboutPage';
import { MainPage } from 'pages/main/MainPage';
import { LoginPage } from 'pages/login/LoginPage';
import { CreditCalcPage } from 'pages/creditCalc/CreditCalcPage';
import { NotFoundPage } from 'pages/notFound/NotFoundPage';
import { Toolbar } from 'components/Toolbar/Toolbar';
import GlobalStyles from 'styled/GlobalStyles';

export const App = () => (
  <Fragment>
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
