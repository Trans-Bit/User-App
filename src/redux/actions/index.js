import { ADD_USER } from "../constants";

export const addUser = data => dispatch => {
  console.log(data);
  dispatch({
    type: ADD_USER,
    payload: data
  });
};
