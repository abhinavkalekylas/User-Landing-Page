import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { StatusType } from "../../helperfunction/helperfuntion";
import Navbar from "./Navbar";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Navbar />);
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
  wrapper.find(".filter").simulate("change", {
    target: { name: "status", value: StatusType.ACTIVE },
  });
  wrapper.update();
  expect(wrapper.find(".filter").props().children.at(1).props.value).toBe(
    StatusType.ACTIVE
  );
});
