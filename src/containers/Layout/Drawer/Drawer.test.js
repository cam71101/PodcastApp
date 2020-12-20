import React from 'react';
import Drawer from './Drawer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('Open drawer toggle', () => {
  const handleDrawerToggle = jest.fn();
  render(
    <MemoryRouter>
      <Drawer handleDrawerToggle={handleDrawerToggle} />
    </MemoryRouter>
  );
});
