import type { FieldError, UseFormRegister } from 'react-hook-form';
import type InputTypes from '../../../constants/InputTypes';
import type ILoginForm from './ILoginForm';

interface ITextInput {
  /**
   * name of the input
   */
  name: keyof ILoginForm;
  /**
   * label of the input
   */
  label: string;
  /**
   * register function from react-hook-form
   */
  register: UseFormRegister<ILoginForm>;
  /**
   * errors from react-hook-form
   */
  errors: FieldError | undefined;
  /**
   * type of the input
   */
  type?: InputTypes;
}

export default ITextInput;
