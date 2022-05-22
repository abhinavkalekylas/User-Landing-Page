import React from "react";
import AddUserForm from "../adduser/Adduser";
import ModalTemplate from "../modaltemplate/ModalTemplate";

const Modaldata = ({
  addUserModal,
  closeModal,
}: {
  addUserModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <ModalTemplate
      title_name={"Add User"}
      userModal={addUserModal}
      closeModal={closeModal}
    >
      <AddUserForm closeModal={closeModal} />
    </ModalTemplate>
  );
};

export default Modaldata;
