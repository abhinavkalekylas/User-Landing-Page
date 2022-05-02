import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { GenderType, StatusType } from "../../helperfunction/helperfuntion";
import Adduser from "./Adduser";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Adduser handleClose={jest.fn()} />);
});

// snapshot testing
it("renders correctly Adduser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test input tag for name
it("test username input", () => {
  const event = { target: { value: "shivam" } };
  wrapper.find(".username").simulate("change", event);
  const expectedEmail = "shivam";
  expect(wrapper.find(".username").text()).toBe(expectedEmail);
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
  expect(wrapper.find(".gender").props().value).toBe(GenderType.FEMALE);
});

// test select tag for status
it("test status select input", () => {
  wrapper
    .find(".status")
    .simulate("change", { target: { value: StatusType.ACTIVE } });
  expect(wrapper.find(".status").props().value).toBe(StatusType.ACTIVE);
});

// TODO submit button
