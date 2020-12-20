import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PodcastsPage from './PodcastsPage';

test('Renders without error', () => {
  const props = {
    location: {
      pathname: '/category/arts',
    },
  };

  render(<PodcastsPage {...props} />);
  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();
});
