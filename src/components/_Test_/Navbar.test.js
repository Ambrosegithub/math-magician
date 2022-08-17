import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

it('Navbar render correctly', () => {
  render(
    <Router>
      const tree = renderer.create(
      <Navbar />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    </Router>,
  );
});
