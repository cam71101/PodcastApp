import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { StateMock } from '@react-mock/state';

import AudioPlayer from './AudioPlayer';

function setup() {
  return render(<AudioPlayer />);
}

test('renders component', () => {
  setup();
  // screen.debug();
  // const card = screen.getByRole('link');
  // expect(card).toBeDefined();
});

// it('increments count', async () => {
//   // Render new instance in every test to prevent leaking state
//   const { getByText } = renderComponent({ count: 5 });

//   fireEvent.click(getByText('+1'));
//   await waitForElement(() => getByText(/clicked 6 times/i));
// });

// test('update the url', () => {
//   const history = createMemoryHistory();
//   history.push = jest.fn();
//   setup(history);

//   const link = screen.getByRole('link');
//   const leftClick = { button: 0 };
//   fireEvent.click(link, leftClick);

//   expect(history.push).toHaveBeenCalledWith('/podcast/' + podcast.artistId);
// });

// test('does not throw warning with expected props', () => {
//   const expectedProps = {
//     image: 'image',
//     artist: 'name',
//     artistName: 'namge',
//     id: 1234,
//   };
//   checkProps(PodcastCard, expectedProps);
// });

// Hoist helper functions (but not vars) to reuse between test cases
