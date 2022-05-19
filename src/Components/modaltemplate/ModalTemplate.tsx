import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ModalTemplate.css";

const ModalTemplate = ({
  title_name,
  userModal,
  closeModal,
  children,
}: {
  title_name: string;
  userModal: boolean;
  closeModal: () => void;
  children: any;
}) => {
  return (
    <Modal show={userModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="title text-black">{title_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button className="close_btn" variant="primary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTemplate;
