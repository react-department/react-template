import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type ILoginForm from './ILoginForm';

interface ILoginView {
  onLoginSubmit: () => void,
  errors: FieldErrors<ILoginForm>,
  register: UseFormRegister<ILoginForm>,
  isLoading: boolean,
  isError: boolean,
  error: FetchBaseQueryError | SerializedError | undefined,
}

export default ILoginView;
