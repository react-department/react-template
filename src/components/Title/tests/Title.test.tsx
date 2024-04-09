import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import Title from '../Title';

describe('<Title />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Title text="Title" />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render component with title', () => {
    render(<Title text="Title" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
