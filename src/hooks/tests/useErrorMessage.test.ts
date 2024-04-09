import { renderHook } from '../../../__tests__/test-utils';
import i18n from '../../i18n';
import useErrorMessage from '../useErrorMessage';

import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

describe('useErrorMessage', () => {
  test('should return default error message', () => {
    const { result } = renderHook<string, FetchBaseQueryError | SerializedError | undefined>(useErrorMessage);
    expect(result.current).toBe(i18n.t('common.unknownError'));
  });
});
