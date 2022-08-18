import {
  render, screen, fireEvent, getByText,
} from '@testing-library/react';
import Calculator from './src/components/calculator';
import calculate from './src/logic/Calculate';

describe('<Calculator />', () => {
  test('output text', () => {
    render(<Calculator />);

    const seven = screen.getByText('7');
    fireEvent.click(seven);
    const two = screen.getByText('2');
    fireEvent.click(two);
    const plus = screen.getByText('+');
    fireEvent.click(plus);

    const result = calculate({ seven, two, plus });
    expect(result).toBe({ total: '1', next: null, operation: null });
  });
});