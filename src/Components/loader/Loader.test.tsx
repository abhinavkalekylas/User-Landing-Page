import toJson from 'enzyme-to-json';
import { shallow } from "enzyme";
import Loader from "./Loader"

// snapshot testing
it('renders correctly App component', () => {
    const wrapper = shallow(<Loader />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });