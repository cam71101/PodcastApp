import useHttp from './http';
import moxios from 'moxios';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mount } from 'enzyme';

// Takes props and makes a render prop out of it. Can render Test and children is
// going to be called with whatever useHttp comes back from.
// Will create returnVal, render HTTP, which will async call our children prop with whatever
// is returned from usedHttp and will assign return val to whatever is returned from useHttp
//

const Http = ({ children, ...rest }) => children(useHttp(rest));

function setup(props) {
  let returnVal = {};
  render(
    <Http {...props}>
      {(val) => {
        Object.assign(returnVal, val);
        return null;
      }}
    </Http>
  );
  return returnVal;
}

afterEach(cleanup);

// const mockDispatchHttp = jest.fn()

// const setup = () => {
//   // return mount(<UseHttp />);
// };

test('', () => {
  const httpData = setup();
  httpData.isLoading = false;
  // httpData.sendRequest('/')
});

// describe('updateData', () => {
//   beforeEach(() => {
//     moxios.install();
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });

// test('returns an action with type `UPDATE_DATA`', () => {
//   const wrapper = setup();
//   const data = 'test';
// const mockDispatchHttp = jest.fn();
// React.useState = jest.fn(() => ["", mockSetCurrentGuess])

// const store = storeFactory();

// const { result } = renderHook(() => useReducer(reducer, initialState));

// moxios.wait(() => {
//   const request = moxios.requests.mostRecent();
//   request.respondWith({
//     status: 200,
//     response: data,
//   });
// });

// const { sendRequest } = useHttp();

// const mockDispatchHttp = jest.fn();

// await getSecretWord(mockDispatchHttp)

// return dispatchHttp()).then(() => {
//   const newState = store.getState();
//   expect(newState.data).toBe(data);
// });

// const action = updateData('test');
// expect(action).toStrictEqual({ type: actionTypes.UPDATE_DATA });
// expect(action).toEqual({
//   // type: actionTypes.UPDATE_DATA,
//   data: null,
// });
// const actionTypes = {
//   UPDATE_DATA: 'UPDATE_DATA',
// };
// expect(action).toEqual({
//   type: actionTypes.UPDATE_DATA,
//   link: 'https://itunes.apple.com/',
// });
//   });
// });
