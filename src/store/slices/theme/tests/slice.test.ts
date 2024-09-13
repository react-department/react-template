import reducer, { initialState } from '../slice';

describe('theme slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toMatchObject(initialState);
  });
});
