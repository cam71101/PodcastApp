import React from 'react';
import PodcastPage from './PodcastPage';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

test('Renders without error', async () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  const props = {
    location: {
      pathname: '/podcast/1508985962',
      search: '?1',
    },
  };

  render(
    <Router history={history}>
      <PodcastPage {...props} />
    </Router>
  );
  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();
});
