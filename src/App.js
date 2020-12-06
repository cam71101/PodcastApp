import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home.js';
import PodcastsPage from './containers/PodcastsPage/PodcastsPage';
import PodcastPage from './containers/PodcastPage/PodcastPage';
import Layout from './components/Layout/Layout';
import MenuBar from './containers/MenuBar/MenuBar';
import SearchPage from './containers/SearchPage/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Layout data-test="layout">
        <MenuBar />
        <Route path="/" exact component={Home} />
        <Route path="/category/:id" exact component={PodcastsPage} />
        <Route path="/podcast/:id" exact component={PodcastPage} />
        <Route path="/search/:id" exact component={SearchPage} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
