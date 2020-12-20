import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import {
  render,
  fireEvent,
  screen,
  act,
  getByRole,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import mockResponse from './__mocks__/search-football-response.json';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

/**
 * @jest-environment jsdom
 */

// const setup = () => shallow(<App />);

// test('renders without error', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'layout');
//   expect(appComponent.length).toBe(1);
// });

fetchMock.enableMocks();

describe('Header', () => {
  test('"How it works" link points to the correct page', async () => {
    window.scrollTo = jest.fn();
    const history = createMemoryHistory();
    fetch.once(JSON.stringify(mockResponse));
    // const searchPodcasts = jest.fn();
    // const promise = Promise.resolve();
    // const test = jest.fn(() => promise);
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // screen.debug();

    // screen.getByText('Popular');

    // getByRole('input', { name: /search/i });

    // const searchInput = screen.getByLabelText('search');
    // screen.getByText('Popular');
    // screen.debug();

    const link = screen.getByRole('button', { name: /popular/i });

    // act(() => {
    //   fireEvent.click(link);
    // });

    // expect(fetch).toHaveBeenCalledWith(
    //   'https://itunes.apple.com/search?term=football&media=podcast&limit=1000'
    // );

    // await act(async () => userEvent.type(input, 'hello{enter}'));
    // fireEvent.focus(searchInput);
    // fireEvent.changeText(searchInput, 'hello world');

    // act(() => {
    //   userEvent.type(searchInput, 'football{enter}');
    // });

    // await act(async () => {
    //   userEvent.type(searchInput, 'football{enter}');
    // });

    // const form = screen.getByLabelText('form-search');

    // act(() => {

    // await act(async () => userEvent.type(searchInput, 'football{enter}'));

    // form.focus();
    // fireEvent.keyDown(form, { key: 'Enter', code: 'Enter' });
    // });

    // const spinner = await screen.findByLabelText('loading-spinner');

    // screen.debug();

    // await act(() => promise);

    // const spinner = screen.getByLabelText('loading-spinner');
    // expect(spinner).toBeInTheDocument();

    // const text = await screen.findByLabelText('text-search');

    // expect(fetch).toHaveBeenCalledWith(
    //   'https://itunes.apple.com/search?term=football&media=podcast&limit=1000'
    // );

    // screen.debug();

    // expect(searchPodcasts).toHaveBeenCalledTimes(1);
    // userEvent.type(searchInput, 'football');

    // const form = screen.getByLabelText('form-search');
    // fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter' });

    // userEvent.type('{enter}');

    // const spinner = await screen.getByLabelText('loading-spinner');

    // expect(spinner).toBeInTheDocument();

    // const spinner = await screen.findByLabelText('loading-spinner');
    // expect(spinner).toBeInTheDocument();

    // screen.debug();

    // const text = await screen.findByText(/search results for... "football"/i);

    // const test2 = screen.getByLabelText(/loading-spinner/i);

    // expect(screen.getByLabelText('loading-spinner')).toBeInTheDocument();

    // screen.debug();
  });
});
