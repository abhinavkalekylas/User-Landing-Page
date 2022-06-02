import axios from "axios";
import { token } from "../../modalfunction/Modal";

const getUser = async () => {
  const res = await axios("https://gorest.co.in/public/v2/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export default getUser;
