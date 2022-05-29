import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";
import { GenderType, StatusType, token, User } from "../../modalfunction/Modal";
import EditUser from "./Edituser";

var MockAdapter = require("axios-mock-adapter");
const userData: User = {
  id: 0,
  name: "shivam sharma",
  email: "shivam@gmail.com",
  gender: GenderType.MALE,
  status: StatusType.ACTIVE,
};

let wrapper: any;
const props = {
  userData,
  editUserModal: true,
  closeModal: jest.fn(),
};
beforeEach(() => {
  wrapper = mount(
    <Router>
      <EditUser {...props} />
    </Router>
  );
});

// snapshot testing
it("renders correctly Edituser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("test username input", () => {
  const event = { target: { name: "name", value: "shivam" } };
  wrapper.find(".username").simulate("change", event);
  wrapper.update();
  expect(wrapper.find(".username").props().value).toEqual("shivam");
});

// test input tag for email
it("test email input", () => {
  const event = { target: { name: "email", value: "shivam@gmail.com" } };
  wrapper.find(".email").simulate("change", event);
  expect(wrapper.find(".email").props().value).toEqual("shivam@gmail.com");
});

// test select tag for gender
it("test gender select input", () => {
  wrapper.find(".gender").simulate("change", {
    target: { name: "gender", value: GenderType.FEMALE },
  });
  expect(wrapper.find(".gender").props().value).toBe(GenderType.FEMALE);
});

// test select tag for status
it("test status select input", () => {
  wrapper.find(".status").simulate("change", {
    target: { name: "status", value: StatusType.ACTIVE },
  });
  expect(wrapper.find(".status").props().value).toBe(StatusType.ACTIVE);
});

// Put request
it("put test", async () => {
  var mock = new MockAdapter(axios);

  const user_data: User = {
    id: 123,
    name: "Harinarayan Abbott",
    email: "abbott_harinarayan@collins.info",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  mock.onPost("https://gorest.co.in/public/v2/users/").reply(200, user_data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  const event1 = { target: { name: "email", value: "shivam@gmail.com" } };
  wrapper.find(".email").simulate("change", event1);
  expect(wrapper.find(".email").props().value).toEqual("shivam@gmail.com");

  const event = { target: { name: "name", value: "shivam" } };
  wrapper.find(".username").simulate("change", event);
  expect(wrapper.find(".username").props().value).toEqual("shivam");

  wrapper.find("Button.adduser_btn").simulate("click");
});

// submit button
it("should be able to submit the form", () => {
  const component = render(
    <Router>
      <EditUser {...props} />
    </Router>
  );
  const email = screen.getByPlaceholderText("Enter email id here");
  const button = screen.getAllByRole("button");
  userEvent.type(email, "abhi@gmail.com");
  userEvent.click(button[0]);
  const user = screen.getByDisplayValue("abhi@gmail.com");
  expect(user).toBeInTheDocument();
});
