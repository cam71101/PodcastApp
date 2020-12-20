import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';
import useHttp from '../../hooks/http';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
// import fetchMock from 'jest-fetch-mock';
import fetchMock from 'fetch-mock';
import mockResponse from '../../__mocks__/search-football-response.json';
import 'whatwg-fetch';

// import { useDataApi } from 'path/to/hoo/useDataApi.jsx';
import { renderHook } from '@testing-library/react-hooks';

const mockSendRequest = jest.fn();

let { sendRequest } = useHttp;

// fetchMock.enableMocks();

const setup = () => {
  mockSendRequest.mockClear();
  sendRequest = mockSendRequest;
  return mount(<Home />);
};

test('Renders without error', () => {
  // setup();
  // expect(mockSendRequest).toHaveBeenCalled();
});

test('Loads spinner on mount', async () => {
  // fetch.once(JSON.stringify(mockResponse));
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <Home />
    </Router>
  );

  const spinner = screen.getByLabelText('loading-spinner');
  expect(spinner).toBeInTheDocument();

  // screen.debug();

  // let { homeRequest } = renderHook(() => useHttp());

  // homeRequest = jest.fn();

  // await waitFor(() => expect(homeRequest).toHaveBeenCalled());

  // screen.debug();

  // waitFor(() => screen.debug());

  // await waitFor(() => expect(screen.findByText(/home/i)).toBeInTheDocument());

  // await screen.debug();

  // expect(homeRequest).toHaveBeenCalledTimes(1);

  // expect(await screen.findByText(/home/i)).toBeInTheDocument();

  //  expect(fetch).toHaveBeenCalledWith(
  //    'https://www.reddit.com/r/reactjs/top.json'
  //  );

  //  expect(
  //    await screen.findByText(/number of top posts: 25/i)
  //  ).toBeInTheDocument();
  // screen.debug(numberOfTopPosts);
});

test('We show a list of posts', async () => {
  // const posts = [{ id: 1, title: 'My post', url: '/1' }];
  // fetchPosts.mockResolvedValueOnce(posts);
  // render(<Index />);
  // expect(screen.getByText('Loading...')).toBeInTheDocument();
  // expect(fetchPosts).toHaveBeenCalledTimes(1);
  // expect(fetchPosts).toHaveBeenCalledWith();
  // await wait(() => expect(screen.getByText('My Posts')).toBeInTheDocument());
  // posts.forEach((post) =>
  //   expect(screen.getByText(post.title)).toBeInTheDocument()
  // );
  // const { homeRequest } = renderHook(() => useHttp());
  // homeRequest.mockResolvedValueOnce(mockResponse);
  //  render(<Index />);
  //  expect(screen.getByText('Loading...')).toBeInTheDocument();
  //  expect(fetchPosts).toHaveBeenCalledTimes(1);
  //  expect(fetchPosts).toHaveBeenCalledWith();
  //  await wait(() => expect(screen.getByText('My Posts')).toBeInTheDocument());
  //  posts.forEach((post) =>
  //    expect(screen.getByText(post.title)).toBeInTheDocument()
  //  );
});

/// For testing the hook
describe('useDataApi', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });
  it('should return data with a successful request', async () => {
    // const { homeRequest } = renderHook(() => useHttp());
    // const fakeResponse = { title: 'example text' };
    // const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    //   fetchMock.mock('test.com', {
    //     returnedData: 'foo',
    //   });
    //   await act(async () => {
    //     result.current.callApi('test.com');
    //   });
    //   expect(result.current.data).toBe({
    //     returnedData: 'foo',
    //   });
    // });
  });
});
