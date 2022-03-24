import { render, screen } from "@testing-library/react";
import App from "./App";
import Navbar from "./Components/Navbar";
import { shallow } from "enzyme";

describe("User Landing Main Page", () => {
  test("check title of the page", () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());

    //Todo
    //check all component is there or not
    // expect(wrapper.find("<Navbar />").text()).toBe("<Navbar />");
  });
});
