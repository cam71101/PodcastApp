// Takes props and makes a render prop out of it. Can render Test and children is
// going to be called with whatever useHttp comes back from.
// Will create returnVal, render HTTP, which will async call our children prop with whatever
// is returned from usedHttp and will assign return val to whatever is returned from useHttp
//

import React from 'react';
import 'whatwg-fetch';
import { render, act, waitFor, cleanup } from '@testing-library/react';
import useHttp from './http';
import axios from 'axios';
import response from '../__mocks__/search-football-response.json';

function setup(...args) {
  const returnVal = {};

  function TestComponent() {
    Object.assign(returnVal, useHttp(...args));
    return null;
  }

  render(<TestComponent />);
  return returnVal;
}

afterEach(cleanup);

describe('useApi sendRequest', () => {
  test('should catch error', async () => {
    axios.get = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject(),
      })
    );

    const httpData = setup();
    expect(httpData.isLoading).toBe(false);
    expect(httpData.data).toBe(null);
    expect(httpData.error).toBe(null);
    expect(httpData.description).toBe(null);
    expect(httpData.categoryData).toBe(null);

    await act(async () => {
      httpData.sendRequest('www.test.com');
    });

    expect(httpData.error).toBe('Something went wrong!');
  });

  test('should return data with  successful response', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: 'data.response' }));

    const httpData = setup();
    expect(httpData.isLoading).toBe(false);
    expect(httpData.data).toBe(null);
    expect(httpData.error).toBe(null);
    expect(httpData.description).toBe(null);
    expect(httpData.categoryData).toBe(null);

    await act(async () => {
      httpData.sendRequest('www.test.com');
    });

    expect(httpData.data).toBe('data.response');
    expect(httpData.categoryData).toBe(null);
  });
});

describe('useApi homeRequest', () => {
  test('should return data with  successful response', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: 'data.response' }));

    const httpData = setup();
    expect(httpData.isLoading).toBe(false);
    expect(httpData.data).toBe(null);
    expect(httpData.error).toBe(null);
    expect(httpData.description).toBe(null);
    expect(httpData.categoryData).toBe(null);

    await act(async () => {
      httpData.homeRequest('www.test.com');
    });

    expect(httpData.data).toBe('data.response');
    expect(httpData.categoryData).toBe('data.response');
  });
});

describe('useApi sendPodcastRequest', () => {
  test('should catch error', async () => {
    axios.get = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject(),
      })
    );

    const httpData = setup();
    expect(httpData.isLoading).toBe(false);
    expect(httpData.data).toBe(null);
    expect(httpData.error).toBe(null);
    expect(httpData.description).toBe(null);
    expect(httpData.categoryData).toBe(null);

    await act(async () => {
      httpData.sendPodcastRequest('www.test.com');
    });

    expect(httpData.error).toBe('Something went wrong!');
  });

  test('should return data with  successful response', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: response }));

    const httpData = setup();
    expect(httpData.isLoading).toBe(false);
    expect(httpData.data).toBe(null);
    expect(httpData.error).toBe(null);
    expect(httpData.description).toBe(null);
    expect(httpData.categoryData).toBe(null);

    await act(async () => {
      httpData.sendPodcastRequest('www.test.com');
    });

    expect(httpData.data).toBe(response);
  });
});
