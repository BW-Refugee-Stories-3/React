import { GET_TOKEN, SET_TOKEN } from "./token.actions";

const initialState = {
  token: ""
};

export function tokenReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TOKEN:
      return { ...state };
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
}
