import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Card />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
