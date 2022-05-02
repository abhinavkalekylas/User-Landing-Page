import { Modal, Button } from "react-bootstrap";
import "./Viewuser.css";
import { User } from "../../helperfunction/helperfuntion";

const Viewuser = ({
  userData,
  showModal,
  handleClose,
}: {
  userData: User;
  showModal: boolean;
  handleClose: any;
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name : {userData.name}</p>
        <p>Email : {userData.email}</p>
        <p>Gender : {userData.gender}</p>
        <p>Current Status : {userData.status}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className=".close_btn" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Viewuser;
