import { storeFactory } from './test/testUtils';
import { updateData } from './store/actions/index';

describe('guessWord acion dispatcher', () => {
  const word = 'test';
  let store;
  const initialState = {};

  // beforeEach(() => {
  //   store = storeFactory(initialState);
  // });

  test('updates data state correctly', () => {
    // store.dispatch(updateData(word));
    // const newState = store.getState();
    // const expectedState = {
    //   ...initialState,
    //   payload: word,
    // };
    // expect(newState).toEqual(expectedState);
  });
});
