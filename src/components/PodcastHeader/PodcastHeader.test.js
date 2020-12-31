import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import feed from '../../__mocks__/louis-podcast.response.json';
import PodcastHeader from './PodcastHeader';

function setup(history) {
  return render(
    <Router history={history}>
      <PodcastHeader podcast={feed} genres={['action']} />
    </Router>
  );
}

test('renders component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  setup(history);

  const heading = screen.getByRole('heading', {
    name: 'Grounded with Louis Theroux',
  });
  expect(heading).toBeDefined();
});
