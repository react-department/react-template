import { render } from '../../../../__tests__/test-utils';
import Home from '../Home';

describe('<Home />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
