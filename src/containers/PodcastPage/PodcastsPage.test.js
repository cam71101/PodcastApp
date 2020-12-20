import React from 'react';
import PodcastPage from './PodcastPage';
import axios from 'axios';
import { Router } from 'react-router-dom';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  cleanup,
} from '@testing-library/react';
// import { waitForElement } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    console.log('test');
    return res(ctx.json({ greeting: 'hello there' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// beforeEach(() => {
//   axios.get = jest.fn(() => Promise.resolve({ data: 'tits' }));
// });

// afterEach(cleanup);

test('Renders without error', async () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  const props = {
    location: {
      pathname: '/podcast/1508985962',
    },
  };

  render(
    <Router history={history}>
      <PodcastPage {...props} />
    </Router>
  );
  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();

  // await waitFor(() => screen.getByRole('heading'));
});
