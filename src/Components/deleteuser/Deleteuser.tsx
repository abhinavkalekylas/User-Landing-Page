import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteUser } from "../../apicall/service";
import "./Deleteuser.scss";
import { User } from "../../modalfunction/Modal";
import ModalTemplate from "../modaltemplate/ModalTemplate";

const DeleteUser = ({
  userData,
  deleteUserModal,
  closeModal,
}: {
  userData: User;
  deleteUserModal: boolean;
  closeModal: () => void;
}) => {
  const navigate = useNavigate();

  const [userForm, setUserForm] = useState(userData);

  useEffect(() => {
    setUserForm(userData);
  }, [userData]);

  const handleForm = async () => {
    try {
      await deleteUser(userForm);

      toast.success("User deleted successfully");
      closeModal();
      setTimeout(() => {
        navigate(0);
      }, 1500);
    } catch (error) {
      toast.error("Error: Can't delete this user");
      console.log("Error while doing delete user", error);
    }
  };

  return (
    <ModalTemplate
      title_name={"Delete User"}
      userModal={deleteUserModal}
      closeModal={closeModal}
    >
      <div className="deleteuser_container">
        <p className="delete_message">
          Are you sure to delete this user with id: {userForm.id} & name:{" "}
          {userForm.name}
        </p>
        <Button
          onClick={handleForm}
          variant="danger"
          className="deleteuser_btn"
        >
          delete user
        </Button>
        <Button onClick={closeModal} variant="primary" className="cancel_btn">
          cancel
        </Button>
      </div>
    </ModalTemplate>
  );
};

export default DeleteUser;
