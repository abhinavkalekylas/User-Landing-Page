import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GenderType, StatusType, User } from "../../modalfunction/Modal";
import store from "../../redux/store";
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
    <Provider store={store}>
    <Router>
      <DeleteUser {...props} />
    </Router>
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

// snapshot testing
it("renders correctly Deleteuser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// TODO
it("delete user button click", () => {
  // console.log(wrapper.props().children.props)
  // console.log(wrapper.find(".deleteuser_btn").at(0).debug())

  wrapper.find(".deleteuser_btn").at(0).simulate("click");
  // console.log(wrapper.debug())
  // console.log(wrapper.props().children.props.children.props.closeModal.mock)
  // expect(
  //   wrapper.props().children.props.closeModal.mock.invocationCallOrder[0]
  // ).toEqual(1);
});

it("cancel button click", () => {
  wrapper.find("Button").at(1).simulate("click");
  expect(
    wrapper.find("Button").at(1).props().onClick.mock.invocationCallOrder[0]
  ).toEqual(1);
});
