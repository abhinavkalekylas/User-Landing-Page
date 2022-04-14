import Navbar from "./Navbar"
import { shallow, mount } from "enzyme";

// describe("testing navbar component", () => {
//   let wrapper: any;
//   beforeEach(() => {
//     wrapper = shallow(<Navbar />);
//   });

  // test("render a title of User Landing Page", () => {
  //   expect(wrapper.find("a").text()).toBe("User Landing Page");
  // });

  // test("render a button with text Add User", () => {
  //   expect(wrapper.find(".btn").text()).toBe("Add User");
  // });

  //Todo
  //check filter part for rendering partiular property
// });


it('check nav element', () => {
  const wrapper = shallow(<Navbar />)
  expect(wrapper.find('nav')).toBeTruthy()
})

// User Landing Page
it('check title of the page', () => {
  const wrapper = shallow(<Navbar />)
  // expect(wrapper.find('.navbar-brand')).toHaveTextContent('User')
})

// form
it('check nav element', () => {
  const wrapper = shallow(<Navbar />)
  expect(wrapper.find('form')).toBeTruthy()
})
