import reducer, { initialState } from '../slice';

describe('jokes slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toMatchObject(initialState);
  });
});
