import { useLayoutEffect } from 'react';

import { useAppSelector } from '../store/hooks/useApp';
import selectCurrentTheme from '../store/slices/theme/selectors';

import type Theme from '../constants/Theme';

function useTheme(): Theme {
  const theme = useAppSelector(selectCurrentTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return theme;
}

export default useTheme;
