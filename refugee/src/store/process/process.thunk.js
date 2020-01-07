import axios from "axios";
import {
  getProcessStart,
  getProcessSuccess,
  getProcessFail,
  getProcessIdStart,
  getProcessIdSuccess,
  getProcessIdFail,
  putProcessIdStart,
  putProcessIdSuccess,
  putProcessIdFail,
  deleteProcessIdStart,
  deleteProcessIdSuccess,
  deleteProcessIdFail
} from "./process.actions";
import { baseUrl } from "../../util";

export const getProcess = () => async dispatch => {
  dispatch(getProcessStart());

  try {
    const res = await axios.get(`${baseUrl}//api/stories/process`);
    dispatch(getProcessSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(getProcessFail(err));
  }
};

export const getProcessId = id => async dispatch => {
  dispatch(getProcessIdStart());

  try {
    const res = await axios.get(`${baseUrl}/api/stories/process/${id}`);
    dispatch(getProcessIdSuccess(res.data, id));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(getProcessIdFail(err));
  }
};

export const putProcessId = id => async dispatch => {
  dispatch(putProcessIdStart());

  try {
    const res = await axios.put(`${baseUrl}/api/stories/process/${id}`);
    dispatch(putProcessIdSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(putProcessIdFail(err));
  }
};

export const deleteProcessId = id => async dispatch => {
  dispatch(deleteProcessIdStart());

  try {
    const res = await axios.delete(`${baseUrl}/api/stories/process/${id}`);
    dispatch(deleteProcessIdSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(deleteProcessIdFail(err));
  }
};
