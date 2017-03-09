import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import DumbComponent from './components/DumbComponent';

ReactDOM.render(
  <DumbComponent />,
  document.getElementById('root')
);