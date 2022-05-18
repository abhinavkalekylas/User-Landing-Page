import { Modal, Button } from "react-bootstrap";
import "./Viewuser.css";
import { User } from "../../modalfunction/Modal";

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
    <Modal className="modal_container" show={viewUserModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="title">User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="user_data">Name : {userData.name}</p>
        <p className="user_data">Email : {userData.email}</p>
        <p className="user_data">Gender : {userData.gender}</p>
        <p className="user_data">Current Status : {userData.status}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className="close_btn" color="primary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Viewuser;
