import { useEffect } from "react";
import React, { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { getUsers } from "../redux/action";

const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <h1> Loading ...</h1>
      ) : (
        users.map((user, i) => <UserCard user={user} key={i} />)
      )}
    </div>
  );
};

export default UserList;
