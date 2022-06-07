import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";
import { GenderType, StatusType, User } from "../../modalfunction/Modal";
import Edituser from "./Edituser";

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
  wrapper = shallow(
    <Router>
      <Edituser {...props} />
    </Router>
  );
});

// snapshot testing
it("renders correctly Edituser component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
