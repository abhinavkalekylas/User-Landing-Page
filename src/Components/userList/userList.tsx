import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import "./userList.css";
import Loader from "../loader/Loader";
import Viewuser from "../viewuser/Viewuser";

const UserList = () => {
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
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [userput, setUserput] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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

      // Contains all users data
      const data: {
        id: number;
        name: string;
        email: string;
        gender: string;
        status: string;
      }[] = res.data;

      setLoad(false);

      // Update users
      setUsers(data);
    } catch (error) {
      setError(true);
      console.log("Error while getting all users ", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      {error ? (
        <h2>This page is under develop. We will sure to give an update</h2>
      ) : load ? (
        <Loader />
      ) : (
        <table className="table table-light">
          <thead>
            <tr>
              <th className="title_name" scope="col">
                Name
              </th>
              <th scope="col">Email</th>
              <th className="action" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          {users.length === 0 ? (
            <h1>List is empty</h1>
          ) : (
            <tbody>
              {users.map((user) => {
                return (
                  <tr className="table_row" key={String(user.id)}>
                    <td className="user_name">{user.name}</td>
                    <td className="user_email">{user.email}</td>
                    <td className="action_buttons">
                      <Button
                        onClick={() => {
                          handleShow();
                          setUserput(user);
                        }}
                        color="info"
                        className="view-button text-white"
                      >
                        View User
                      </Button>
                      <Viewuser
                        userData={userput}
                        showModal={showModal}
                        handleClose={handleClose}
                      />
                      <Button color="primary" className="edit-button">
                        Edit User
                      </Button>
                      <Button color="danger" className="delete-button">
                        Delete User
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      )}
    </div>
  );
};

export default UserList;
