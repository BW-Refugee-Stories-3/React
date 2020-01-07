import { useDispatch, useSelector } from "react-redux";
import {
  getProcess,
  getProcessId,
  putProcessId,
  deleteProcessId
} from "./process.thunk";

export function useGetProcess() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.processReducer.stories);

  function dispatchGetProcess() {
    return dispatch(getProcess());
  }

  return [state, dispatchGetProcess];
}

export function useGetProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state =>
    state.processReducer.stories.find(story => story.id === id)
  );

  function dispatchGetProcessId() {
    dispatch(getProcessId(id));
  }

  return [state, dispatchGetProcessId];
}


export function usePutProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state =>
    state.processReducer.stories.find(story => story.id === id)
  );

  function dispatchPutProcessId() {
    dispatch(putProcessId(id));
  }

  return [state, dispatchPutProcessId];
}

export function useDeleteProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state =>
    state.processReducer.stories.find(story => story.id === id)
  );

  function dispatchDeleteProcessId() {
    dispatch(deleteProcessId(id));
  }

  return [state, dispatchDeleteProcessId];
}
