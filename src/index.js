import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { includesPolyfill, objectAssignPolyfill } from './lib/polyfills';
import Site from './pages/site';

import './index.scss';

includesPolyfill();
objectAssignPolyfill();

if (module.hot) module.hot.accept();

function App() {
  return (
    <BrowserRouter basename="/">
      <Route path="/" component={Site} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
