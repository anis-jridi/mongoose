import axios from "axios";
import { ADD, DELETE, GET } from "./actionTypes";

// get users

export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/user/get/");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert(`get error`);
  }
};

// delete users

export const deleteUsers = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert(`delete error`);
  }
};

// add user
export const addNewUser = (name, email, number) => async (dispatch) => {
  try {
    let newUser = { name, email, number };
    let res = await axios.post("/user/post/", newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    alert(`add error`);
  }
};
