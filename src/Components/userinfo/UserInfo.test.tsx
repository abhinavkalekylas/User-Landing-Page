import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { GenderType, StatusType, User } from "../../modalfunction/Modal";
import UserInfo from "./UserInfo";

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
  operation: "add",
  closeModal: jest.fn(),
};
beforeEach(() => {
  wrapper = shallow(
    <Router>
      <UserInfo {...props} />
    </Router>
  );
});

// snapshot testing
fit("renders correctly UserInfo component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
