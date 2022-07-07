import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "./userList.scss";
import {
  User,
  GenderType,
  StatusType,
  chooseModalType,
} from "../../modalfunction/Modal";
import Loader from "../loader/Loader";
import Viewuser from "../viewuser/Viewuser";
import Edituser from "../edituser/Edituser";
import { toast } from "react-toastify";
import { getUser } from "../../apicall/service";
import Deleteuser from "../deleteuser/Deleteuser";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../redux/action/todo";

// import { connect } from "react-redux";

const UserList = () => {
  const allUsers = useSelector((state: any) => state.allUserInfo.users);
  console.log(allUsers);
  const dispatch = useDispatch();

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
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [updateUser, setUpdateUser] = useState(userData);

  const openModal = (modalType: number) => {
    // modalType === chooseModalType.view
    //   ? setViewUserModal(true)
    //   : setEditUserModal(true);

    switch (modalType) {
      case chooseModalType.view:
        setViewUserModal(true);
        break;
      case chooseModalType.edit:
        setEditUserModal(true);
        break;
      case chooseModalType.delete:
        setDeleteUserModal(true);
        break;
      default:
        return;
    }
  };

  const closeModal = () => {
    setViewUserModal(false);
    setEditUserModal(false);
    setDeleteUserModal(false);
  };

  const getAllUsers = async () => {
    try {
      const data: [User] = await getUser();

      setLoad(false);

      // Update users
      setUsers(data);

      dispatch(fetchAllUsers(data));
      // fetchAllUsers(data);
    } catch (error) {
      setError(true);
      toast.error("Error while getting all users");
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
              {/* {users.map((user) => {
                return (
                  <tr className="table_row" key={String(user.id)}>
                    <td className="user_name">{user.name}</td>
                    <td className="user_email">{user.email}</td>
                    <td className="action_buttons">
                      <Button
                        onClick={() => {
                          openModal(chooseModalType.view);
                          setUpdateUser(user);
                        }}
                        color="info"
                        className="view_btn view-button text-white"
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
                          openModal(chooseModalType.edit);
                          setUpdateUser(user);
                        }}
                        color="primary"
                        className="edit_btn edit-button"
                      >
                        Edit User
                      </Button>
                      <Edituser
                        userData={updateUser}
                        editUserModal={editUserModal}
                        closeModal={closeModal}
                      />
                      <Button
                        onClick={() => {
                          openModal(chooseModalType.delete);
                          setUpdateUser(user);
                        }}
                        color="danger"
                        className="delete_btn delete-button"
                      >
                        Delete User
                      </Button>
                      <Deleteuser
                        userData={updateUser}
                        deleteUserModal={deleteUserModal}
                        closeModal={closeModal}
                      />
                    </td>
                  </tr>
                );
              })} */}

              {allUsers.map((user: any) => {
                return (
                  <tr className="table_row" key={String(user.id)}>
                    <td className="user_name">{user.name}</td>
                    <td className="user_email">{user.email}</td>
                    <td className="action_buttons">
                      <Button
                        onClick={() => {
                          openModal(chooseModalType.view);
                          setUpdateUser(user);
                        }}
                        color="info"
                        className="view_btn view-button text-white"
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
                          openModal(chooseModalType.edit);
                          setUpdateUser(user);
                        }}
                        color="primary"
                        className="edit_btn edit-button"
                      >
                        Edit User
                      </Button>
                      <Edituser
                        userData={updateUser}
                        editUserModal={editUserModal}
                        closeModal={closeModal}
                      />
                      <Button
                        onClick={() => {
                          openModal(chooseModalType.delete);
                          setUpdateUser(user);
                        }}
                        color="danger"
                        className="delete_btn delete-button"
                      >
                        Delete User
                      </Button>
                      <Deleteuser
                        userData={updateUser}
                        deleteUserModal={deleteUserModal}
                        closeModal={closeModal}
                      />
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

// const mapStateToProps = (state: any) => ({
//   allUsers: state.allUserInfo.users,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchAllUsers: (user: any) => {
//     dispatch(fetchAllUsers(user));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
