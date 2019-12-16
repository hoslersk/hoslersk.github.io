import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Page from './components/page';

if (module.hot) module.hot.accept();

function App() {
  return <Page />;
}

ReactDOM.render(<App />, document.getElementById('root'));
