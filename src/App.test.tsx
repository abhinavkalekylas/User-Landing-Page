import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { token } from "./modalfunction/Modal";
import App from "./App";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";
import { Provider } from "react-redux";
import store from "./redux/store";

it("renders correctly App component", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
