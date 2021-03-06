import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import mockResponse from './__mocks__/search-football-response.json';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

fetchMock.enableMocks();

describe('Header', () => {
  test('"How it works" link points to the correct page', async () => {
    window.scrollTo = jest.fn();
    const history = createMemoryHistory();
    fetch.once(JSON.stringify(mockResponse));
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const link = screen.getByRole('button', { name: /popular/i });
  });
});
