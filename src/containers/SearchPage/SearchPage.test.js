import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

test('Renders without error', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <SearchPage />
    </Router>
  );

  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();
});
