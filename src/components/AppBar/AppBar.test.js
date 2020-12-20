import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import AppBar from './AppBar';

describe('Buttons', () => {
  test('Open drawer toggle', async () => {
    const handleDrawerToggle = jest.fn();
    render(<AppBar handleDrawerToggle={handleDrawerToggle} />);

    const button = screen.getByRole('button', { name: 'open drawer' });
    fireEvent.click(button);

    expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
