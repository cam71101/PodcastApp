import { httpReducer } from './httpReducer';

test('test', () => {});

test('returns object when receiving action SEND', () => {
  const newState = httpReducer(undefined, {
    type: 'SEND',
  });
  expect(newState).toStrictEqual({ loading: true, error: null, data: null });
});

test('returns object when receiving action RESPONSE', () => {
  const newState = httpReducer(undefined, {
    type: 'RESPONSE',
    responseData: {},
    categoryData: [],
    genres: [],
  });
  expect(newState).toStrictEqual({
    loading: false,
    data: {},
    categoryData: [],
    genres: [],
  });
});

test('returns object when receiving action ERROR', () => {
  const newState = httpReducer(undefined, {
    type: 'ERROR',
    errorMessage: 'error',
  });
  expect(newState).toStrictEqual({
    loading: false,
    error: 'error',
  });
});

test('returns object when receiving action CLEAR', () => {
  const newState = httpReducer(undefined, {
    type: 'CLEAR',
  });
  expect(newState).toStrictEqual({
    error: null,
  });
});
