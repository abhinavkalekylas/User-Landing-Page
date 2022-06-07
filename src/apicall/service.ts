import axios from "axios";
import { token, User } from "../modalfunction/Modal";

export const createUser = async (user: User) => {
  await axios("https://gorest.co.in/public/v2/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(user),
  });
};

export const updateUser = async (user: User) => {
    await axios(`https://gorest.co.in/public/v2/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(user),
    });
};

export const getUser = async () => {
    const res = await axios("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
};

export const deleteUser = async (user: User) => {
  await axios(`https://gorest.co.in/public/v2/users/${user.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

