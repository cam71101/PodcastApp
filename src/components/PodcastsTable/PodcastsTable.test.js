import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import feed from '../../__mocks__/louis-podcast.response.json';
import PodcastsTable from './PodcastsTable';

const modal = jest.fn();
const history = createMemoryHistory();
history.push = jest.fn();

function setup(history) {
  return render(
    <Router history={history}>
      <PodcastsTable podcasts={feed.items} modal={modal} />
    </Router>
  );
}

test('renders component', () => {
  setup(history);
  const table = screen.getByRole('table');
  expect(table).toBeDefined();
});
