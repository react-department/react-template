import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import ErrorMessage from '../ErrorMessage';

describe('<ErrorMessage />', () => {
  test('should render component', () => {
    const { asFragment } = render(<ErrorMessage message="message" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render component with message', () => {
    render(<ErrorMessage message="message" />);
    expect(screen.getByText('message')).toBeInTheDocument();
  });
});
