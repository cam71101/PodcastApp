import React from 'react';
import Search from './Search';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Search inputs', () => {
  test('Search input and enter sets off submit handler', async () => {
    const searchPodcasts = jest.fn();
    const setSearchValue = jest.fn();
    render(
      <Search searchPodcasts={searchPodcasts} setSearchValue={setSearchValue} />
    );
    const input = screen.getByRole('textbox');
    await act(async () => userEvent.type(input, 'football{enter}'));
    expect(searchPodcasts).toHaveBeenCalledTimes(1);
  });
});
