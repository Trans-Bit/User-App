import { ADD_USER } from "../constants";
const initialState = {};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    state = action.payload;
    state["auth"] = true;
  }
  return state;
}
export default rootReducer;
