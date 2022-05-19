import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ModalTemplate from "./ModalTemplate";

let wrapper: any;
beforeEach(() => {
  const props = {
    title_name: "Add User",
    userModal: true,
    closeModal: jest.fn(),
    children: React.Children,
  };
  wrapper = shallow(<ModalTemplate {...props} />);
});

// snapshot testing
it("renders correctly Modaldata component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

//test Close button
it("test close button", () => {
  wrapper.find(".close_btn").simulate("click");
  expect(
    wrapper.props().children[2].props.children.props.onClick.mock
      .invocationCallOrder[0]
  ).toEqual(1);
});
