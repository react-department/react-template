import reducer, { initialState, logout } from '../slice';

describe('auth slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toMatchObject(initialState);
  });
  test('should handle logout', () => {
    expect(reducer(initialState, logout())).toMatchObject(initialState);
  });
});
