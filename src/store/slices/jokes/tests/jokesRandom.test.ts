import { waitFor } from '@testing-library/react';

import { initServer } from '../../../../../__tests__/mswServer';
import { renderHook } from '../../../../../__tests__/test-utils';
import joke from '../../../../mocks/joke';
import useFetchJokeQuery from '../apis/jokesRandom';

initServer();

describe('jokesRandom api', () => {
  test('useFetchJokeQuery success response', async () => {
    const { result } = renderHook(() => useFetchJokeQuery());
    await waitFor(() => expect(result.current.isFetching).toBe(false));
    expect(result.current.data).toMatchObject(joke);
  });
});
