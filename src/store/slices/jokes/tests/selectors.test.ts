import { renderHook } from '../../../../../__tests__/test-utils';
import Statuses from '../../../../constants/Statuses';
import jokesMock from '../../../../mocks/joke';
import { useAppSelector } from '../../../hooks/useApp';
import { selectJoke, selectStatus } from '../selectors';

describe('jokes selectors', () => {
  test(`selectStatus should return ${Statuses.idle} status by default`, () => {
    const { result } = renderHook(() => useAppSelector(selectStatus));
    expect(result.current).toBe(Statuses.idle);
  });
  test(`selectStatus should return ${Statuses.loading} status during ${Statuses.loading}`, () => {
    const jokes = { status: Statuses.loading, joke: undefined };
    const { result } = renderHook(() => useAppSelector(selectStatus), { preloadedState: { jokes } });
    expect(result.current).toBe(Statuses.loading);
  });
  test('selectJoke should return undefined joke by default', () => {
    const { result } = renderHook(() => useAppSelector(selectJoke));
    expect(result.current).toBe(undefined);
  });
  test('selectJoke should return joke if joke is present', () => {
    const jokes = { status: Statuses.idle, joke: jokesMock.value };
    const { result } = renderHook(() => useAppSelector(selectJoke), { preloadedState: { jokes } });
    expect(result.current).toBe(jokes.joke);
  });
});
