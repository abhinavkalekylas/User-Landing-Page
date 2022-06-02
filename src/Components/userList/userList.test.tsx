import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { token } from "../../modalfunction/Modal";
import UserList from "./userList";
import axios from "axios";

jest.mock("axios");

const data = [
  {
    id: 3218,
    name: "Harinarayan Abbott",
    email: "abbott_harinarayan@collins.info",
    gender: "male",
    status: "inactive",
  },
];

var MockAdapter = require("axios-mock-adapter");
var mock = new MockAdapter(axios);

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<UserList />);
});

afterEach(() => {
  jest.clearAllMocks();
});

// snapshot testing
it("renders correctly UserList component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("test axios", async () => {
  // Mock any GET request
  // arguments for reply are (status, data, headers)
  mock.onGet("https://gorest.co.in/public/v2/users/").reply(200, data, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });

  const res = await axios.get("https://gorest.co.in/public/v2/users/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  expect(res.data).toEqual(data);
});

// it("test axios", async () => {
//   var MockAdapter = require("axios-mock-adapter");

//   // This sets the mock adapter on the default instance
//   var mock = new MockAdapter(axios);

//   const data = [{
//       "id": 3218,
//       "name": "Harinarayan Abbott",
//       "email": "abbott_harinarayan@collins.info",
//       "gender": "male",
//       "status": "inactive"
//   }]

//   // Mock any GET request
//   // arguments for reply are (status, data, headers)
//   mock.onGet("https://gorest.co.in/public/v2/users/").reply(200,
//     data, {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//   });

//   let wrapper:any;
//   act(() => {
//     wrapper = shallow(<UserList />)
//   })

//   wrapper.update();
//   expect(toJson(wrapper)).toMatchSnapshot()
// })

it("On click edit user test", () => {
  //call props boolean
  wrapper.find(".edit_btn").simulate("click");
  expect(wrapper.find("EditUser").props().editUserModal).toBe(true);
});

it("On click view user test", () => {
  //call props boolean
  wrapper.find(".view_btn").simulate("click");
  expect(wrapper.find("ViewUser").props().viewUserModal).toBe(true);
});
