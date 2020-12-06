import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import PodcastsLayout from './PodcastsLayout';

const setup = (props) => shallow(<PodcastsLayout {...props} />);

test('Renders without error', () => {
  const wrapper = setup({ isLoading: false });
  const component = findByTestAttr(wrapper, 'component-home');
  expect(component.length).toBe(1);
});

test('Render loading bar when isLoading is true', () => {
  const wrapper = setup({ isLoading: true });
  const component = findByTestAttr(wrapper, 'component-loading');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(PodcastsLayout, { isLoading: true, podcasts: [] });
});
