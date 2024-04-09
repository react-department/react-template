import { renderHook } from '../../../../../__tests__/test-utils';
import Statuses from '../../../../constants/Statuses';
import { useAppSelector } from '../../../hooks/useApp';
import { selectLocale, selectStatus } from '../selectors';
import { initialState } from '../slice';

describe('translates selectors', () => {
  test(`selectStatus should return translates ${Statuses.idle} status by default`, () => {
    const { result } = renderHook(() => useAppSelector(selectStatus), { preloadedState: { translates: initialState } });
    expect(result.current).toBe(Statuses.idle);
  });
  test(`selectStatus should return translates ${Statuses.loading} status during ${Statuses.loading}`, () => {
    const { result } = renderHook(
      () => useAppSelector(selectStatus),
      { preloadedState: { translates: { ...initialState, status: Statuses.loading } } },
    );
    expect(result.current).toBe(Statuses.loading);
  });
  test(`selectLocale should return translates ${initialState.locale} locale by default`, () => {
    const { result } = renderHook(() => useAppSelector(selectLocale), { preloadedState: { translates: initialState } });
    expect(result.current).toBe(initialState.locale);
  });
});
