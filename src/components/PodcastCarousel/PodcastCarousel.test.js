import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test/testUtils';

import response from '../../__mocks__/search-football-response.json';
import PodcastCarousel from './PodcastCarousel';

const podcast = response.results[0];

function setup(history) {
  return render(
    <Router history={history}>
      <PodcastCarousel podcasts={response} />
    </Router>
  );
}

describe('Testing carousel', () => {
  test('renders component', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    setup(history);

    const card = screen.getByRole('link');
    expect(card).toBeDefined();
  });

  test('update the url', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    setup(history);

    const link = screen.getByRole('link');
    const leftClick = { button: 0 };
    fireEvent.click(link, leftClick);

    expect(history.push).toHaveBeenCalledWith('/podcast/' + podcast.id + '?1');
  });

  test('does not throw warning with expected props', () => {
    checkProps(PodcastCarousel, { podcasts: {} });
  });
});
