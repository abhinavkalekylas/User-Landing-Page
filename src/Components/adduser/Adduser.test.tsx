import { act } from "@testing-library/react";
import axios from "axios";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { GenderType, StatusType } from "../../helperfunction/helperfuntion";
import Adduser from "./Adduser";

let wrapper: any;
beforeEach(() => {
  wrapper = mount(<Adduser handleClose={jest.fn()} />);
});

// snapshot testing
it("renders correctly Adduser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test input tag for name
it("test username input", () => {
  const event = { target: { value: "shivam" } };
  wrapper.find(".username").simulate("change", event);
  wrapper.update();
  const expectedName = "shivam";
  expect(wrapper.find(".username").text()).toBe(expectedName);
});

// test input tag for email
it("test email input", () => {
  const event = { target: { value: "shivam@gmail.com" } };
  wrapper.find(".email").simulate("change", event);
  const expectedEmail = "shivam@gmail.com";
  expect(wrapper.find(".email").text()).toBe(expectedEmail);
});

// test select tag for gender
fit("test gender select input", () => {
  wrapper
    .find(".gender")
    .simulate("change", { target: { value: GenderType.FEMALE } });
  // console.log(wrapper.state());
  expect(wrapper.find(".gender").props().value).toBe(GenderType.FEMALE);
});

// test select tag for status
it("test status select input", () => {
  wrapper
    .find(".status")
    .simulate("change", { target: { value: StatusType.ACTIVE } });
  expect(wrapper.find(".status").props().value).toBe(StatusType.ACTIVE);
});

// Post
fit("post test", () => {
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
    wrapper = shallow(<Adduser handleClose={jest.fn()} />);
  });

  wrapper.update();
  expect(toJson(wrapper)).toMatchSnapshot();
});

// TODO submit button
