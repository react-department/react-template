import { screen } from '@testing-library/react';

import { render } from '../../../../__tests__/test-utils';
import LinkButton from '../LinkButton';

describe('<LinkButton />', () => {
  test('should render component', () => {
    const { asFragment } = render(<LinkButton to="/" title="Link title" onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('check if component has title', () => {
    render(<LinkButton to="/" title="Link title" onClick={() => {}} />);
    expect(screen.getByText('Link title')).toBeInTheDocument();
  });
});
