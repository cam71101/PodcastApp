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
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </AudioProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
