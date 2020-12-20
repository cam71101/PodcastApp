import React from 'react';
import Drawer from './Drawer';
import { shallow } from 'enzyme';
// import { findByTestAttr } from './test/testUtils';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Router, MemoryRouter, Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import mockResponse from '../../../__mocks__/search-football-response.json';
import { createMemoryHistory } from 'history';

fetchMock.enableMocks();

describe('Links', () => {
  test('Open drawer toggle', () => {
    const handleDrawerToggle = jest.fn();
    render(
      <MemoryRouter>
        <Drawer handleDrawerToggle={handleDrawerToggle} />
      </MemoryRouter>
    );

    // const button = screen.getByRole('button', { name: 'open drawer' });
    // fireEvent.click(button);
    // screen.debug();

    // expect(handleDrawerToggle).toHaveBeenCalledTimes(1);
  });
});
