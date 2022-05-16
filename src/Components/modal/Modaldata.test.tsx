import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Modaldata from "./Modaldata";
import { Button } from "react-bootstrap";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

let wrapper: any;
beforeEach(() => {
  const props = {
    showModal: true,
    handleClose: jest.fn(),
  };
  wrapper = shallow(<Modaldata {...props} />);
});

// snapshot testing
it("renders correctly Modaldata component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

//test Close button
it("test close button", () => {
  wrapper.find(".close_btn").simulate("click");
  wrapper.update();
  expect(wrapper.find(".close_btn").props().active).toEqual(false);
});

// test for rendering modal
it("renders modal when showModal is true", async () => {
  wrapper.update();
  expect(wrapper.find(".title").exists()).toEqual(true);
  expect(wrapper.text()).toContain("Add User");
});
