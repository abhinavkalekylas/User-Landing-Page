import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import axios from "axios";

const User = () => {
  // All users state
  const [users, setUsers] = useState([
    {
        id: 0,
      name: "",
      email: "",
      gender: "",
      status: "",
    },
  ]);


  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const token =
        "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";
      const res = await axios("https://gorest.co.in/public/v2/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      //   console.log(res);

      // Contains all users data
      const data: {id:number,name:string,email:string,gender:string,status:string}[] = Array.from(res.data);
      //   console.log(data);

      // Update users
      setUsers(data);
    } catch (error) {
      console.log("Error while getting all users ", error);
    }
  };

  return (
    <div className="container">
      <table style={{ width: "100%" }} className="table table-light mt-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th style={{ width: "30%" }} scope="col">
              Actions
            </th>
          </tr>
        </thead>
        {users.length === 0 ? (
          <h1>List is empty</h1>
        ) : (
          users.map((user) => {
            return (
              <tbody key={String(user.id)}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button color="info" className="mx-2 mt-1 text-white">
                      View User
                    </Button>
                    <Button color="primary" className="mx-2 mt-1">
                      Edit User
                    </Button>
                    <Button color="danger" className="mx-2 mt-1">
                      Delete User
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default User;
