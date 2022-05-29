import React from "react";
import { User } from "../../modalfunction/Modal";
import ModalTemplate from "../modaltemplate/ModalTemplate";
import EdituserForm from "./edituserform/EdituserForm";

const EditUser = ({
  userData,
  editUserModal,
  closeModal,
}: {
  userData: User;
  editUserModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <ModalTemplate
      title_name={"Edit User"}
      userModal={editUserModal}
      closeModal={closeModal}
    >
      <EdituserForm userData={userData} closeModal={closeModal} />
    </ModalTemplate>
  );
};

export default EditUser;
