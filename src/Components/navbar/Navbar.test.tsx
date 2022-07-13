import { shallow, mount } from "enzyme";
import {BrowserRouter as Router} from "react-router-dom"
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import { StatusType } from "../../modalfunction/Modal";
import store from "../../redux/store";
import Navbar from "./Navbar";

let wrapper: any;
beforeEach(() => {
  wrapper = mount(<Provider store={store}><Router><Navbar /></Router></Provider>);
});

afterEach(() => {
  jest.resetAllMocks();
});

it("check nav element", () => {
  expect(wrapper.find("nav")).toBeTruthy();
});

// snapshot testing
it("renders correctly App component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

// test for select tag for filter
it("test filter select input", () => {
  wrapper.find(".filter").at(1).simulate("change", {
    target: { name: "status", value: StatusType.ACTIVE },
  });
  wrapper.update();
  expect(wrapper.find(".filter").at(1).props().children.at(1).props.value).toBe(
    StatusType.ACTIVE
  );
});

it("On click add user test", () => {
  //call props boolean
  wrapper.find(".btn_add").at(0).simulate("click");

  wrapper.find(".btn_add").at(0).simulate("click");
  expect(expect(wrapper.find("Modaldata").props().addUserModal).toBe(true));
});
