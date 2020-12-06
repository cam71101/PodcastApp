import React from 'react';
import MenuBar from './MenuBar';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => shallow(<MenuBar.WrappedComponent />);

test('Renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-drawer');
  expect(component.length).toBe(1);
});

test('Render list without error', () => {
  const wrapper = setup();
  const listComponent = findByTestAttr(wrapper, 'component-list');
  expect(listComponent.length).toBe(1);
});
