// import renderer from "react-test-renderer"
const axios = require("axios");
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';
import User from "./userList";

// snapshot testing
it('renders correctly App component', () => {
  const wrapper = shallow(<User />)
  expect(toJson(wrapper)).toMatchSnapshot();
});


// test user state
it('user state', () => {
  const wrapper = mount(<User />); 
  expect(wrapper).toHaveState([{
    id: 0,
  name: "",
  email: "",
  gender: "",
  status: "",
  }]);
})

// test user fetch data
it('fetch user data', async () => {
  (async () => {
    const token =
      "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";
    const res = await axios("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    expect(res.data).toMatchSnapshot()
  })();
})



// jest.mock("axios")
// const res = [{
  
//     "id": 3218,
//     "name": "Harinarayan Abbott",
//     "email": "abbott_harinarayan@collins.info",
//     "gender": "male",
//     "status": "inactive" 
// }]

// it("", async () => {
//   axios.get.mockImplementationOnce(() => Promise.resolve({ data: res }))

//   const tree = renderer.create(<User />);
//   await Promise.resolve();
//   expect(tree.toJSON()).toMatchSnapshot()
// })



