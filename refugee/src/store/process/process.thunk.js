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

const instance = axios.create({
  baseURL: baseUrl,
  headers: { Authorization: window.sessionStorage.getItem("token") }
});

export const getProcess = () => async dispatch => {
  dispatch(getProcessStart());

  try {
    const res = await instance.get(`${baseUrl}/api/stories/process`);
    console.log(res);
    dispatch(getProcessSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(getProcessFail(err));
  }
};

export const getProcessId = id => async dispatch => {
  dispatch(getProcessIdStart());

  try {
    const res = await instance.get(`${baseUrl}/api/stories/process/${id}`);

    dispatch(getProcessIdSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(getProcessIdFail(err));
  }
};

export const putProcessId = (id, data) => async dispatch => {
  dispatch(putProcessIdStart());

  try {
    const res = await instance.put(
      `${baseUrl}/api/stories/process/${id}`,
      data
    );
    console.log(res);
    dispatch(putProcessIdSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(putProcessIdFail(err));
  }
};

export const deleteProcessId = id => async dispatch => {
  dispatch(deleteProcessIdStart());

  try {
    const res = await instance.delete(`${baseUrl}/api/stories/process/${id}`);
    dispatch(deleteProcessIdSuccess(res.data));
  } catch (err) {
    console.error(err.response.data.Error);
    dispatch(deleteProcessIdFail(err));
  }
};
