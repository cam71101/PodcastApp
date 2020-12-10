import React from 'react';
import MenuBar from './MenuBar';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => shallow(<MenuBar.WrappedComponent />);

global.window = { location: { pathname: null } };

test('Renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-drawer');
  expect(component.length).toBe(1);
});

describe('Button tests', () => {
  const wrapper = setup();
  const btn = findByTestAttr(wrapper, 'component-button');

  test('Render button without error', () => {
    expect(btn.length).toBe(1);
  });

  test('Change url when home button is clicked', () => {
    btn.simulate('click');
    expect(global.window.location.pathname).toEqual('/');
  });
});
