import { Modal, Button } from "react-bootstrap";
import "./Viewuser.css";

const Viewuser = ({
  userData,
  showModal,
  handleClose,
}: {
  userData: any;
  showModal: boolean;
  handleClose: any;
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Name : {userData.name}</h4>
        <h4>Email : {userData.email}</h4>
        <h4>Gender : {userData.gender}</h4>
        <h4>Current Status : {userData.status}</h4>
      </Modal.Body>

      <Modal.Footer>
        <Button color="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Viewuser;
