import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import toJson from "enzyme-to-json";
import Modaldata from "./Modaldata";
import { Button } from "react-bootstrap";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Modaldata showModal={true} handleClose={jest.fn()} />);
});

// snapshot testing
it("renders correctly Modaldata component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// Todo Close button
it("test close button", () => {
  // const mockCallBack = jest.fn();
  // wrapper.find(".close_btn").simulate("click");
  // expect(mockCallBack.mock.calls.length).toEqual(1);
});

// test for rendering modal
it("renders modal when showModal is true", async () => {
  //   wrapper.update();
  //   expect(wrapper.find(".title").exists()).toEqual(true);
});
