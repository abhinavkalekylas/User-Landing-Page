import axios from "axios";
import { token, User } from "../../modalfunction/Modal";

const postUser = async (user: User) => {
  await axios("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(user),
  });
};

export default postUser;
