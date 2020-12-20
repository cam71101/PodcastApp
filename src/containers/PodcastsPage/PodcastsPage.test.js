import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useHttp from '../../hooks/http';

import PodcastsPage from './PodcastsPage';

function setup(...args) {
  const returnVal = {};

  function TestComponent() {
    Object.assign(returnVal, useHttp(...args));
    return null;
  }

  render(<TestComponent />);
  return returnVal;
}

test('Renders without error', () => {
  const sendRequest = jest.fn(() => Promise.resolve({ data: 'data.response' }));

  const props = {
    location: {
      pathname: '/category/arts',
    },
  };

  render(<PodcastsPage {...props} />);
  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();

  expect(sendRequest).toBeCalled();
});
