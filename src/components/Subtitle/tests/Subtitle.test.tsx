import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import Subtitle from '../Subtitle';

describe('<Subtitle />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Subtitle text="Subtitle" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render component with title', () => {
    render(<Subtitle text="Subtitle" />);
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });
});
