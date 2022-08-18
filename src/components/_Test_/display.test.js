// import { render, screen, userEvent } from '@testing-library/react';
// import Calculator from '../calculator';

// describe('Test rendering and user interaction', () => {
//   it('renders correctly', () => {
//     const tree = render(<Calculator />);
//     expect(tree).toMatchSnapshot();
//   });

//   it('User interaction', () => {
//     render(<Calculator />);

//     userEvent.click(screen.getByRole('button', { name: '2' }));
//     userEvent.click(screen.getByRole('button', { name: '1' }));
//     userEvent.click(screen.getByRole('button', { name: '+' }));
//     userEvent.click(screen.getByRole('button', { name: '7' }));
//     userEvent.click(screen.getByRole('button', { name: '=' }));
//     expect(screen.handleClickEvent()).toHaveBeenCalledTimes(5);
//   });
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import displayBtn from '../mock/display';

test('click', () => {
  render(
    <displayBtn />,
  );

  userEvent.click(screen.getByText('Check'));
  expect(screen.getByLabelText('Check')).toBeChecked();
});
