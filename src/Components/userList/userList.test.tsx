import axios from "axios";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { act } from "react-dom/test-utils";
import UserList from "./userList";

// snapshot testing
it("renders correctly UserList component", () => {
  const wrapper = shallow(<UserList />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("test axios", async () => {
  var MockAdapter = require("axios-mock-adapter");

  // This sets the mock adapter on the default instance
  var mock = new MockAdapter(axios);

  const data = [
    {
      id: 3218,
      name: "Harinarayan Abbott",
      email: "abbott_harinarayan@collins.info",
      gender: "male",
      status: "inactive",
    },
  ];

  const token =
    "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";

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

// fit("test axios", async () => {
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

//   const token =
//     "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";

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
