import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Row from './Row';
import feed from '../../__mocks__/louis-podcast.response.json';

const modal = jest.fn();
const setAudioHandler = jest.fn();
const leftClick = { button: 0 };

function setup() {
  const table = document.createElement('table');
  return render(
    <Row
      podcasts={feed.items}
      modal={modal}
      setAudioHandler={setAudioHandler}
      podcast={feed}
    />,
    {
      container: document.body.appendChild(table),
    }
  );
}

test('renders component', async () => {
  setup();
  const row = screen.getByRole('rowgroup');
  expect(row).toBeDefined();
});

test('Modal button works', () => {
  setup();
  const button = screen.getByRole('button', {
    name: '3. Helena Bonham Carter',
  });

  fireEvent.click(button, leftClick);
  expect(modal).toHaveBeenCalled();
});

test('Play button works', () => {
  setup();
  const button = screen.getByRole('button', {
    name: '9',
  });

  fireEvent.click(button, leftClick);
  expect(setAudioHandler).toHaveBeenCalled();
});
