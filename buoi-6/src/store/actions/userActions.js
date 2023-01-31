import { ADD_USER, REMOVE_USER, UPDATE_USER } from "../types/userTypes";

export const addUserAction = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};
export const updateUserAction = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
export const removeUserAction = (payload) => {
  return {
    type: REMOVE_USER,
    payload,
  };
};
