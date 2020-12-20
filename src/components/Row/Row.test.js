import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { checkProps } from '../../test/testUtils';

import Row from './Row';
import response from '../../__mocks__/dave-podcasts.response.json';

const modal = jest.fn();
const setAudioHandler = jest.fn();
const leftClick = { button: 0 };

function setup(history) {
  const table = document.createElement('table');
  return render(
    <Row
      podcasts={response.results}
      modal={modal}
      setAudioHandler={setAudioHandler}
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
    name: 'My Mother Wants Me to File for Bankruptcy!',
  });

  fireEvent.click(button, leftClick);
  expect(modal).toHaveBeenCalled();
});

test('Play button works', () => {
  setup();
  const button = screen.getByRole('button', {
    name: '1000502755838',
  });

  fireEvent.click(button, leftClick);
  expect(setAudioHandler).toHaveBeenCalled();
});
