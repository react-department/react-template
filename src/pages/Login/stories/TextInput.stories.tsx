import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InputTypes from '../../../constants/InputTypes';
import { loginSchema } from '../../../utils/validators';
import TextInput from '../components/TextInput';

import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';
import type ILoginForm from '../interfaces/ILoginForm';
import type ITextInput from '../interfaces/ITextInput';

import styles from '../sass/TextInput.module.scss';

const meta: Meta<typeof TextInput> = {
  title: 'Pages/Login/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    register: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={styles.storiesWrapper}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

function TextInputComponent({
  name, label, errors, type,
}: ITextInput): ReactElement {
  const { register } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });
  return (
    <TextInput
      name={name}
      label={label}
      register={register}
      errors={errors}
      type={type}
    />
  );
}

export const TextInputStory: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'username',
    label: 'Name',
    errors: undefined,
    type: InputTypes.Text,
  },
};

export const TextInputWithError: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'username',
    label: 'Name',
    errors: { message: 'Name is required!', type: 'required' },
    type: InputTypes.Text,
  },
};

export const TextInputPassword: Story = {
  render: (args) => <TextInputComponent {...args} />,
  args: {
    name: 'password',
    label: 'Password',
    errors: undefined,
    type: InputTypes.Password,
  },
};
