import { waitFor } from '@testing-library/react';

import { initServer } from '../../../../../__tests__/mswServer';
import { renderHook } from '../../../../../__tests__/test-utils';
import user, { userCredentials, userErrorCredentials } from '../../../../mocks/user';
import { useFetchUserQuery, useLoginMutation } from '../apis/dummyAuth';
import { selectCurrentUser } from '../selectors';

initServer();

describe('dummyAuth api', () => {
  test('useLoginMutation error response', async () => {
    const { result } = renderHook(() => useLoginMutation());
    const [login] = result.current;
    await waitFor(async () => {
      const loginResult = await login(userErrorCredentials);
      const errorExists = 'error' in loginResult;
      expect(errorExists).toBe(true);
    });
  });
  test('useLoginMutation successful response', async () => {
    const { result } = renderHook(() => useLoginMutation());
    const [login] = result.current;
    await waitFor(async () => {
      const loginResult = await login(userCredentials);
      const dataExists = 'data' in loginResult;
      expect(dataExists).toBe(true);
    });
  });
  test('useFetchUserQuery', async () => {
    const { result } = renderHook(() => useFetchUserQuery(user.id, {
      skip: !user.id,
      selectFromResult: (res) => ({ ...res, data: selectCurrentUser(res.data, user.id) }),
    }));
    await waitFor(() => expect(result.current.isFetching).toBe(false));
    expect(result.current.data).toMatchObject(user);
  });
});
