import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Layout from './Layout';

test('Renders without error', () => {
  window.scrollTo = jest.fn();
  const history = createMemoryHistory();
  history.push = jest.fn();

  render(
    <Router history={history}>
      <Layout />
    </Router>
  );

  const root = screen.getByRole('banner');
  expect(root).toBeInTheDocument();
});
