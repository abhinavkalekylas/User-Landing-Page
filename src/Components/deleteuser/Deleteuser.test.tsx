import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";
import { GenderType, StatusType, User } from "../../modalfunction/Modal";
import DeleteUser from "./Deleteuser";

const userData: User = {
  id: 0,
  name: "shivam sharma",
  email: "shivam@gmail.com",
  gender: GenderType.MALE,
  status: StatusType.ACTIVE,
};

jest.mock("axios");

let wrapper: any;
const props = {
  userData,
  deleteUserModal: true,
  closeModal: jest.fn(),
};
beforeEach(() => {
  wrapper = mount(
    <Router>
      <DeleteUser {...props} />
    </Router>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

// snapshot testing
it("renders correctly Deleteuser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

fit("delete user button click", () => {
  wrapper.find(".deleteuser_btn").at(0).simulate("click");
  expect(
    wrapper.props().children.props.closeModal.mock.invocationCallOrder[0]
  ).toEqual(1);
});

it("cancel button click", () => {
  wrapper.find("Button").at(1).simulate("click");
  expect(
    wrapper.find("Button").at(1).props().onClick.mock.invocationCallOrder[0]
  ).toEqual(1);
});
