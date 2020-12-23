import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AudioProvider from './context/audio-context';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AudioProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
    </AudioProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
