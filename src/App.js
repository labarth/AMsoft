import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AboutPage } from 'pages/about/AboutPage';
import { MainPage } from 'pages/main/MainPage';
import { LoginPage } from 'pages/login/LoginPage';

export const App = () => (
  <div>
    <ul>
      <li><Link to="/">Main</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>

    <hr />

    <Route exact path="/" component={MainPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/login" component={LoginPage} />
  </div>
);
