import { actionTypes } from '../actions';
import httpReducer from './httpReducer';

test('returns default inital state of `false` when no action is passed', () => {
  const newState = httpReducer(undefined, {});
  expect(newState).toStrictEqual({ data: null });
});

test('returns string when receiving an action of type', () => {
  const newState = httpReducer(undefined, {
    type: actionTypes.UPDATE_DATA,
    payload: 'test',
  });

  expect(newState).toStrictEqual({ data: 'test' });
});
