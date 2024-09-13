import { renderHook } from '../../../__tests__/test-utils';
import Theme from '../../constants/Theme';
import useTheme from '../useTheme';

describe('useTheme', () => {
  test(`should return default ${Theme.light}`, () => {
    const { result } = renderHook(useTheme);
    expect(result.current).toBe(Theme.light);
  });

  test(`should return ${Theme.dark}`, () => {
    const theme = { theme: Theme.dark };
    const { result } = renderHook(useTheme, { preloadedState: { theme } });
    expect(result.current).toBe(Theme.dark);
  });
});
