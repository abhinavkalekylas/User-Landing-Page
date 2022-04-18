import App from "./App";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';

it('renders correctly App component', () => {
  const wrapper = mount(<App />)
  expect(toJson(wrapper)).toMatchSnapshot();
});




