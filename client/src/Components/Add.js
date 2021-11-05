import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewUser, getUsers } from "../redux/action";

const Add = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  let handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(name, email, number));
    dispatch(getUsers());
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Body>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Body>
          Number:{" "}
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onSubmit={handelSubmit}
            type="submit"
            variant="primary"
            onClick={handleClose}
          >
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
