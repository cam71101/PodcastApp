import React from 'react';
import Home from './Home';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

test('Loads spinner on mount', async () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const spinner = screen.getByRole('progressbar');

  expect(spinner).toBeInTheDocument();
});
