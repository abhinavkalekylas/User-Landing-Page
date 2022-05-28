import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { token } from "./modalfunction/Modal";
import App from "./App";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";

it("renders correctly App component", () => {
  var mock = new MockAdapter(axios);
  const data = [
    {
      id: 3218,
      name: "Harinarayan Abbott",
      email: "abbott_harinarayan@collins.info",
      gender: "male",
      status: "inactive",
    },
  ];

  mock.onGet("https://gorest.co.in/public/v2/users/").reply(200, data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const wrapper = mount(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
