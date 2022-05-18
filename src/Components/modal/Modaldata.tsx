import { Modal, Button } from "react-bootstrap";
import "./Modaldata.css";
import AddUserForm from "../adduser/Adduser";
import { Children } from "react";

const Modaldata = ({
  addUserModal,
  closeModal,
}: {
  addUserModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal show={addUserModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="title text-black">Add User</Modal.Title>
      </Modal.Header>
      <AddUserForm closeModal={closeModal} />
      <Modal.Footer>
        <Button className="close_btn" variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modaldata;
