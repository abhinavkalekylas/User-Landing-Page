import App from "./App";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';

it('renders correctly App component', () => {
  const wrapper = shallow(<App />)
  expect(toJson(wrapper)).toMatchSnapshot();
});

describe('check inner component renders', () => {
  it('check Navbar component', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toContainReact(<Navbar />);
  })
  
  it('check User componet', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toContainReact(<UserList />);
  })
})




