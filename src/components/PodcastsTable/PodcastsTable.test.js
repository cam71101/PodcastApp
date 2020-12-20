import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import response from '../../__mocks__/dave-podcasts.response.json';
import PodcastsTable from './PodcastsTable';

const modal = jest.fn();
const history = createMemoryHistory();
history.push = jest.fn();

function setup(history) {
  return render(
    <Router history={history}>
      <PodcastsTable podcasts={response.results} modal={modal} />
    </Router>
  );
}

test('renders component', () => {
  setup(history);
  const table = screen.getByRole('table');
  expect(table).toBeDefined();
});
