import React from 'react';
import { mount } from 'enzyme';

import Home from './Home';
import useHttp from '../../hooks/http';
// import {useHttp from '../../hooks/http';

const mockSendRequest = jest.fn();

let { sendRequest } = useHttp;

const setup = () => {
  mockSendRequest.mockClear();
  sendRequest = mockSendRequest;
  return mount(<Home />);
};

test('Renders without error', () => {
  setup();
  expect(mockSendRequest).toHaveBeenCalled();
});
