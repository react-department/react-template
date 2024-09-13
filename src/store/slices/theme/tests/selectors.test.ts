import { renderHook } from '../../../../../__tests__/test-utils';
import Theme from '../../../../constants/Theme';
import { useAppSelector } from '../../../hooks/useApp';
import selectCurrentTheme from '../selectors';

describe('theme selectors', () => {
  test(`selectCurrentTheme should return ${Theme.light} by default`, () => {
    const { result } = renderHook(() => useAppSelector(selectCurrentTheme));
    expect(result.current).toBe(Theme.light);
  });
  test(`selectCurrentTheme should return ${Theme.dark}`, () => {
    const theme = { theme: Theme.dark };
    const { result } = renderHook(() => useAppSelector(selectCurrentTheme), { preloadedState: { theme } });
    expect(result.current).toBe(Theme.dark);
  });
});
