import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import { testIdErrorMessage } from '../../../constants/TestId';
import LoginView from '../LoginView';

describe('<LoginView />', () => {
  test('should render component', async () => {
    const { asFragment } = render(
      <LoginView
        onLoginSubmit={() => {}}
        errors={{}}
        register={jest.fn()}
        isLoading={false}
        isError={false}
        error={{}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('check is submit button disabled', () => {
    render(
      <LoginView
        onLoginSubmit={() => {}}
        errors={{}}
        register={jest.fn()}
        isLoading
        isError={false}
        error={{}}
      />,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
  test('check is error displayed', () => {
    render(
      <LoginView
        onLoginSubmit={() => {}}
        errors={{}}
        register={jest.fn()}
        isLoading={false}
        isError
        error={{}}
      />,
    );
    expect(screen.getByTestId(testIdErrorMessage)).toBeInTheDocument();
  });
});
