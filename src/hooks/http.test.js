import useHttp from './http';
import moxios from 'moxios';

// const mockDispatchHttp = jest.fn()

describe('updateData', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('returns an action with type `UPDATE_DATA`', () => {
    const data = 'test';
    // const mockDispatchHttp = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess])

    // const store = storeFactory();

    // const { result } = renderHook(() => useReducer(reducer, initialState));

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data,
      });
    });

    // const { sendRequest } = useHttp();

    // const mockDispatchHttp = jest.fn()

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
  });
});
