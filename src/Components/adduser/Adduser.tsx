import React from "react";
import { User, GenderType, StatusType } from "../../modalfunction/Modal";
import UserInfo from "../userinfo/UserInfo";

const AddUser = ({ closeModal }: { closeModal: () => void }) => {
  const userData: User = {
    id: 0,
    name: "",
    email: "",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  return (
    <>
      <UserInfo userData={userData} operation={"add"} closeModal={closeModal} />
    </>
  );
};

export default AddUser;
