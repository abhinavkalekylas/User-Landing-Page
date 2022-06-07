import React from "react";
import { User } from "../../../modalfunction/Modal";
import "../../userinfo/UserInfo";
import UserInfo from "../../userinfo/UserInfo";

const EdituserForm = ({
  userData,
  closeModal,
}: {
  userData: User;
  closeModal: () => void;
}) => {
  return (
    <>
      <UserInfo
        userData={userData}
        operation={"edit"}
        closeModal={closeModal}
      />
    </>
  );
};

export default EdituserForm;
