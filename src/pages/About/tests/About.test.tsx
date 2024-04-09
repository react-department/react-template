import { render } from '../../../../__tests__/test-utils';
import About from '../About';

describe('<About />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
