import { ADD, DELETE, GET } from "./actionTypes";

let init = {
  users: null,
  loading: true,
};
export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        users: state.users.filter((el) => el._id !== payload),
      };
    case ADD:
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };

    default:
      return state;
  }
};
