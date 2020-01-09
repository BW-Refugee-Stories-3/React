export const GET_TOKEN = "GET_TOKEN";
export const SET_TOKEN = "SET_TOKEN";

export const getToken = () => ({ type: GET_TOKEN });
export const setToken = data => ({
  type: SET_TOKEN,
  payload: data
});
