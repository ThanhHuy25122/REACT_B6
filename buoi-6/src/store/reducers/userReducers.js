import { ADD_USER, REMOVE_USER, UPDATE_USER } from "../types/userTypes";

const DEFAULT_STATE = {
  userList: null,
  isSelectedUser: null,
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      break;
    case UPDATE_USER:
      break;
    case REMOVE_USER:
      break;

    default:
      break;
  }

  return { ...state };
};
