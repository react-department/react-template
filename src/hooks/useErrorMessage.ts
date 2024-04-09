import { useTranslation } from 'react-i18next';

import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function useErrorMessage(error: FetchBaseQueryError | SerializedError | undefined): string {
  const { t } = useTranslation();
  let errorMessage = t('common.unknownError');
  if (
    error
    && 'data' in error && typeof error.data === 'object' && error.data
    && 'message' in error.data && typeof error.data.message === 'string'
  ) {
    errorMessage = error.data.message;
  }
  return errorMessage;
}

export default useErrorMessage;
