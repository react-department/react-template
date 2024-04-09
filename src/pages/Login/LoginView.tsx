import { useTranslation } from 'react-i18next';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import InputTypes from '../../constants/InputTypes';
import useErrorMessage from '../../hooks/useErrorMessage';
import TextInput from './components/TextInput';

import type { ReactElement } from 'react';
import type ILoginView from './interfaces/ILoginView';

import styles from './sass/LoginView.module.scss';

/**
 * Login page view
 */
function LoginView({
  onLoginSubmit,
  errors,
  register,
  isLoading,
  isError,
  error,
}: ILoginView): ReactElement {
  const { t } = useTranslation();
  const errorMessage = useErrorMessage(error);
  return (
    <div className={styles.loginForm}>
      <a href={`${process.env.REACT_APP_API}/users`} target="_blank" rel="noreferrer">
        { t('login.useLoginAndPasswordFromThisJson') }
      </a>
      <form onSubmit={onLoginSubmit}>
        <TextInput
          name="username"
          label={t('login.userName')}
          register={register}
          errors={errors.username}
        />
        <TextInput
          name="password"
          label={t('login.password')}
          register={register}
          errors={errors.password}
          type={InputTypes.Password}
        />
        <input type="submit" disabled={isLoading || Object.keys(errors).length > 0} />
      </form>
      {isError ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
}

export default LoginView;
