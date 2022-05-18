import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { GenderType, StatusType, User } from "../../modalfunction/Modal";
import Viewuser from "./Viewuser";

const userData: User = {
  id: 0,
  name: "shivam sharma",
  email: "shivam@gmail.com",
  gender: GenderType.MALE,
  status: StatusType.ACTIVE,
};

const props = {
  userData,
  viewUserModal: true,
  closeModal: jest.fn(),
};

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Viewuser {...props} />);
});

it("renders correctly Viewuser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test user information
it("view user check test", () => {
  expect(wrapper.find(".title").exists()).toEqual(true);
});

//test Close button
it("test close button", () => {
  wrapper.find(".close_btn").simulate("click");
  expect(
    wrapper.props().children[2].props.children.props.onClick.mock
      .invocationCallOrder[0]
  ).toEqual(1);
});
