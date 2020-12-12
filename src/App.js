import React from 'react';
import theme from './theme';

import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home.js';
import PodcastsPage from './containers/PodcastsPage/PodcastsPage';
import PodcastPage from './containers/PodcastPage/PodcastPage';
import Layout from './components/Layout/Layout';
import SearchPage from './containers/SearchPage/SearchPage';
import sideBarItems from './utils/sideBarItems';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MuiThemeProvider theme={theme}>
        <Layout data-test="layout">
          <Switch>
            <Route path="/home" exact component={PodcastsPage} />
            <Route path="/" exact component={PodcastsPage} />
            {sideBarItems.map((item) => {
              if (item.name !== 'Home') {
                return (
                  <Route
                    path={'/category/' + item.name + '/' + item.id}
                    exact
                    component={PodcastsPage}
                    key={item.id}
                  />
                );
              }
            })}
            <Route path="/podcast/:id" exact component={PodcastPage} />
            <Route path="/search/:id" component={SearchPage} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </Layout>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
