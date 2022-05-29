import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import "./userList.scss";
import {
  User,
  GenderType,
  StatusType,
  token,
  chooseModalType,
} from "../../modalfunction/Modal";
import Loader from "../loader/Loader";
import Viewuser from "../viewuser/Viewuser";
import Edituser from "../edituser/Edituser";

const UserList = () => {
  const userData: User = {
    id: 0,
    name: "",
    email: "",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  // All users state
  const [users, setUsers] = useState([userData]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  const [viewUserModal, setViewUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [updateUser, setUpdateUser] = useState(userData);

  const openModal = (modalType: number) => {
    if (modalType === chooseModalType.viewModal) setViewUserModal(true);
    else if (modalType === chooseModalType.editModal) setEditUserModal(true);
  };

  const closeModal = () => {
    setViewUserModal(false);
    setEditUserModal(false);
  };

  const getAllUsers = async () => {
    try {
      const res = await axios("https://gorest.co.in/public/v2/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Contains all users data
      const data: [User] = res.data;

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
    <div className="userlist_container">
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
                          openModal(chooseModalType.viewModal);
                          setUpdateUser(user);
                        }}
                        color="info"
                        className="view-button text-white"
                      >
                        View User
                      </Button>
                      <Viewuser
                        userData={updateUser}
                        viewUserModal={viewUserModal}
                        closeModal={closeModal}
                      />
                      <Button
                        onClick={() => {
                          openModal(chooseModalType.editModal);
                          setUpdateUser(user);
                        }}
                        color="primary"
                        className="edit-button"
                      >
                        Edit User
                      </Button>
                      <Edituser
                        userData={updateUser}
                        editUserModal={editUserModal}
                        closeModal={closeModal}
                      />
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
