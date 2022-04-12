// import { shallow } from "enzyme";
import User from "./userList";
const axios = require("axios");
// import MockAdapter from "axios-mock-adapter";
// import { getAllUsers } from "../User";

let wrapper: any;
// beforeEach(() => {
//   wrapper = shallow(<User />);
// });

// Todo state
test("render the initial value of state `users`", () => {
  console.log(wrapper.find("users").value);
});

// fetching/axios test
// describe("test axios", () => {
//   it("returns user data", (done) => {
//     var mock = new MockAdapter(axios);
//     const data = { response: true };
//     const token =
//       "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";
//     mock
//       .onGet("https://gorest.co.in/public/v2/users", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .reply(200, data);

//     let response = {
//       id: 3077,
//       name: "Trilochan Khatri",
//       email: "khatri_trilochan@schimmel.biz",
//       gender: "male",
//       status: "active",
//     };
//     // expect(response).toContain(data);
//     console.log(data.text());
//     done();
//   });
// });
