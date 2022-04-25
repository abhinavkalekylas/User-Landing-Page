import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./Viewuser.css"

const Viewuser = ({userData, showModal, handleClose }: {userData: any, showModal: boolean, handleClose: any}) => {
  // const { name, email, gender, status } = userData;

  const [userd, setUserd] = useState([
    {
      name: "",
      email: "",
      gender: "",
      status: "",
    },
  ]);

  // console.log("User:  ", userId);

  // useEffect(() => {
  //   getUser(userId);
  // }, [userId]);

  // const getUser = async (id:any) => {
  //   try {
  //     const token =
  //       "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";
  //     const res = await axios(`https://gorest.co.in/public/v2/users/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     // console.log(res.data);
  //     const data = res.data;
  //     // console.log(data);

  //     // Update users
  //     setUserd(data);
  //   } catch (error) {
  //     console.log("Error while getting all users ", error);
  //   }
  // };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Name: {userData.name}</h2>
        <h4>Email: {userData.email}</h4>
        <h6>Gender: {userData.gender}</h6>
        <h6>Current Status: {userData.status}</h6>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Viewuser;
