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

  const props = {
    userData,
    showModal: true,
    handleClose: jest.fn(),
  };
  const wrapper = shallow(<Viewuser {...props} showModal={false} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

// Todo Close button
fit("test close button", () => {
  // const mockCallBack = jest.fn();
  // wrapper.find(".close_btn").simulate("click");
  // expect(mockCallBack.mock.calls.length).toEqual(1);
});
