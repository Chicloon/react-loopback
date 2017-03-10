import 'purecss/build/pure.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import stores from './stores';
import Layout from './components/Layout';

ReactDOM.render(
  <Provider contacts = {stores.contacts}>
    <Layout />
  </ Provider>,
  document.getElementById('root')
);
