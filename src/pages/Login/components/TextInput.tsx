import { useId } from 'react';

import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

import type { ReactElement } from 'react';
import type ITextInput from '../interfaces/ITextInput';

import styles from '../sass/TextInput.module.scss';

/**
 * TextInput component for login form
 */
function TextInput({
  name, label, register, errors, type,
}: ITextInput): ReactElement {
  const id = useId();
  return (
    <>
      <label className={`${styles.loginLabel} ${errors ? styles.loginLabelError : ''}`} htmlFor={`${id}-${name}`}>
        <span>{label}</span>
        <input id={`${id}-${name}`} type={type} {...register(name)} />
      </label>
      {errors ? <ErrorMessage message={errors.message} /> : null}
    </>
  );
}

export default TextInput;
