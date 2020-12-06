import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';

const setup = () => shallow(<App />);

// console.log(wrapper.debug());

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'layout');
  expect(appComponent.length).toBe(1);
});
