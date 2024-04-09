import { renderHook } from '../../../../../__tests__/test-utils';
import auth from '../../../../mocks/auth';
import user from '../../../../mocks/user';
import { useAppSelector } from '../../../hooks/useApp';
import { selectCurrentUser, selectUserId, selectUserToken } from '../selectors';

describe('auth selectors', () => {
  test('selectUserId if user absent id should be undefined', () => {
    const { result } = renderHook(() => useAppSelector(selectUserId));
    expect(result.current).toBe(undefined);
  });
  test('selectUserId if user present id should not be undefined', () => {
    const { result } = renderHook(() => useAppSelector(selectUserId), { preloadedState: { auth } });
    expect(result.current).toBe(auth.id);
  });
  test('selectUserToken if user absent token should be undefined', () => {
    const { result } = renderHook(() => useAppSelector(selectUserToken));
    expect(result.current).toBe(undefined);
  });
  test('selectUserToken if user present token should not be undefined', () => {
    const { result } = renderHook(() => useAppSelector(selectUserToken), { preloadedState: { auth } });
    expect(result.current).toBe(auth.token);
  });
  test('selectCurrentUser if user absent data should be undefined', () => {
    const { result } = renderHook(() => useAppSelector(() => selectCurrentUser(undefined, user.id)));
    expect(result.current).toBe(undefined);
  });
  test('selectCurrentUser if user present data should not be undefined', () => {
    const { result } = renderHook(() => useAppSelector(() => selectCurrentUser(user, user.id)));
    expect(result.current).toMatchObject(user);
  });
});
