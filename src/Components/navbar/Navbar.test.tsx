import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Navbar from "./Navbar"

it('check nav element', () => {
  const wrapper = shallow(<Navbar />)
  expect(wrapper.find('nav')).toBeTruthy()
})


// snapshot testing
it('renders correctly App component', () => {
    const wrapper = shallow(<Navbar />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });
