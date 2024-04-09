import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import { testIdErrorMessage } from '../../../constants/TestId';
import TextInput from '../components/TextInput';

describe('<TextInput />', () => {
  test('should render component', () => {
    const { asFragment } = render(
      <TextInput
        name="username"
        label="test"
        register={jest.fn()}
        errors={undefined}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('check is error displayed', () => {
    render(
      <TextInput
        name="username"
        label="test"
        register={jest.fn()}
        errors={{
          type: 'test',
          message: 'test error',
        }}
      />,
    );
    expect(screen.getByTestId(testIdErrorMessage)).toBeInTheDocument();
  });
});
