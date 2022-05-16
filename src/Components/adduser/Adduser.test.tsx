import { BrowserRouter as Router } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { GenderType, StatusType } from "../../helperfunction/helperfuntion";
import Adduser from "./Adduser";
import userEvent from "@testing-library/user-event";

let wrapper: any;
beforeEach(() => {
  const props = {
    handleClose: jest.fn(),
  };
  wrapper = mount(
    <Router>
      <Adduser {...props}></Adduser>
    </Router>
  );
});

// snapshot testing
it("renders correctly Adduser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test input tag for name
it("test username input", () => {
  const event = { target: { name: "name", value: "shivam" } };
  // console.log(wrapper.debug());
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
  // console.log(wrapper.state());
  expect(wrapper.find(".gender").props().value).toBe(GenderType.FEMALE);
});

// test select tag for status
it("test status select input", () => {
  wrapper.find(".status").simulate("change", {
    target: { name: "status", value: StatusType.ACTIVE },
  });
  expect(wrapper.find(".status").props().value).toBe(StatusType.ACTIVE);
});

// Post
it("post test", () => {
  var MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);

  const data = {
    name: "Harinarayan Abbott",
    email: "abbott_harinarayan@collins.info",
    gender: "male",
    status: "active",
  };

  const token =
    "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";

  mock.onPost("https://gorest.co.in/public/v2/users/").reply(200, data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  let wrapper: any;
  act(() => {
    wrapper = shallow(
      <Router>
        <Adduser handleClose={jest.fn()} />
      </Router>
    );
  });

  wrapper.update();
  expect(toJson(wrapper)).toMatchSnapshot();
});

// submit button
it("should be able to submit the form", () => {
  const component = render(
    <Router>
      <Adduser handleClose={jest.fn()} />
    </Router>
  );
  const email = screen.getByPlaceholderText("Enter email id here");
  const button = screen.getAllByRole("button");
  userEvent.type(email, "abhi@gmail.com");
  userEvent.click(button[0]);
  const user = screen.getByDisplayValue("abhi@gmail.com");
  expect(user).toBeInTheDocument();
});
