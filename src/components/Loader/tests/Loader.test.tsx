import { render } from '../../../../__tests__/test-utils';
import Loader from '../Loader';

describe('<Loader />', () => {
  test('should render component', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
