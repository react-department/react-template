import { fireEvent, screen, waitFor } from '@testing-library/react';

import { initServer } from '../../../../__tests__/mswServer';
import { render } from '../../../../__tests__/test-utils';
import {
  testIdLoader,
  testIdLoginButton,
  testIdLogoutButton,
  testIdToggleLanguageButton,
} from '../../../constants/TestId';
import auth from '../../../mocks/auth';
import Header from '../Header';

initServer();

describe('<Header />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should contain needed elements', () => {
    render(<Header />);
    const title = screen.getByText('Try to build something great');
    const listLinks = screen.getAllByRole('link');
    const button = screen.getByTestId(testIdToggleLanguageButton);
    const loginLink = screen.getByText('Login');
    expect(title).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(listLinks).toHaveLength(3);
  });
  test('should change locale', async () => {
    render(<Header />);
    const button = screen.getByTestId(testIdToggleLanguageButton);
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toHaveTextContent('UA');
    });
  });
  test('should logout after click logout button', async () => {
    render(<Header />, { preloadedState: { auth } });
    await waitFor(() => expect(screen.queryByTestId(testIdLoader)).not.toBeInTheDocument());
    const button = screen.getByTestId(testIdLogoutButton);
    fireEvent.click(button);
    await waitFor(() => {
      const loginLink = screen.getByTestId(testIdLoginButton);
      expect(loginLink).toBeInTheDocument();
    });
  });
});
