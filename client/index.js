import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import routes from './routes';

import Layout from './components/Layout';

import stores from './stores';

render (<Router routes = {routes} history = {browserHistory} />,
  document.getElementById('app'));