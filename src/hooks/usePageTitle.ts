import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function usePageTitle(): string {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pageName: string = pathname.split('/')[1].toLowerCase() || 'home';
  return t(`${pageName}.pageTitle`);
}

export default usePageTitle;
