import React from "react";
import "./Viewuser.scss";
import { User } from "../../modalfunction/Modal";
import ModalTemplate from "../modaltemplate/ModalTemplate";

const Viewuser = ({
  userData,
  viewUserModal,
  closeModal,
}: {
  userData: User;
  viewUserModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <ModalTemplate
      title_name={"View User"}
      userModal={viewUserModal}
      closeModal={closeModal}
    >
      <div className="viewuser_container">
        <p className="user_data">Name : {userData.name}</p>
        <p className="user_data">Email : {userData.email}</p>
        <p className="user_data">Gender : {userData.gender}</p>
        <p className="user_data">Current Status : {userData.status}</p>
      </div>
    </ModalTemplate>
  );
};

export default Viewuser;
