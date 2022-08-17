import renderer from 'react-test-renderer';
import Navbar from '../Navbar'

it('Navbar render correctly', ()=>{
 const tree = renderer.create(<Navbar />).toJSON()
 expect(tree).toMatchSnapshot();
})
