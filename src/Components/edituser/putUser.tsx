import axios from "axios";
import { token, User } from "../../modalfunction/Modal";

const putUser = async (user: User) => {
  await axios(`https://gorest.co.in/public/v2/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(user),
  });
};

export default putUser;
