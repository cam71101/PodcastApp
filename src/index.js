import React from 'react';
import ReactDOM, { BrowserRouter } from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AudioProvider from './context/audio-context';

import 'typeface-lato';

ReactDOM.render(
  <AudioProvider>
    <App />
  </AudioProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
