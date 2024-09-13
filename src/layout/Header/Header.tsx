import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LinkButton from '../../components/LinkButton/LinkButton';
import Loader from '../../components/Loader/Loader';
import Subtitle from '../../components/Subtitle/Subtitle';
import {
  testIdHeader, testIdLoginButton, testIdLogoutButton, testIdToggleLanguageButton, testIdToggleThemeButton,
} from '../../constants/TestId';
import dummyAuth from '../../store/apis/dummy';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
import { useFetchUserQuery } from '../../store/slices/auth/apis/dummyAuth';
import { selectCurrentUser, selectUserId } from '../../store/slices/auth/selectors';
import { logout } from '../../store/slices/auth/slice';
import selectCurrentTheme from '../../store/slices/theme/selectors';
import { toggleTheme } from '../../store/slices/theme/slice';
import { selectLocale } from '../../store/slices/translates/selectors';
import { toggleLocale } from '../../store/slices/translates/slice';

import type { ReactElement } from 'react';

import styles from './sass/Header.module.scss';

/**
 * Main layout header component
 */
function Header(): ReactElement {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectUserId);
  const locale = useAppSelector(selectLocale);
  const theme = useAppSelector(selectCurrentTheme);
  const { data, isFetching } = useFetchUserQuery(id, {
    skip: !id,
    selectFromResult: (result) => ({ ...result, data: selectCurrentUser(result.data, id) }),
  });
  const onLogout = () => {
    dispatch(dummyAuth.util.resetApiState());
    dispatch(logout());
  };

  const onChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={styles.header} data-testid={testIdHeader}>
      <Subtitle text={t('common.welcomeMessage')} />
      <nav className={styles.headerNav}>
        <Link to="/" className={styles.headerNavLink}>
          { t('home.pageTitle') }
        </Link>
        <Link to="/about" className={styles.headerNavLink}>
          { t('about.pageTitle') }
        </Link>
      </nav>
      <div className={styles.toggleLanguage}>
        {isFetching ? (
          <Loader />
        ) : (
          <span>
            {data?.id ? (
              <LinkButton
                to="/login"
                onClick={onLogout}
                title={`${t('login.logout')}(${data.firstName})`}
                dataTestId={testIdLogoutButton}
              />
            ) : (
              <LinkButton
                to="/login"
                title={t('login.pageTitle')}
                dataTestId={testIdLoginButton}
              />
            )}
          </span>
        )}
        <button
          data-testid={testIdToggleThemeButton}
          type="button"
          onClick={onChangeTheme}
        >
          {t(`common.theme.${theme}`)}
        </button>

        <button
          data-testid={testIdToggleLanguageButton}
          type="button"
          onClick={() => dispatch(toggleLocale())}
        >
          {locale.toUpperCase()}
        </button>
      </div>
    </header>
  );
}

export default Header;
