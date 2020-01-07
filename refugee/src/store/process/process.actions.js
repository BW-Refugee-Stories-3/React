export const GET_PROCESS_START = "GET_PROCESS_START";
export const GET_PROCESS_SUCCESS = "GET_PROCESS_SUCCESS";
export const GET_PROCESS_FAIL = "GET_PROCESS_FAIL";

export const getProcessStart = () => ({ type: GET_PROCESS_START });
export const getProcessSuccess = data => ({
  type: GET_PROCESS_SUCCESS,
  payload: data
});
export const getProcessFail = data => ({
  type: GET_PROCESS_FAIL,
  payload: data
});

export const GET_PROCESS_ID_START = "GET_PROCESS_ID_START";
export const GET_PROCESS_ID_SUCCESS = "GET_PROCESS_ID_SUCCESS";
export const GET_PROCESS_ID_FAIL = "GET_PROCESS_ID_FAIL";

export const getProcessIdStart = () => ({ type: GET_PROCESS_ID_START });
export const getProcessIdSuccess = data => ({
  type: GET_PROCESS_ID_SUCCESS,
  payload: data
});
export const getProcessIdFail = data => ({
  type: GET_PROCESS_ID_FAIL,
  payload: data
});

export const PUT_PROCESS_ID_START = "PUT_PROCESS_ID_START";
export const PUT_PROCESS_ID_SUCCESS = "PUT_PROCESS_ID_SUCCESS";
export const PUT_PROCESS_ID_FAIL = "PUT_PROCESS_ID_FAIL";

export const putProcessIdStart = () => ({ type: PUT_PROCESS_ID_START });
export const putProcessIdSuccess = data => ({
  type: PUT_PROCESS_ID_SUCCESS,
  payload: data
});
export const putProcessIdFail = data => ({
  type: PUT_PROCESS_ID_FAIL,
  payload: data
});

export const DELETE_PROCESS_ID_START = "DELETE_PROCESS_ID_START";
export const DELETE_PROCESS_ID_SUCCESS = "DELETE_PROCESS_ID_SUCCESS";
export const DELETE_PROCESS_ID_FAIL = "DELETE_PROCESS_ID_FAIL";

export const deleteProcessIdStart = () => ({ type: DELETE_PROCESS_ID_START });
export const deleteProcessIdSuccess = data => ({
  type: DELETE_PROCESS_ID_SUCCESS,
  payload: data
});
export const deleteProcessIdFail = data => ({
  type: DELETE_PROCESS_ID_FAIL,
  payload: data
});
