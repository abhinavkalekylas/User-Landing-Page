// import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("testing navbar component", () => {
  let wrapper: any;
//   beforeEach(() => {
//     wrapper = shallow(<Navbar />);
//   });

  test("render a title of User Landing Page", () => {
    expect(wrapper.find("a").text()).toBe("User Landing Page");
  });

  test("render a button with text Add User", () => {
    expect(wrapper.find(".btn").text()).toBe("Add User");
  });

  //Todo
  //check filter part for rendering partiular property
});
