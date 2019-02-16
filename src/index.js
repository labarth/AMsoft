import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <div>Hello world</div>,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
