import React from 'react';
import DrawerLinks from './DrawerLinks';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';

import list from '../../utils/sideBarItems';

const history = createMemoryHistory();
history.push = jest.fn();

function setup(history) {
  return render(
    <Router history={history}>
      <DrawerLinks />
    </Router>
  );
}

describe('Links', () => {
  test.each(list)('Each category link updates url', (cat) => {
    setup(history);

    const link = screen.getByLabelText(cat.name);
    fireEvent.click(link);

    expect(history.push).toHaveBeenCalledWith(
      '/category/' + cat.name + '/' + cat.id
    );
  });

  test('Popular link updates url', () => {
    setup(history);

    fireEvent.click(screen.getByRole('button', { name: /popular/i }));
    expect(history.push).toHaveBeenCalledWith('/popular');
  });

  test('Home link updates url', async () => {
    setup(history);

    fireEvent.click(screen.getByRole('button', { name: /home/i }));
    expect(history.push).toHaveBeenCalledWith('/');
  });
});
