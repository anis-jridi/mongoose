import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUsers, getUsers } from "../redux/action";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.number}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(deleteUsers(user._id));
              dispatch(getUsers());
            }}
          >
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
