import { actionTypes, updateData } from '.';
import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import data from '../reducers';

describe('updateData', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('returns an action with type `UPDATE_DATA`', () => {
    // const data = 'test';
    // const store = storeFactory();
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: data,
    //   });
    // });
    // return store.dispatch(updateData()).then(() => {
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
  });
});
