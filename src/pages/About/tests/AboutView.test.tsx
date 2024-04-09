import { render } from '../../../../__tests__/test-utils';
import AboutView from '../AboutView';

describe('<AboutView />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<AboutView />);
    expect(asFragment()).toMatchSnapshot();
  });
});
