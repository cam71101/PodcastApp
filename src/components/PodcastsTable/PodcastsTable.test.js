import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test/testUtils';

import response from '../../__mocks__/dave-podcasts.response.json';
import PodcastsTable from './PodcastsTable';
import AudioProvider from '../../context/audio-context';

const modal = jest.fn();
const history = createMemoryHistory();
history.push = jest.fn();
const leftClick = { button: 0 };

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

test('Play button works', () => {
  const wrapper = (props) => (
    <AudioProvider props={props}>
      <Router history={history}> </Router>
    </AudioProvider>
  );
  render(<PodcastsTable />, { wrapper });
});
