import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { checkProps } from '../../test/testUtils';

import response from '../../__mocks__/search-football-response.json';
import PodcastHeader from './PodcastHeader';

const podcast = response.results[0];

function setup(history) {
  return render(
    <Router history={history}>
      <PodcastHeader podcast={podcast} description={'This podcast is great'} />
    </Router>
  );
}

test('renders component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  setup(history);

  const heading = screen.getByRole('heading', { name: /Pardon My Take/i });
  expect(heading).toBeDefined();
});
