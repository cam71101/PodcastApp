import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { checkProps } from '../../test/testUtils';

import response from '../../__mocks__/dave-podcasts.response.json';
import Modal from './Modal';

const podcast = response.results[0];

const handleClose = jest.fn();

function setup(open) {
  return render(
    <Modal
      open={open}
      handleClose={handleClose}
      trackName={podcast.trackName}
      artistName={podcast.artistName}
      artWork={podcast.artWork}
      releaseDate={podcast.releaseDate}
      trackTime={podcast.trackTime}
      description={podcast.description}
    />
  );
}

test('renders component', () => {
  setup(true);
  const modal = screen.getByRole('presentation');
  expect(modal).toBeDefined();
});

test('does not render when open is false', () => {
  setup(false);
  const modal = screen.queryByText('presentation');
  expect(modal).toBeNull();
});

test('Close button calls "handleClose', () => {
  setup(true);
  const leftClick = { button: 0 };
  const button = screen.getByRole('button');
  fireEvent.click(button, leftClick);

  expect(handleClose).toHaveBeenCalled();
});

test('does not throw warning with expected props', () => {
  const expectedProps = {
    open: true,
    handleClose: handleClose,
  };
  checkProps(Modal, expectedProps);
});
