import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";

it("renders correctly App component", () => {
  const wrapper = mount(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
