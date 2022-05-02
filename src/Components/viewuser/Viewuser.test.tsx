import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import {
  GenderType,
  StatusType,
  User,
} from "../../helperfunction/helperfuntion";
import Viewuser from "./Viewuser";

it("renders correctly Viewuser component", () => {
  const userData: User = {
    id: 0,
    name: "shivam sharma",
    email: "shivam@gmail.com",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  const wrapper = shallow(
    <Viewuser userData={userData} showModal={true} handleClose={jest.fn()} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

// Todo Close button
it("test close button", () => {
  // const mockCallBack = jest.fn();
  // wrapper.find(".close_btn").simulate("click");
  // expect(mockCallBack.mock.calls.length).toEqual(1);
});
