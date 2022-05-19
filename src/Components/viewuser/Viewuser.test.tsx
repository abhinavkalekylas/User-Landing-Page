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
