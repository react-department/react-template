import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppSelector } from '../../store/hooks/useApp';
import { useLoginMutation } from '../../store/slices/auth/apis/dummyAuth';
import { selectUserId } from '../../store/slices/auth/selectors';
import { loginSchema } from '../../utils/validators';
import LoginView from './LoginView';

import type { ReactElement } from 'react';
import type ILoginForm from './interfaces/ILoginForm';

function Login(): ReactElement {
  const navigate = useNavigate();
  const id = useAppSelector(selectUserId);
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  const onLoginSubmit = handleSubmit(async (credentials): Promise<void> => {
    login(credentials)
      .unwrap()
      .catch(() => {
        reset();
        navigate('/');
      });
  });
  return id ? (
    <Navigate to="/" />
  ) : (
    <LoginView
      onLoginSubmit={onLoginSubmit}
      errors={errors}
      register={register}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}

export default Login;
