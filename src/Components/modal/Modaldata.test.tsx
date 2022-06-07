import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Modaldata from "./Modaldata";

let wrapper: any;
beforeEach(() => {
  const props = {
    addUserModal: true,
    closeModal: jest.fn(),
  };
  wrapper = shallow(<Modaldata {...props} />);
});

// snapshot testing
it("renders correctly Modaldata component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
