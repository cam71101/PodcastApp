import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home.js';
import PodcastsPage from './containers/PodcastsPage/PodcastsPage';
import PodcastPage from './containers/PodcastPage/PodcastPage';
import Layout from './containers/Layout/Layout';
import SearchPage from './containers/SearchPage/SearchPage';
import sideBarItems from './utils/sideBarItems';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Layout data-test="layout">
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/popular" exact component={PodcastsPage} />
        {sideBarItems.map((item) => {
          return (
            <Route
              path={'/category/' + item.name + '/' + item.id}
              exact
              component={PodcastsPage}
              key={item.id}
            />
          );
        })}
        <Route path="/podcast/:id" exact component={PodcastPage} />
        <Route path="/search/:id" component={SearchPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);
