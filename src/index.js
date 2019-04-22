import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer as App } from './containers/AppContainer';
import configureStore from './store/store';

const rootEl = document.getElementById('root');
const store = configureStore();
window.store = store;

const Component = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Component />,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
