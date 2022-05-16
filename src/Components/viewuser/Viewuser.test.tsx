import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import {
  GenderType,
  StatusType,
  User,
} from "../../helperfunction/helperfuntion";
import Viewuser from "./Viewuser";

let wrapper: any;
beforeEach(() => {
  const userData: User = {
    id: 0,
    name: "shivam sharma",
    email: "shivam@gmail.com",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  const props = {
    userData,
    showModal: true,
    handleClose: jest.fn(),
  };
  wrapper = shallow(<Viewuser {...props} />);
});

it("renders correctly Viewuser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test for rendering modal
it("renders modal when showModal is true", async () => {
  wrapper.update();
  expect(wrapper.find(".title").exists()).toEqual(true);
  expect(wrapper.text()).toContain("User Details");
});

// test close button
fit("test close button", () => {
  const userData: User = {
    id: 0,
    name: "shivam sharma",
    email: "shivam@gmail.com",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  const props = {
    userData,
    showModal: true,
    handleClose: jest.fn(),
  };
  const component = render(<Viewuser {...props} />);
  const button = screen.getAllByRole("button");
  userEvent.click(button[0]);
  expect(screen.getByDisplayValue("User Details")).toBeInTheDocument();
  // wrapper.update();
  // expect(wrapper.find(".title").exists()).toEqual(false);
});
