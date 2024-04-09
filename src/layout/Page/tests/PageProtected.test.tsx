import { screen, waitFor } from '@testing-library/react';

import { initServer } from '../../../../__tests__/mswServer';
import { render } from '../../../../__tests__/test-utils';
import { testIdLoader, testIdNavigate } from '../../../constants/TestId';
import auth from '../../../mocks/auth';
import PageProtected from '../PageProtected';

initServer();
describe('<PageProtected />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<PageProtected redirectUri="/login" />, { preloadedState: { auth } });
    await waitFor(() => expect(screen.queryByTestId(testIdLoader)).not.toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
  });
  test('should stay on page', async () => {
    render(<PageProtected redirectUri="/login" />, { preloadedState: { auth } });
    expect(screen.queryByTestId(testIdNavigate)).not.toBeInTheDocument();
  });
  test('should redirect to Login', async () => {
    render(<PageProtected redirectUri="/login" />);
    expect(screen.getByTestId(testIdNavigate)).toBeInTheDocument();
  });
});
