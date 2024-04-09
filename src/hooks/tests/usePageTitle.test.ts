import { renderHook } from '../../../__tests__/test-utils';
import i18n from '../../i18n';
import usePageTitle from '../usePageTitle';

describe('usePageTitle', () => {
  test('should return default page title', () => {
    const { result } = renderHook(usePageTitle);
    expect(result.current).toBe(i18n.t('home.pageTitle'));
  });
});
