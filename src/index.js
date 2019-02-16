import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'App';
import configureStore from './store/store';

const rootEl = document.getElementById('root');
const store = configureStore();
window.store = store;

const Component = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Component />,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
