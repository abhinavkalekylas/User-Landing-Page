import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Modaldata from "./Modaldata";
import { Button } from "react-bootstrap";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

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
