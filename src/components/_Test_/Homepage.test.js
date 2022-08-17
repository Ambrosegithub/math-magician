import renderer from 'react-test-renderer';
import Home from '../Homepage'

it('Home render correctly', ()=>{
 const tree = renderer.create(<Home />).toJSON()
 expect(tree).toMatchSnapshot();
})