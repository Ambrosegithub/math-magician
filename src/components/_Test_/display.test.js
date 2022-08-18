import { render } from '@testing-library/react';
import Calculator from '../calculator';

describe('Test rendering and user interaction', () => {
  it('renders correctly', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
